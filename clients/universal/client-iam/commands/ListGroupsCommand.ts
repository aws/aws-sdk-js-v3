import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroups } from "../model/ListGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupsInput } from "../types/ListGroupsInput";
import { ListGroupsOutput } from "../types/ListGroupsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
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
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupsInput,
    ListGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
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
