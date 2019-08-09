import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartOutboundVoiceContact } from "../model/StartOutboundVoiceContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartOutboundVoiceContactInput } from "../types/StartOutboundVoiceContactInput";
import { StartOutboundVoiceContactOutput } from "../types/StartOutboundVoiceContactOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/StartOutboundVoiceContactInput";
export * from "../types/StartOutboundVoiceContactOutput";
export * from "../types/StartOutboundVoiceContactExceptionsUnion";

export class StartOutboundVoiceContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartOutboundVoiceContactInput,
      OutputTypesUnion,
      StartOutboundVoiceContactOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = StartOutboundVoiceContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartOutboundVoiceContactInput,
    StartOutboundVoiceContactOutput,
    Blob
  >();

  constructor(readonly input: StartOutboundVoiceContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartOutboundVoiceContactInput,
    StartOutboundVoiceContactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartOutboundVoiceContactInput, StartOutboundVoiceContactOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
