import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRegexMatchSet } from "../model/UpdateRegexMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRegexMatchSetInput } from "../types/UpdateRegexMatchSetInput";
import { UpdateRegexMatchSetOutput } from "../types/UpdateRegexMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
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
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateRegexMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRegexMatchSetInput,
    UpdateRegexMatchSetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateRegexMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
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
