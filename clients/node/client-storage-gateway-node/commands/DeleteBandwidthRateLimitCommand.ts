import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBandwidthRateLimit } from "../model/DeleteBandwidthRateLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBandwidthRateLimitInput } from "../types/DeleteBandwidthRateLimitInput";
import { DeleteBandwidthRateLimitOutput } from "../types/DeleteBandwidthRateLimitOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteBandwidthRateLimitInput";
export * from "../types/DeleteBandwidthRateLimitOutput";
export * from "../types/DeleteBandwidthRateLimitExceptionsUnion";

export class DeleteBandwidthRateLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBandwidthRateLimitInput,
      OutputTypesUnion,
      DeleteBandwidthRateLimitOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBandwidthRateLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBandwidthRateLimitInput,
    DeleteBandwidthRateLimitOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBandwidthRateLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBandwidthRateLimitInput,
    DeleteBandwidthRateLimitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
