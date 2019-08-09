import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFunctionDefinition } from "../model/CreateFunctionDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFunctionDefinitionInput } from "../types/CreateFunctionDefinitionInput";
import { CreateFunctionDefinitionOutput } from "../types/CreateFunctionDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateFunctionDefinitionInput";
export * from "../types/CreateFunctionDefinitionOutput";
export * from "../types/CreateFunctionDefinitionExceptionsUnion";

export class CreateFunctionDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFunctionDefinitionInput,
      OutputTypesUnion,
      CreateFunctionDefinitionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateFunctionDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFunctionDefinitionInput,
    CreateFunctionDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateFunctionDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateFunctionDefinitionInput,
    CreateFunctionDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFunctionDefinitionInput, CreateFunctionDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
