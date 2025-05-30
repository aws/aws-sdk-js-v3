import { RpcProtocol } from "@smithy/core/protocols";
import { deref, ErrorSchema, NormalizedSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import {
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
import { calculateBodyLength } from "@smithy/util-body-length-browser";

import { JsonCodec } from "./JsonCodec";
import { loadRestJsonErrorCode } from "./parseJsonBody";

/**
 * @alpha
 */
export abstract class AwsJsonRpcProtocol extends RpcProtocol {
  protected serializer: ShapeSerializer<string | Uint8Array>;
  protected deserializer: ShapeDeserializer<string | Uint8Array>;
  private codec: JsonCodec;

  protected constructor({ defaultNamespace }: { defaultNamespace: string }) {
    super({
      defaultNamespace,
    });
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
      "x-amz-target":
        (this.getJsonRpcVersion() === "1.0" ? `JsonRpc10.` : `JsonProtocol.`) +
        NormalizedSchema.of(operationSchema).getName(),
    });
    if (deref(operationSchema.input) === "unit" || !request.body) {
      request.body = "{}";
    }
    try {
      request.headers["content-length"] = String(calculateBodyLength(request.body));
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
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
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
    for (const [name, member] of ns.structIterator()) {
      const target = member.getMergedTraits().jsonName ?? name;
      output[name] = this.codec.createDeserializer().readObject(member, dataObject[target]);
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
