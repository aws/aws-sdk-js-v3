import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVoiceConnectorTerminationCredentials } from "../model/ListVoiceConnectorTerminationCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVoiceConnectorTerminationCredentialsInput } from "../types/ListVoiceConnectorTerminationCredentialsInput";
import { ListVoiceConnectorTerminationCredentialsOutput } from "../types/ListVoiceConnectorTerminationCredentialsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/ListVoiceConnectorTerminationCredentialsInput";
export * from "../types/ListVoiceConnectorTerminationCredentialsOutput";
export * from "../types/ListVoiceConnectorTerminationCredentialsExceptionsUnion";

export class ListVoiceConnectorTerminationCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVoiceConnectorTerminationCredentialsInput,
      OutputTypesUnion,
      ListVoiceConnectorTerminationCredentialsOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVoiceConnectorTerminationCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVoiceConnectorTerminationCredentialsInput,
    ListVoiceConnectorTerminationCredentialsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVoiceConnectorTerminationCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVoiceConnectorTerminationCredentialsInput,
    ListVoiceConnectorTerminationCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListVoiceConnectorTerminationCredentialsInput,
        ListVoiceConnectorTerminationCredentialsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
