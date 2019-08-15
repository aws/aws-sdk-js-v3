import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateResourceDefinition } from "../model/operations/CreateResourceDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceDefinitionInput } from "../types/CreateResourceDefinitionInput";
import { CreateResourceDefinitionOutput } from "../types/CreateResourceDefinitionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateResourceDefinitionInput";
export * from "../types/CreateResourceDefinitionOutput";
export * from "../types/CreateResourceDefinitionExceptionsUnion";

export class CreateResourceDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceDefinitionInput,
      OutputTypesUnion,
      CreateResourceDefinitionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = CreateResourceDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceDefinitionInput,
    CreateResourceDefinitionOutput,
    Blob
  >();

  constructor(readonly input: CreateResourceDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceDefinitionInput,
    CreateResourceDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceDefinitionInput, CreateResourceDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
