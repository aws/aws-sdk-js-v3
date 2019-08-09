import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFunctionDefinition } from "../model/UpdateFunctionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFunctionDefinitionInput } from "../types/UpdateFunctionDefinitionInput";
import { UpdateFunctionDefinitionOutput } from "../types/UpdateFunctionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/UpdateFunctionDefinitionInput";
export * from "../types/UpdateFunctionDefinitionOutput";
export * from "../types/UpdateFunctionDefinitionExceptionsUnion";

export class UpdateFunctionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFunctionDefinitionInput,
      OutputTypesUnion,
      UpdateFunctionDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFunctionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFunctionDefinitionInput,
    UpdateFunctionDefinitionOutput,
    Blob
  >();

  constructor(readonly input: UpdateFunctionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFunctionDefinitionInput,
    UpdateFunctionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFunctionDefinitionInput, UpdateFunctionDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
