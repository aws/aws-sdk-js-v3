import {
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
  HttpProtocol,
} from "@smithy/core/protocols";
import { ErrorSchema, NormalizedSchema, OperationSchema, TypeRegistry } from "@smithy/core/schema";
import { parseRfc7231DateTime } from "@smithy/core/serde";
import type {
  Codec,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse,
  MetadataBearer,
  ResponseMetadata,
  ShapeDeserializer,
  ShapeSerializer,
  StructureSchema,
} from "@smithy/types";

import { loadRestXmlErrorCode } from "./parseXmlBody";
import { XmlCodec } from "./XmlCodec";

export class AwsRestXmlProtocol extends HttpProtocol {
  private codec: Codec<string, string>;
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;

  public constructor(public readonly xmlNamespace: string, public readonly serviceNamespace: string) {
    super();
    this.codec = new XmlCodec(this.xmlNamespace, this.serviceNamespace);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer());
    this.deserializer = new HttpInterceptingShapeDeserializer(
      this.codec.createDeserializer(),
      TypeRegistry.for(serviceNamespace),
      parseRfc7231DateTime as (time: string) => Date
    );
  }

  public getShapeId(): string {
    return "aws.protocols#restXml";
  }

  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext
  ): Promise<IHttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    const ns = NormalizedSchema.of(operationSchema.input);

    request.path = String(request.path)
      .split("/")
      .filter((segment) => {
        // for legacy reasons,
        // Bucket is in the http trait but is handled by endpoints ruleset.
        return segment !== "{Bucket}";
      })
      .join("/");

    const schema = ns.getSchema() as StructureSchema;
    const hasXmlPayload = Object.values(schema?.members).find(([ref, traits]) => {
      const isPayload = !!traits.httpPayload;
      const isStreaming = NormalizedSchema.of([ref, traits]).isStreaming();
      return isPayload && !isStreaming;
    });

    for (const memberName of Object.keys(input ?? {})) {
      const memberNs = ns.getMemberSchema(memberName);
      if (memberNs === undefined) {
        continue;
      }
      const memberTraits = memberNs.getMemberTraits();
      if (memberTraits.httpLabel) {
        request.path = request.path.replace(
          new RegExp(`\\{${memberName}\\+?\\}`),
          input[memberName as keyof typeof input] as string
        );
      }
    }

    if (hasXmlPayload) {
      request.headers["content-type"] = "application/xml";
      request.body = '<?xml version="1.0" encoding="UTF-8"?>' + request.body;
    }

    return request;
  }

  public async deserializeResponse<Output extends MetadataBearer>(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext,
    response: IHttpResponse
  ): Promise<Output> {
    return super.deserializeResponse<Output>(operationSchema, context, response);
  }

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext,
    response: IHttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const error = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";

    const registry = TypeRegistry.schemaToRegistry.get(operationSchema);
    if (!registry) {
      // TODO(schema) throw client base exception using the dataObject.
      throw new Error("registry not found for " + error);
    }
    const errorSchema: ErrorSchema = registry.getSchema(error) as ErrorSchema;

    if (!errorSchema) {
      // TODO(schema) throw client base exception using the dataObject.
      throw new Error("schema not found for " + error);
    }
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);
    Object.assign(exception, {
      $metadata: metadata,
      $response: response,
      message,
      ...dataObject,
    });

    throw exception;
  }
}
