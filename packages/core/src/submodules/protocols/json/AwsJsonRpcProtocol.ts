import { RpcProtocol } from "@smithy/core/protocols";
import { deref, NormalizedSchema, SCHEMA } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  SerdeFunctions,
  ShapeDeserializer,
  ShapeSerializer,
} from "@smithy/types";

import { ProtocolLib } from "../ProtocolLib";
import { JsonCodec } from "./JsonCodec";
import { loadRestJsonErrorCode } from "./parseJsonBody";

/**
 * @alpha
 */
export abstract class AwsJsonRpcProtocol extends RpcProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  protected serviceTarget: string;
  private readonly codec: JsonCodec;
  private readonly mixin = new ProtocolLib();

  protected constructor({ defaultNamespace, serviceTarget }: { defaultNamespace: string; serviceTarget: string }) {
    super({
      defaultNamespace,
    });
    this.serviceTarget = serviceTarget;
    this.codec = new JsonCodec({
      timestampFormat: {
        useTrait: true,
        default: SCHEMA.TIMESTAMP_EPOCH_SECONDS,
      },
      jsonName: false,
    });
    this.serializer = this.codec.createSerializer();
    this.deserializer = this.codec.createDeserializer();
  }

  public async serializeRequest<Input extends object>(
    operationSchema: OperationSchema,
    input: Input,
    context: HandlerExecutionContext & SerdeFunctions & EndpointBearer
  ): Promise<HttpRequest> {
    const request = await super.serializeRequest(operationSchema, input, context);
    if (!request.path.endsWith("/")) {
      request.path += "/";
    }
    Object.assign(request.headers, {
      "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
      "x-amz-target": `${this.serviceTarget}.${NormalizedSchema.of(operationSchema).getName()}`,
    });
    if (deref(operationSchema.input) === "unit" || !request.body) {
      request.body = "{}";
    }
    try {
      request.headers["content-length"] = this.mixin.calculateContentLength(request.body, this.serdeContext);
    } catch (e) {}
    return request;
  }

  public getPayloadCodec(): JsonCodec {
    return this.codec;
  }

  protected abstract getJsonRpcVersion(): "1.1" | "1.0";

  protected async handleError(
    operationSchema: OperationSchema,
    context: HandlerExecutionContext & SerdeFunctions,
    response: HttpResponse,
    dataObject: any,
    metadata: ResponseMetadata
  ): Promise<never> {
    // loadRestJsonErrorCode is still used in JSON RPC.
    const errorIdentifier = loadRestJsonErrorCode(response, dataObject) ?? "Unknown";

    const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(
      errorIdentifier,
      this.options.defaultNamespace,
      response,
      dataObject,
      metadata
    );

    const ns = NormalizedSchema.of(errorSchema);
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
    const exception = new errorSchema.ctor(message);

    await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
    const output = {} as any;
    for (const [name, member] of ns.structIterator()) {
      const target = member.getMergedTraits().jsonName ?? name;
      output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
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
}
