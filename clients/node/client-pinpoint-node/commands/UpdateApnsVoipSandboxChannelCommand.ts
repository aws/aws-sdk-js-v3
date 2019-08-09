import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateApnsVoipSandboxChannel } from "../model/UpdateApnsVoipSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApnsVoipSandboxChannelInput } from "../types/UpdateApnsVoipSandboxChannelInput";
import { UpdateApnsVoipSandboxChannelOutput } from "../types/UpdateApnsVoipSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateApnsVoipSandboxChannelInput";
export * from "../types/UpdateApnsVoipSandboxChannelOutput";
export * from "../types/UpdateApnsVoipSandboxChannelExceptionsUnion";

export class UpdateApnsVoipSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApnsVoipSandboxChannelInput,
      OutputTypesUnion,
      UpdateApnsVoipSandboxChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateApnsVoipSandboxChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApnsVoipSandboxChannelInput,
    UpdateApnsVoipSandboxChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateApnsVoipSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateApnsVoipSandboxChannelInput,
    UpdateApnsVoipSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateApnsVoipSandboxChannelInput,
        UpdateApnsVoipSandboxChannelOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
