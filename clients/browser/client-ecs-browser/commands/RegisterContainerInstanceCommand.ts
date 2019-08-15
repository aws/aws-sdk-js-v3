import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterContainerInstance } from "../model/operations/RegisterContainerInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterContainerInstanceInput } from "../types/RegisterContainerInstanceInput";
import { RegisterContainerInstanceOutput } from "../types/RegisterContainerInstanceOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/RegisterContainerInstanceInput";
export * from "../types/RegisterContainerInstanceOutput";
export * from "../types/RegisterContainerInstanceExceptionsUnion";

export class RegisterContainerInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterContainerInstanceInput,
      OutputTypesUnion,
      RegisterContainerInstanceOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterContainerInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterContainerInstanceInput,
    RegisterContainerInstanceOutput,
    Blob
  >();

  constructor(readonly input: RegisterContainerInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterContainerInstanceInput,
    RegisterContainerInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterContainerInstanceInput, RegisterContainerInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
