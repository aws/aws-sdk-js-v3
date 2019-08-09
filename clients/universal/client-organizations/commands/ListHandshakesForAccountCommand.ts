import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListHandshakesForAccount } from "../model/ListHandshakesForAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHandshakesForAccountInput } from "../types/ListHandshakesForAccountInput";
import { ListHandshakesForAccountOutput } from "../types/ListHandshakesForAccountOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListHandshakesForAccountInput";
export * from "../types/ListHandshakesForAccountOutput";
export * from "../types/ListHandshakesForAccountExceptionsUnion";

export class ListHandshakesForAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHandshakesForAccountInput,
      OutputTypesUnion,
      ListHandshakesForAccountOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListHandshakesForAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHandshakesForAccountInput,
    ListHandshakesForAccountOutput,
    Uint8Array
  >();

  constructor(readonly input: ListHandshakesForAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListHandshakesForAccountInput,
    ListHandshakesForAccountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListHandshakesForAccountInput, ListHandshakesForAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
