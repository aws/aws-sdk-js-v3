import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReorderReceiptRuleSet } from "../model/ReorderReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReorderReceiptRuleSetInput } from "../types/ReorderReceiptRuleSetInput";
import { ReorderReceiptRuleSetOutput } from "../types/ReorderReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ReorderReceiptRuleSetInput";
export * from "../types/ReorderReceiptRuleSetOutput";
export * from "../types/ReorderReceiptRuleSetExceptionsUnion";

export class ReorderReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReorderReceiptRuleSetInput,
      OutputTypesUnion,
      ReorderReceiptRuleSetOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = ReorderReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReorderReceiptRuleSetInput,
    ReorderReceiptRuleSetOutput,
    Blob
  >();

  constructor(readonly input: ReorderReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReorderReceiptRuleSetInput,
    ReorderReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReorderReceiptRuleSetInput, ReorderReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
