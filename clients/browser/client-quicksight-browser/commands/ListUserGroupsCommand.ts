import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUserGroups } from "../model/operations/ListUserGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserGroupsInput } from "../types/ListUserGroupsInput";
import { ListUserGroupsOutput } from "../types/ListUserGroupsOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/ListUserGroupsInput";
export * from "../types/ListUserGroupsOutput";
export * from "../types/ListUserGroupsExceptionsUnion";

export class ListUserGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserGroupsInput,
      OutputTypesUnion,
      ListUserGroupsOutput,
      QuickSightResolvedConfiguration,
      Blob
    > {
  readonly model = ListUserGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserGroupsInput,
    ListUserGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListUserGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUserGroupsInput, ListUserGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserGroupsInput, ListUserGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
