import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAccount } from "../model/CreateAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAccountInput } from "../types/CreateAccountInput";
import { CreateAccountOutput } from "../types/CreateAccountOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/CreateAccountInput";
export * from "../types/CreateAccountOutput";
export * from "../types/CreateAccountExceptionsUnion";

export class CreateAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAccountInput,
      OutputTypesUnion,
      CreateAccountOutput,
      ChimeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAccountInput,
    CreateAccountOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAccountInput, CreateAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAccountInput, CreateAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
