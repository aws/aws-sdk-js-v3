import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopChannel } from "../model/operations/StopChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopChannelInput } from "../types/StopChannelInput";
import { StopChannelOutput } from "../types/StopChannelOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/StopChannelInput";
export * from "../types/StopChannelOutput";
export * from "../types/StopChannelExceptionsUnion";

export class StopChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopChannelInput,
      OutputTypesUnion,
      StopChannelOutput,
      MediaLiveResolvedConfiguration,
      Blob
    > {
  readonly model = StopChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopChannelInput,
    StopChannelOutput,
    Blob
  >();

  constructor(readonly input: StopChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<StopChannelInput, StopChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopChannelInput, StopChannelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
