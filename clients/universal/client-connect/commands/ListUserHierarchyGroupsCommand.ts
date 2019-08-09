import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUserHierarchyGroups } from "../model/ListUserHierarchyGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserHierarchyGroupsInput } from "../types/ListUserHierarchyGroupsInput";
import { ListUserHierarchyGroupsOutput } from "../types/ListUserHierarchyGroupsOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/ListUserHierarchyGroupsInput";
export * from "../types/ListUserHierarchyGroupsOutput";
export * from "../types/ListUserHierarchyGroupsExceptionsUnion";

export class ListUserHierarchyGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserHierarchyGroupsInput,
      OutputTypesUnion,
      ListUserHierarchyGroupsOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListUserHierarchyGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserHierarchyGroupsInput,
    ListUserHierarchyGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListUserHierarchyGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListUserHierarchyGroupsInput,
    ListUserHierarchyGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserHierarchyGroupsInput, ListUserHierarchyGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
