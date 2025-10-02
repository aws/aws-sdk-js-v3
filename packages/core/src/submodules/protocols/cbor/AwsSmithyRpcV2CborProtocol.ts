import { loadSmithyRpcV2CborErrorCode, SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import { NormalizedSchema, TypeRegistry } from "@smithy/core/schema";
import type {
  EndpointBearer,
  HandlerExecutionContext,
  HttpRequest,
  HttpResponse,
  OperationSchema,
  ResponseMetadata,
  SerdeFunctions,
} from "@smithy/types";

import { ProtocolLib } from "../ProtocolLib";

/**
 * Extends the Smithy implementation to add AwsQueryCompatibility support.
 *
 * @alpha
 */
export class AwsSmithyRpcV2CborProtocol extends SmithyRpcV2CborProtocol {
  private readonly awsQueryCompatible: boolean;
  private readonly mixin = new ProtocolLib();

  public constructor({
    defaultNamespace,
    awsQueryCompatible,
  }: {
    defaultNamespace: string;
    awsQueryCompatible?: boolean;
  }) {
    super({ defaultNamespace });
    this.awsQueryCompatible = !!awsQueryCompatible;
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
    if (this.awsQueryCompatible) {
      request.headers["x-amzn-query-mode"] = "true";
    }
    return request;
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
    if (this.awsQueryCompatible) {
      this.mixin.setQueryCompatError(dataObject, response);
    }
    const errorName = loadSmithyRpcV2CborErrorCode(response, dataObject) ?? "Unknown";

    const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(
      errorName,
      this.options.defaultNamespace,
      response,
      dataObject,
      metadata
    );

    const ns = NormalizedSchema.of(errorSchema);
    const message = dataObject.message ?? dataObject.Message ?? "Unknown";
    const ErrorCtor = TypeRegistry.for(errorSchema.namespace).getErrorCtor(errorSchema) ?? Error;
    const exception = new ErrorCtor(message);

    const output = {} as any;
    for (const [name, member] of ns.structIterator()) {
      output[name] = this.deserializer.readValue(member, dataObject[name]);
    }

    if (this.awsQueryCompatible) {
      this.mixin.queryCompatOutput(dataObject, output);
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
