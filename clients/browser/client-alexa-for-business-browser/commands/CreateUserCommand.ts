import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUser } from "../model/operations/CreateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserInput } from "../types/CreateUserInput";
import { CreateUserOutput } from "../types/CreateUserOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateUserInput";
export * from "../types/CreateUserOutput";
export * from "../types/CreateUserExceptionsUnion";

export class CreateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserInput,
      OutputTypesUnion,
      CreateUserOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserInput,
    CreateUserOutput,
    Blob
  >();

  constructor(readonly input: CreateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateUserInput, CreateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateUserInput, CreateUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
