import { HttpProtocol } from "@smithy/core/protocols";
import {
  deref,
  ErrorSchema,
  HttpInterceptingShapeSerializer,
  NormalizedSchema,
  OperationSchema,
  TypeRegistry,
} from "@smithy/core/schema";
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
  private codec: Codec<string>;
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer;

  public constructor(public readonly xmlNamespace: string) {
    super();
    this.codec = new XmlCodec(this.xmlNamespace);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer());
    this.deserializer = this.codec.createDeserializer();
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

    const schema = deref(operationSchema?.input) as StructureSchema;
    const hasXmlPayload = Object.values(schema?.members).find(([ref, traits]) => {
      const isPayload = !!traits.httpPayload;
      const isStreaming = !!traits.streaming || !!NormalizedSchema.of(ref).getMergedTraits().streaming;
      return isPayload && !isStreaming;
    });

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
