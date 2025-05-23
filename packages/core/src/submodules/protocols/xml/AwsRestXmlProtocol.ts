import {
  HttpBindingProtocol,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
} from "@smithy/core/protocols";
import { ErrorSchema, NormalizedSchema, OperationSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  MetadataBearer,
  ResponseMetadata,
  SerdeContext,
  SerdeFunctions,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";
import { calculateBodyLength } from "@smithy/util-body-length-browser";

import { loadRestXmlErrorCode } from "./parseXmlBody";
import { XmlCodec, XmlSettings } from "./XmlCodec";

export class AwsRestXmlProtocol extends HttpBindingProtocol {
  private readonly codec: XmlCodec;
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;

  public constructor(options: { defaultNamespace: string; xmlNamespace: string }) {
    super(options);
    const settings: XmlSettings = {
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_DATE_TIME,
      },
      httpBindings: true,
      xmlNamespace: options.xmlNamespace,
      serviceNamespace: options.defaultNamespace,
    };
    this.codec = new XmlCodec(settings);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
    this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
  }

  public getPayloadCodec(): XmlCodec {
    return this.codec;
  }

  public getShapeId(): string {
    return "aws.protocols#restXml";
  }

  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeFunctions & EndpointBearer
  ): Promise<IHttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    const ns = NormalizedSchema.of(operationSchema.input);
    const members = ns.getMemberSchemas();

    request.path =
      String(request.path)
        .split("/")
        .filter((segment) => {
          // for legacy reasons,
          // Bucket is in the http trait but is handled by endpoints ruleset.
          return segment !== "{Bucket}";
        })
        .join("/") || "/";

    if (!request.headers["content-type"]) {
      const httpPayloadMember = Object.values(members).find((m) => {
        return !!m.getMergedTraits().httpPayload;
      });

      if (httpPayloadMember) {
        const mediaType = httpPayloadMember.getMergedTraits().mediaType as string;
        if (mediaType) {
          request.headers["content-type"] = mediaType;
        } else if (httpPayloadMember.isStringSchema()) {
          request.headers["content-type"] = "text/plain";
        } else if (httpPayloadMember.isBlobSchema()) {
          request.headers["content-type"] = "application/octet-stream";
        } else {
          request.headers["content-type"] = "application/xml";
        }
      } else if (!ns.isUnitSchema()) {
        const hasBody = Object.values(members).find((m) => {
          const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m.getMergedTraits();
          return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === void 0;
        });
        if (hasBody) {
          request.headers["content-type"] = "application/xml";
        }
      }
    }

    if (request.headers["content-type"] === "application/xml") {
      if (typeof request.body === "string") {
        request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
      }
    }

    if (request.body) {
      try {
        // todo(schema): use config.bodyLengthChecker or move that into serdeContext.
        request.headers["content-length"] = String(calculateBodyLength(request.body));
      } catch (e) {}
    }

    return request;
  }

  public async deserializeResponse<Output extends MetadataBearer>(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: IHttpResponse
  ): Promise<Output> {
    return super.deserializeResponse<Output>(operationSchema, context, response);
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: IHttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
    let namespace = this.options.defaultNamespace;
    let errorName = errorIdentifier;
    if (errorIdentifier.includes("#")) {
      [namespace, errorName] = errorIdentifier.split("#");
    }

    const registry = TypeRegistry.for(namespace);
    let errorSchema: ErrorSchema;
    try {
      errorSchema = registry.getSchema(errorIdentifier) as ErrorSchema;
    } catch (e) {
      const baseExceptionSchema = TypeRegistry.for("awssdkjs.synthetic." + namespace).getBaseException();
      if (baseExceptionSchema) {
        const ErrorCtor = baseExceptionSchema.ctor;
        throw Object.assign(new ErrorCtor(errorName), dataObject);
      }
      throw new Error(errorName);
    }

    const ns = NormalizedSchema.of(errorSchema);
    const message =
      dataObject.Error?.message ?? dataObject.Error?.Message ?? dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);

    const headerBindings = new Set<string>(
      Object.values(NormalizedSchema.of(errorSchema).getMemberSchemas())
        .map((schema) => {
          return schema.getMergedTraits().httpHeader;
        })
        .filter(Boolean) as string[]
    );
    await this.deserializeHttpMessage(errorSchema, context, response, headerBindings, dataObject);
    const output = {} as any;
    for (const [name, member] of Object.entries(ns.getMemberSchemas())) {
      const target = member.getMergedTraits().xmlName ?? name;
      const value = dataObject.Error?.[target] ?? dataObject[target];
      output[name] = this.codec.createDeserializer().readSchema(member, value);
    }

    Object.assign(exception, {
      $metadata: metadata,
      $response: response,
      $fault: ns.getMergedTraits().error,
      message,
      ...output,
    });

    throw exception;
  }
}
