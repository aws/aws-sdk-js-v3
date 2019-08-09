import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelResize } from "../model/CancelResize";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelResizeInput } from "../types/CancelResizeInput";
import { CancelResizeOutput } from "../types/CancelResizeOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CancelResizeInput";
export * from "../types/CancelResizeOutput";
export * from "../types/CancelResizeExceptionsUnion";

export class CancelResizeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelResizeInput,
      OutputTypesUnion,
      CancelResizeOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = CancelResize;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelResizeInput,
    CancelResizeOutput,
    Blob
  >();

  constructor(readonly input: CancelResizeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelResizeInput, CancelResizeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelResizeInput, CancelResizeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
