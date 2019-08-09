import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBandwidthRateLimit } from "../model/UpdateBandwidthRateLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBandwidthRateLimitInput } from "../types/UpdateBandwidthRateLimitInput";
import { UpdateBandwidthRateLimitOutput } from "../types/UpdateBandwidthRateLimitOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateBandwidthRateLimitInput";
export * from "../types/UpdateBandwidthRateLimitOutput";
export * from "../types/UpdateBandwidthRateLimitExceptionsUnion";

export class UpdateBandwidthRateLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBandwidthRateLimitInput,
      OutputTypesUnion,
      UpdateBandwidthRateLimitOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBandwidthRateLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBandwidthRateLimitInput,
    UpdateBandwidthRateLimitOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBandwidthRateLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBandwidthRateLimitInput,
    UpdateBandwidthRateLimitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
