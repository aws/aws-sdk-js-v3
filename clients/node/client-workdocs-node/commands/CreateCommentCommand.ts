import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateComment } from "../model/CreateComment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCommentInput } from "../types/CreateCommentInput";
import { CreateCommentOutput } from "../types/CreateCommentOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/CreateCommentInput";
export * from "../types/CreateCommentOutput";
export * from "../types/CreateCommentExceptionsUnion";

export class CreateCommentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCommentInput,
      OutputTypesUnion,
      CreateCommentOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateComment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCommentInput,
    CreateCommentOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCommentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCommentInput, CreateCommentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCommentInput, CreateCommentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
