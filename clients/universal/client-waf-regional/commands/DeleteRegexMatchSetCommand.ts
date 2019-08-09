import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRegexMatchSet } from "../model/DeleteRegexMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRegexMatchSetInput } from "../types/DeleteRegexMatchSetInput";
import { DeleteRegexMatchSetOutput } from "../types/DeleteRegexMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteRegexMatchSetInput";
export * from "../types/DeleteRegexMatchSetOutput";
export * from "../types/DeleteRegexMatchSetExceptionsUnion";

export class DeleteRegexMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRegexMatchSetInput,
      OutputTypesUnion,
      DeleteRegexMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRegexMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRegexMatchSetInput,
    DeleteRegexMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRegexMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRegexMatchSetInput,
    DeleteRegexMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRegexMatchSetInput, DeleteRegexMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
