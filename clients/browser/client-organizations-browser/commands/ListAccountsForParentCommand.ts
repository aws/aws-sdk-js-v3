import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAccountsForParent } from "../model/operations/ListAccountsForParent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAccountsForParentInput } from "../types/ListAccountsForParentInput";
import { ListAccountsForParentOutput } from "../types/ListAccountsForParentOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListAccountsForParentInput";
export * from "../types/ListAccountsForParentOutput";
export * from "../types/ListAccountsForParentExceptionsUnion";

export class ListAccountsForParentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAccountsForParentInput,
      OutputTypesUnion,
      ListAccountsForParentOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListAccountsForParent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAccountsForParentInput,
    ListAccountsForParentOutput,
    Blob
  >();

  constructor(readonly input: ListAccountsForParentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAccountsForParentInput,
    ListAccountsForParentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAccountsForParentInput, ListAccountsForParentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
