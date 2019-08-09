import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PostContent } from "../model/PostContent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PostContentInput } from "../types/PostContentInput";
import { PostContentOutput } from "../types/PostContentOutput";
import { LexRuntimeServiceResolvedConfiguration } from "../LexRuntimeServiceConfiguration";
export * from "../types/PostContentInput";
export * from "../types/PostContentOutput";
export * from "../types/PostContentExceptionsUnion";

export class PostContentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PostContentInput,
      OutputTypesUnion,
      PostContentOutput,
      LexRuntimeServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PostContent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PostContentInput,
    PostContentOutput,
    Blob
  >();

  constructor(readonly input: PostContentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexRuntimeServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PostContentInput, PostContentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "X-Amz-Content-Sha256": "UNSIGNED_PAYLOAD"
      }),
      {
        step: "build",
        priority: 100,
        tags: { UNSIGNED_PAYLOAD: true }
      }
    );
    return stack.resolve(
      handler<PostContentInput, PostContentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
