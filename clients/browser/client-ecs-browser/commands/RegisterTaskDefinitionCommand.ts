import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterTaskDefinition } from "../model/RegisterTaskDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterTaskDefinitionInput } from "../types/RegisterTaskDefinitionInput";
import { RegisterTaskDefinitionOutput } from "../types/RegisterTaskDefinitionOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/RegisterTaskDefinitionInput";
export * from "../types/RegisterTaskDefinitionOutput";
export * from "../types/RegisterTaskDefinitionExceptionsUnion";

export class RegisterTaskDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterTaskDefinitionInput,
      OutputTypesUnion,
      RegisterTaskDefinitionOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterTaskDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterTaskDefinitionInput,
    RegisterTaskDefinitionOutput,
    Blob
  >();

  constructor(readonly input: RegisterTaskDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterTaskDefinitionInput,
    RegisterTaskDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterTaskDefinitionInput, RegisterTaskDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
