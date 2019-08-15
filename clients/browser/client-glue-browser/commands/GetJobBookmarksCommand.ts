import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobBookmarks } from "../model/operations/GetJobBookmarks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobBookmarksInput } from "../types/GetJobBookmarksInput";
import { GetJobBookmarksOutput } from "../types/GetJobBookmarksOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetJobBookmarksInput";
export * from "../types/GetJobBookmarksOutput";
export * from "../types/GetJobBookmarksExceptionsUnion";

export class GetJobBookmarksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobBookmarksInput,
      OutputTypesUnion,
      GetJobBookmarksOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobBookmarks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobBookmarksInput,
    GetJobBookmarksOutput,
    Blob
  >();

  constructor(readonly input: GetJobBookmarksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobBookmarksInput, GetJobBookmarksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobBookmarksInput, GetJobBookmarksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
