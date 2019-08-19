import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApnsVoipSandboxChannel } from "../model/operations/GetApnsVoipSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApnsVoipSandboxChannelInput } from "../types/GetApnsVoipSandboxChannelInput";
import { GetApnsVoipSandboxChannelOutput } from "../types/GetApnsVoipSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApnsVoipSandboxChannelInput";
export * from "../types/GetApnsVoipSandboxChannelOutput";
export * from "../types/GetApnsVoipSandboxChannelExceptionsUnion";

export class GetApnsVoipSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApnsVoipSandboxChannelInput,
      OutputTypesUnion,
      GetApnsVoipSandboxChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetApnsVoipSandboxChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApnsVoipSandboxChannelInput,
    GetApnsVoipSandboxChannelOutput,
    Blob
  >();

  constructor(readonly input: GetApnsVoipSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApnsVoipSandboxChannelInput,
    GetApnsVoipSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApnsVoipSandboxChannelInput, GetApnsVoipSandboxChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
