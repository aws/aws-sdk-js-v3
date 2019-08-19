import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConnectorDefinition } from "../model/operations/DeleteConnectorDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConnectorDefinitionInput } from "../types/DeleteConnectorDefinitionInput";
import { DeleteConnectorDefinitionOutput } from "../types/DeleteConnectorDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/DeleteConnectorDefinitionInput";
export * from "../types/DeleteConnectorDefinitionOutput";
export * from "../types/DeleteConnectorDefinitionExceptionsUnion";

export class DeleteConnectorDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConnectorDefinitionInput,
      OutputTypesUnion,
      DeleteConnectorDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConnectorDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConnectorDefinitionInput,
    DeleteConnectorDefinitionOutput,
    Blob
  >();

  constructor(readonly input: DeleteConnectorDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConnectorDefinitionInput,
    DeleteConnectorDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConnectorDefinitionInput, DeleteConnectorDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
