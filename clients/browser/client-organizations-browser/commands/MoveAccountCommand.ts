import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { MoveAccount } from "../model/MoveAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MoveAccountInput } from "../types/MoveAccountInput";
import { MoveAccountOutput } from "../types/MoveAccountOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/MoveAccountInput";
export * from "../types/MoveAccountOutput";
export * from "../types/MoveAccountExceptionsUnion";

export class MoveAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MoveAccountInput,
      OutputTypesUnion,
      MoveAccountOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = MoveAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MoveAccountInput,
    MoveAccountOutput,
    Blob
  >();

  constructor(readonly input: MoveAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<MoveAccountInput, MoveAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MoveAccountInput, MoveAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
