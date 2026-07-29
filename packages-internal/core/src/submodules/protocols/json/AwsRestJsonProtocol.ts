import {
  HttpBindingProtocol,
  HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer,
} from "@smithy/core/protocols";
import type { TypeRegistry } from "@smithy/core/schema";
import { NormalizedSchema } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest,
  HttpResponse,
  MetadataBearer,
  OperationSchema,
  ResponseMetadata,
  SerdeFunctions,
  ShapeDeserializer,
  ShapeSerializer,
  TimestampEpochSecondsSchema,
} from "@smithy/types";

import { ProtocolLib } from "../ProtocolLib";
import type { JsonSettings } from "./JsonSettings";
import type { JsonCodec } from "./codec-v1/JsonCodec";
import { JsonCodec2 } from "./codec-v2/JsonCodec2";
import { loadRestJsonErrorCode } from "./parseJsonBody";
import type { JsonShapeDeserializer2 } from "./codec-v2/JsonShapeDeserializer2";

/**
 * @public
 */
export class AwsRestJsonProtocol extends HttpBindingProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  private readonly codec: JsonCodec | JsonCodec2;
  private readonly mixin = new ProtocolLib();

  public constructor({
    defaultNamespace,
    errorTypeRegistries,
    jsonCodec,
  }: {
    defaultNamespace: string;
    errorTypeRegistries?: TypeRegistry[];
    jsonCodec?: JsonCodec | JsonCodec2;
  }) {
    super({
      defaultNamespace,
      errorTypeRegistries,
    });
    const settings: JsonSettings = {
      timestampFormat: {
        useTrait: true,
        default: 7 as const satisfies TimestampEpochSecondsSchema,
      },
      httpBindings: true,
      jsonName: true,
    };
    this.codec = jsonCodec ?? new JsonCodec2(settings);
    this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings);
    this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings);
  }

  public getShapeId(): string {
    return "aws.protocols#restJson1";
  }

  public getPayloadCodec() {
    return this.codec;
  }

  public setSerdeContext(serdeContext: SerdeFunctions) {
    this.codec.setSerdeContext(serdeContext);
    super.setSerdeContext(serdeContext);
  }

  /**
   * @override
   */
  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeFunctions & EndpointBearer
  ): Promise<HttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    const inputSchema = NormalizedSchema.of(operationSchema.input);

    if (!request.headers["content-type"]) {
      const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
      if (contentType) {
        request.headers["content-type"] = contentType;
      }
    }

    if (request.body == null && request.headers["content-type"] === this.getDefaultContentType()) {
      // if content type is blob or string shape, we don't set a default body.
      request.body = "{}";
    }

    // content-length header is set by the contentLengthMiddleware.

    return request;
  }

  /**
   * @override
   */
  public async deserializeResponse<Output extends MetadataBearer>(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: HttpResponse
  ): Promise<Output> {
    const output: any & MetadataBearer = await super.deserializeResponse(operationSchema, context, response);
    const outputSchema = NormalizedSchema.of(operationSchema.output);
    for (const [name, member] of outputSchema.structIterator()) {
      if (member.getMemberTraits().httpPayload && !(name in output)) {
        output[name] = null;
      }
    }
    return output;
  }

  /**
   * @override
   */
  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";
    this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);

    const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(
      errorIdentifier,
      this.options.defaultNamespace,
      response,
      dataObject,
      metadata
    );

    const ns = NormalizedSchema.of(errorSchema);
    const message = dataObject.message ?? dataObject.Message ?? "UnknownError";
    const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
    const exception = new ErrorCtor({});

    await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
    const output = {} as any;
    const errorDeserializer = this.codec.createDeserializer() as JsonShapeDeserializer2;
    for (const [name, member] of ns.structIterator()) {
      const target = member.getMergedTraits().jsonName ?? name;
      output[name] = errorDeserializer.readObject(member, dataObject[target]);
    }

    throw this.mixin.decorateServiceException(
      Object.assign(
        exception,
        errorMetadata,
        {
          $fault: ns.getMergedTraits().error,
          message,
        },
        output
      ),
      dataObject
    );
  }

  /**
   * @override
   */
  protected getDefaultContentType(): string {
    return "application/json";
  }
}
