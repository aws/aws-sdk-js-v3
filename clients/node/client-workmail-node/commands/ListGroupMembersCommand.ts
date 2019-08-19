import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGroupMembers } from "../model/operations/ListGroupMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupMembersInput } from "../types/ListGroupMembersInput";
import { ListGroupMembersOutput } from "../types/ListGroupMembersOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/ListGroupMembersInput";
export * from "../types/ListGroupMembersOutput";
export * from "../types/ListGroupMembersExceptionsUnion";

export class ListGroupMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupMembersInput,
      OutputTypesUnion,
      ListGroupMembersOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGroupMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupMembersInput,
    ListGroupMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGroupMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGroupMembersInput, ListGroupMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupMembersInput, ListGroupMembersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
