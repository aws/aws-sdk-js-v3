import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterToWorkMail } from "../model/operations/RegisterToWorkMail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterToWorkMailInput } from "../types/RegisterToWorkMailInput";
import { RegisterToWorkMailOutput } from "../types/RegisterToWorkMailOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/RegisterToWorkMailInput";
export * from "../types/RegisterToWorkMailOutput";
export * from "../types/RegisterToWorkMailExceptionsUnion";

export class RegisterToWorkMailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterToWorkMailInput,
      OutputTypesUnion,
      RegisterToWorkMailOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterToWorkMail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterToWorkMailInput,
    RegisterToWorkMailOutput,
    Blob
  >();

  constructor(readonly input: RegisterToWorkMailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterToWorkMailInput,
    RegisterToWorkMailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterToWorkMailInput, RegisterToWorkMailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
