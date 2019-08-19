import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTeamMembers } from "../model/operations/ListTeamMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTeamMembersInput } from "../types/ListTeamMembersInput";
import { ListTeamMembersOutput } from "../types/ListTeamMembersOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/ListTeamMembersInput";
export * from "../types/ListTeamMembersOutput";
export * from "../types/ListTeamMembersExceptionsUnion";

export class ListTeamMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTeamMembersInput,
      OutputTypesUnion,
      ListTeamMembersOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTeamMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTeamMembersInput,
    ListTeamMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTeamMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTeamMembersInput, ListTeamMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTeamMembersInput, ListTeamMembersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
