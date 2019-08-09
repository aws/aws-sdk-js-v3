import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterActivityType } from "../model/RegisterActivityType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterActivityTypeInput } from "../types/RegisterActivityTypeInput";
import { RegisterActivityTypeOutput } from "../types/RegisterActivityTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RegisterActivityTypeInput";
export * from "../types/RegisterActivityTypeOutput";
export * from "../types/RegisterActivityTypeExceptionsUnion";

export class RegisterActivityTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterActivityTypeInput,
      OutputTypesUnion,
      RegisterActivityTypeOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterActivityType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterActivityTypeInput,
    RegisterActivityTypeOutput,
    Blob
  >();

  constructor(readonly input: RegisterActivityTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterActivityTypeInput,
    RegisterActivityTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterActivityTypeInput, RegisterActivityTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
