import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartChannel } from "../model/operations/StartChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartChannelInput } from "../types/StartChannelInput";
import { StartChannelOutput } from "../types/StartChannelOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/StartChannelInput";
export * from "../types/StartChannelOutput";
export * from "../types/StartChannelExceptionsUnion";

export class StartChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartChannelInput,
      OutputTypesUnion,
      StartChannelOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartChannelInput,
    StartChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<StartChannelInput, StartChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartChannelInput, StartChannelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
