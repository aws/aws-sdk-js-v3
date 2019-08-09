import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetActiveReceiptRuleSet } from "../model/SetActiveReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetActiveReceiptRuleSetInput } from "../types/SetActiveReceiptRuleSetInput";
import { SetActiveReceiptRuleSetOutput } from "../types/SetActiveReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetActiveReceiptRuleSetInput";
export * from "../types/SetActiveReceiptRuleSetOutput";
export * from "../types/SetActiveReceiptRuleSetExceptionsUnion";

export class SetActiveReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetActiveReceiptRuleSetInput,
      OutputTypesUnion,
      SetActiveReceiptRuleSetOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetActiveReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetActiveReceiptRuleSetInput,
    SetActiveReceiptRuleSetOutput,
    Uint8Array
  >();

  constructor(readonly input: SetActiveReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetActiveReceiptRuleSetInput,
    SetActiveReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetActiveReceiptRuleSetInput, SetActiveReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
