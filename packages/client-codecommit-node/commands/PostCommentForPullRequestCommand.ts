import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PostCommentForPullRequest } from "../model/PostCommentForPullRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PostCommentForPullRequestInput } from "../types/PostCommentForPullRequestInput";
import { PostCommentForPullRequestOutput } from "../types/PostCommentForPullRequestOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/PostCommentForPullRequestInput";
export * from "../types/PostCommentForPullRequestOutput";
export * from "../types/PostCommentForPullRequestExceptionsUnion";

export class PostCommentForPullRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PostCommentForPullRequestInput,
      OutputTypesUnion,
      PostCommentForPullRequestOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PostCommentForPullRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PostCommentForPullRequestInput,
    PostCommentForPullRequestOutput,
    _stream.Readable
  >();

  constructor(readonly input: PostCommentForPullRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PostCommentForPullRequestInput,
    PostCommentForPullRequestOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PostCommentForPullRequestInput, PostCommentForPullRequestOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
