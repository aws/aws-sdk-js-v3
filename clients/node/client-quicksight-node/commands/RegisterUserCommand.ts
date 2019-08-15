import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterUser } from "../model/operations/RegisterUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterUserInput } from "../types/RegisterUserInput";
import { RegisterUserOutput } from "../types/RegisterUserOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/RegisterUserInput";
export * from "../types/RegisterUserOutput";
export * from "../types/RegisterUserExceptionsUnion";

export class RegisterUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterUserInput,
      OutputTypesUnion,
      RegisterUserOutput,
      QuickSightResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterUserInput,
    RegisterUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterUserInput, RegisterUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterUserInput, RegisterUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
