import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApnsVoipSandboxChannel } from "../model/DeleteApnsVoipSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApnsVoipSandboxChannelInput } from "../types/DeleteApnsVoipSandboxChannelInput";
import { DeleteApnsVoipSandboxChannelOutput } from "../types/DeleteApnsVoipSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteApnsVoipSandboxChannelInput";
export * from "../types/DeleteApnsVoipSandboxChannelOutput";
export * from "../types/DeleteApnsVoipSandboxChannelExceptionsUnion";

export class DeleteApnsVoipSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApnsVoipSandboxChannelInput,
      OutputTypesUnion,
      DeleteApnsVoipSandboxChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApnsVoipSandboxChannelInput,
    DeleteApnsVoipSandboxChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteApnsVoipSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApnsVoipSandboxChannelInput,
    DeleteApnsVoipSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DeleteApnsVoipSandboxChannel
    };

    return stack.resolve(
      handler<
        DeleteApnsVoipSandboxChannelInput,
        DeleteApnsVoipSandboxChannelOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
