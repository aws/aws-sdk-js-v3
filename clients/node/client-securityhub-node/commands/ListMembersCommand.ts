import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListMembers } from "../model/ListMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMembersInput } from "../types/ListMembersInput";
import { ListMembersOutput } from "../types/ListMembersOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/ListMembersInput";
export * from "../types/ListMembersOutput";
export * from "../types/ListMembersExceptionsUnion";

export class ListMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMembersInput,
      OutputTypesUnion,
      ListMembersOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMembersInput,
    ListMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<ListMembersInput, ListMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMembersInput, ListMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
