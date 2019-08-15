import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRegexMatchSet } from "../model/operations/UpdateRegexMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRegexMatchSetInput } from "../types/UpdateRegexMatchSetInput";
import { UpdateRegexMatchSetOutput } from "../types/UpdateRegexMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateRegexMatchSetInput";
export * from "../types/UpdateRegexMatchSetOutput";
export * from "../types/UpdateRegexMatchSetExceptionsUnion";

export class UpdateRegexMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRegexMatchSetInput,
      OutputTypesUnion,
      UpdateRegexMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRegexMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRegexMatchSetInput,
    UpdateRegexMatchSetOutput,
    Blob
  >();

  constructor(readonly input: UpdateRegexMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRegexMatchSetInput,
    UpdateRegexMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRegexMatchSetInput, UpdateRegexMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
