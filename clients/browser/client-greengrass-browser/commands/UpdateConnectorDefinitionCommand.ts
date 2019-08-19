import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConnectorDefinition } from "../model/operations/UpdateConnectorDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConnectorDefinitionInput } from "../types/UpdateConnectorDefinitionInput";
import { UpdateConnectorDefinitionOutput } from "../types/UpdateConnectorDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateConnectorDefinitionInput";
export * from "../types/UpdateConnectorDefinitionOutput";
export * from "../types/UpdateConnectorDefinitionExceptionsUnion";

export class UpdateConnectorDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConnectorDefinitionInput,
      OutputTypesUnion,
      UpdateConnectorDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateConnectorDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConnectorDefinitionInput,
    UpdateConnectorDefinitionOutput,
    Blob
  >();

  constructor(readonly input: UpdateConnectorDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConnectorDefinitionInput,
    UpdateConnectorDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConnectorDefinitionInput, UpdateConnectorDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
