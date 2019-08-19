import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PostText } from "../model/operations/PostText";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PostTextInput } from "../types/PostTextInput";
import { PostTextOutput } from "../types/PostTextOutput";
import { LexRuntimeServiceResolvedConfiguration } from "../LexRuntimeServiceConfiguration";
export * from "../types/PostTextInput";
export * from "../types/PostTextOutput";
export * from "../types/PostTextExceptionsUnion";

export class PostTextCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PostTextInput,
      OutputTypesUnion,
      PostTextOutput,
      LexRuntimeServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PostText;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PostTextInput,
    PostTextOutput,
    Blob
  >();

  constructor(readonly input: PostTextInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexRuntimeServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PostTextInput, PostTextOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PostTextInput, PostTextOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
