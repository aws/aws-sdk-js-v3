import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRegexMatchSet } from "../model/GetRegexMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRegexMatchSetInput } from "../types/GetRegexMatchSetInput";
import { GetRegexMatchSetOutput } from "../types/GetRegexMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetRegexMatchSetInput";
export * from "../types/GetRegexMatchSetOutput";
export * from "../types/GetRegexMatchSetExceptionsUnion";

export class GetRegexMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRegexMatchSetInput,
      OutputTypesUnion,
      GetRegexMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = GetRegexMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRegexMatchSetInput,
    GetRegexMatchSetOutput,
    Blob
  >();

  constructor(readonly input: GetRegexMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRegexMatchSetInput, GetRegexMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRegexMatchSetInput, GetRegexMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
