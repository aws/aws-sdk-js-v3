import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAccounts } from "../model/ListAccounts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAccountsInput } from "../types/ListAccountsInput";
import { ListAccountsOutput } from "../types/ListAccountsOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListAccountsInput";
export * from "../types/ListAccountsOutput";
export * from "../types/ListAccountsExceptionsUnion";

export class ListAccountsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAccountsInput,
      OutputTypesUnion,
      ListAccountsOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListAccounts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAccountsInput,
    ListAccountsOutput,
    Blob
  >();

  constructor(readonly input: ListAccountsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAccountsInput, ListAccountsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAccountsInput, ListAccountsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
