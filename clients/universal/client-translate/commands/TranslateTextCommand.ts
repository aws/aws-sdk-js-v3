import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TranslateText } from "../model/TranslateText";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TranslateTextInput } from "../types/TranslateTextInput";
import { TranslateTextOutput } from "../types/TranslateTextOutput";
import { TranslateResolvedConfiguration } from "../TranslateConfiguration";
export * from "../types/TranslateTextInput";
export * from "../types/TranslateTextOutput";
export * from "../types/TranslateTextExceptionsUnion";

export class TranslateTextCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TranslateTextInput,
      OutputTypesUnion,
      TranslateTextOutput,
      TranslateResolvedConfiguration,
      Uint8Array
    > {
  readonly model = TranslateText;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TranslateTextInput,
    TranslateTextOutput,
    Uint8Array
  >();

  constructor(readonly input: TranslateTextInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: TranslateResolvedConfiguration
  ): __aws_sdk_types.Handler<TranslateTextInput, TranslateTextOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TranslateTextInput, TranslateTextOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
