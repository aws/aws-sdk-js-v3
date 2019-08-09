import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetComment } from "../model/GetComment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCommentInput } from "../types/GetCommentInput";
import { GetCommentOutput } from "../types/GetCommentOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetCommentInput";
export * from "../types/GetCommentOutput";
export * from "../types/GetCommentExceptionsUnion";

export class GetCommentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCommentInput,
      OutputTypesUnion,
      GetCommentOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetComment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCommentInput,
    GetCommentOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCommentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCommentInput, GetCommentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCommentInput, GetCommentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
