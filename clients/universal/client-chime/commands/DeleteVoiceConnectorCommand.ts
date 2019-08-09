import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVoiceConnector } from "../model/DeleteVoiceConnector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVoiceConnectorInput } from "../types/DeleteVoiceConnectorInput";
import { DeleteVoiceConnectorOutput } from "../types/DeleteVoiceConnectorOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/DeleteVoiceConnectorInput";
export * from "../types/DeleteVoiceConnectorOutput";
export * from "../types/DeleteVoiceConnectorExceptionsUnion";

export class DeleteVoiceConnectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVoiceConnectorInput,
      OutputTypesUnion,
      DeleteVoiceConnectorOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVoiceConnector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVoiceConnectorInput,
    DeleteVoiceConnectorOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVoiceConnectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVoiceConnectorInput,
    DeleteVoiceConnectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVoiceConnectorInput, DeleteVoiceConnectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
