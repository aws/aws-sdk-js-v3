import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVoiceConnectorTermination } from "../model/DeleteVoiceConnectorTermination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVoiceConnectorTerminationInput } from "../types/DeleteVoiceConnectorTerminationInput";
import { DeleteVoiceConnectorTerminationOutput } from "../types/DeleteVoiceConnectorTerminationOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteVoiceConnectorTerminationInput";
export * from "../types/DeleteVoiceConnectorTerminationOutput";
export * from "../types/DeleteVoiceConnectorTerminationExceptionsUnion";

export class DeleteVoiceConnectorTerminationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVoiceConnectorTerminationInput,
      OutputTypesUnion,
      DeleteVoiceConnectorTerminationOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVoiceConnectorTermination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVoiceConnectorTerminationInput,
    DeleteVoiceConnectorTerminationOutput,
    Blob
  >();

  constructor(readonly input: DeleteVoiceConnectorTerminationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVoiceConnectorTerminationInput,
    DeleteVoiceConnectorTerminationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVoiceConnectorTerminationInput,
        DeleteVoiceConnectorTerminationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
