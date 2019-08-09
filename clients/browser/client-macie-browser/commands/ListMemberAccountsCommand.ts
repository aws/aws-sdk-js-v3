import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMemberAccounts } from "../model/ListMemberAccounts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMemberAccountsInput } from "../types/ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "../types/ListMemberAccountsOutput";
import { MacieResolvedConfiguration } from "../MacieConfiguration";
export * from "../types/ListMemberAccountsInput";
export * from "../types/ListMemberAccountsOutput";
export * from "../types/ListMemberAccountsExceptionsUnion";

export class ListMemberAccountsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMemberAccountsInput,
      OutputTypesUnion,
      ListMemberAccountsOutput,
      MacieResolvedConfiguration,
      Blob
    > {
  readonly model = ListMemberAccounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMemberAccountsInput,
    ListMemberAccountsOutput,
    Blob
  >();

  constructor(readonly input: ListMemberAccountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MacieResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMemberAccountsInput,
    ListMemberAccountsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMemberAccountsInput, ListMemberAccountsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
