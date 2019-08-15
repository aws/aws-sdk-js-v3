import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVoiceConnectorTerminationCredentials } from "../model/operations/DeleteVoiceConnectorTerminationCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVoiceConnectorTerminationCredentialsInput } from "../types/DeleteVoiceConnectorTerminationCredentialsInput";
import { DeleteVoiceConnectorTerminationCredentialsOutput } from "../types/DeleteVoiceConnectorTerminationCredentialsOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteVoiceConnectorTerminationCredentialsInput";
export * from "../types/DeleteVoiceConnectorTerminationCredentialsOutput";
export * from "../types/DeleteVoiceConnectorTerminationCredentialsExceptionsUnion";

export class DeleteVoiceConnectorTerminationCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVoiceConnectorTerminationCredentialsInput,
      OutputTypesUnion,
      DeleteVoiceConnectorTerminationCredentialsOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVoiceConnectorTerminationCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVoiceConnectorTerminationCredentialsInput,
    DeleteVoiceConnectorTerminationCredentialsOutput,
    Blob
  >();

  constructor(
    readonly input: DeleteVoiceConnectorTerminationCredentialsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVoiceConnectorTerminationCredentialsInput,
    DeleteVoiceConnectorTerminationCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVoiceConnectorTerminationCredentialsInput,
        DeleteVoiceConnectorTerminationCredentialsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
