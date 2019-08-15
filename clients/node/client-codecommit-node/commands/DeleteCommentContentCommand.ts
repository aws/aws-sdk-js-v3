import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCommentContent } from "../model/operations/DeleteCommentContent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCommentContentInput } from "../types/DeleteCommentContentInput";
import { DeleteCommentContentOutput } from "../types/DeleteCommentContentOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DeleteCommentContentInput";
export * from "../types/DeleteCommentContentOutput";
export * from "../types/DeleteCommentContentExceptionsUnion";

export class DeleteCommentContentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCommentContentInput,
      OutputTypesUnion,
      DeleteCommentContentOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCommentContent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCommentContentInput,
    DeleteCommentContentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCommentContentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCommentContentInput,
    DeleteCommentContentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCommentContentInput, DeleteCommentContentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
