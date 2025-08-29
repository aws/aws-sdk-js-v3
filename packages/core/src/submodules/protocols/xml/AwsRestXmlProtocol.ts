import {
  HttpBindingProtocol,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
} from "@smithy/core/protocols";
import { NormalizedSchema, OperationSchema, SCHEMA } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  MetadataBearer,
  ResponseMetadata,
  SerdeFunctions,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

import { ProtocolLib } from "../ProtocolLib";
import { loadRestXmlErrorCode } from "./parseXmlBody";
import { XmlCodec, XmlSettings } from "./XmlCodec";

/**
 * @alpha
 */
export class AwsRestXmlProtocol extends HttpBindingProtocol {
  private readonly codec: XmlCodec;
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  private readonly mixin = new ProtocolLib();

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
    const inputSchema = NormalizedSchema.of(operationSchema.input);

    if (!request.headers["content-type"]) {
      const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
      if (contentType) {
        request.headers["content-type"] = contentType;
      }
    }

    if (request.headers["content-type"] === this.getDefaultContentType()) {
      if (typeof request.body === "string") {
        request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
      }
    }

    if (request.body) {
      try {
        request.headers["content-length"] = this.mixin.calculateContentLength(request.body, this.serdeContext);
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

    const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(
      errorIdentifier,
      this.options.defaultNamespace,
      response,
      dataObject,
      metadata
    );

    const ns = NormalizedSchema.of(errorSchema);
    const message =
      dataObject.Error?.message ?? dataObject.Error?.Message ?? dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);

    await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
    const output = {} as any;
    for (const [name, member] of ns.structIterator()) {
      const target = member.getMergedTraits().xmlName ?? name;
      const value = dataObject.Error?.[target] ?? dataObject[target];
      output[name] = this.codec.createDeserializer().readSchema(member, value);
    }

    throw Object.assign(
      exception,
      errorMetadata,
      {
        $fault: ns.getMergedTraits().error,
        message,
      },
      output
    );
  }

  /**
   * @override
   */
  protected getDefaultContentType(): string {
    return "application/xml";
  }
}
