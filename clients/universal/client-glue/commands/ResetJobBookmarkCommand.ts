import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetJobBookmark } from "../model/ResetJobBookmark";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetJobBookmarkInput } from "../types/ResetJobBookmarkInput";
import { ResetJobBookmarkOutput } from "../types/ResetJobBookmarkOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ResetJobBookmarkInput";
export * from "../types/ResetJobBookmarkOutput";
export * from "../types/ResetJobBookmarkExceptionsUnion";

export class ResetJobBookmarkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetJobBookmarkInput,
      OutputTypesUnion,
      ResetJobBookmarkOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ResetJobBookmark;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetJobBookmarkInput,
    ResetJobBookmarkOutput,
    Uint8Array
  >();

  constructor(readonly input: ResetJobBookmarkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<ResetJobBookmarkInput, ResetJobBookmarkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetJobBookmarkInput, ResetJobBookmarkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
