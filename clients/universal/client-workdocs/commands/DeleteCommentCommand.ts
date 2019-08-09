import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteComment } from "../model/DeleteComment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCommentInput } from "../types/DeleteCommentInput";
import { DeleteCommentOutput } from "../types/DeleteCommentOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteCommentInput";
export * from "../types/DeleteCommentOutput";
export * from "../types/DeleteCommentExceptionsUnion";

export class DeleteCommentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCommentInput,
      OutputTypesUnion,
      DeleteCommentOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteComment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCommentInput,
    DeleteCommentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteCommentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteCommentInput, DeleteCommentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCommentInput, DeleteCommentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
