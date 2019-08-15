import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterInstance } from "../model/operations/RegisterInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterInstanceInput } from "../types/RegisterInstanceInput";
import { RegisterInstanceOutput } from "../types/RegisterInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RegisterInstanceInput";
export * from "../types/RegisterInstanceOutput";
export * from "../types/RegisterInstanceExceptionsUnion";

export class RegisterInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterInstanceInput,
      OutputTypesUnion,
      RegisterInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterInstanceInput,
    RegisterInstanceOutput,
    Blob
  >();

  constructor(readonly input: RegisterInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterInstanceInput, RegisterInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterInstanceInput, RegisterInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
