import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendVoiceMessage } from "../model/operations/SendVoiceMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendVoiceMessageInput } from "../types/SendVoiceMessageInput";
import { SendVoiceMessageOutput } from "../types/SendVoiceMessageOutput";
import { PinpointSMSVoiceResolvedConfiguration } from "../PinpointSMSVoiceConfiguration";
export * from "../types/SendVoiceMessageInput";
export * from "../types/SendVoiceMessageOutput";
export * from "../types/SendVoiceMessageExceptionsUnion";

export class SendVoiceMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendVoiceMessageInput,
      OutputTypesUnion,
      SendVoiceMessageOutput,
      PinpointSMSVoiceResolvedConfiguration,
      Blob
    > {
  readonly model = SendVoiceMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendVoiceMessageInput,
    SendVoiceMessageOutput,
    Blob
  >();

  constructor(readonly input: SendVoiceMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointSMSVoiceResolvedConfiguration
  ): __aws_sdk_types.Handler<SendVoiceMessageInput, SendVoiceMessageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendVoiceMessageInput, SendVoiceMessageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
