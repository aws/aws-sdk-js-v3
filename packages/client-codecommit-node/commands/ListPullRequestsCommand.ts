import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPullRequests } from "../model/ListPullRequests";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPullRequestsInput } from "../types/ListPullRequestsInput";
import { ListPullRequestsOutput } from "../types/ListPullRequestsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/ListPullRequestsInput";
export * from "../types/ListPullRequestsOutput";
export * from "../types/ListPullRequestsExceptionsUnion";

export class ListPullRequestsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPullRequestsInput,
      OutputTypesUnion,
      ListPullRequestsOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPullRequests;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPullRequestsInput,
    ListPullRequestsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPullRequestsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPullRequestsInput, ListPullRequestsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPullRequestsInput, ListPullRequestsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
