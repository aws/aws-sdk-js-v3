import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroups } from "../model/ListGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupsInput } from "../types/ListGroupsInput";
import { ListGroupsOutput } from "../types/ListGroupsOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/ListGroupsInput";
export * from "../types/ListGroupsOutput";
export * from "../types/ListGroupsExceptionsUnion";

export class ListGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupsInput,
      OutputTypesUnion,
      ListGroupsOutput,
      QuickSightResolvedConfiguration,
      Blob
    > {
  readonly model = ListGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupsInput,
    ListGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupsInput, ListGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupsInput, ListGroupsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
