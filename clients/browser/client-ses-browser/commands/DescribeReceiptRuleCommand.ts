import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReceiptRule } from "../model/operations/DescribeReceiptRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReceiptRuleInput } from "../types/DescribeReceiptRuleInput";
import { DescribeReceiptRuleOutput } from "../types/DescribeReceiptRuleOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DescribeReceiptRuleInput";
export * from "../types/DescribeReceiptRuleOutput";
export * from "../types/DescribeReceiptRuleExceptionsUnion";

export class DescribeReceiptRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReceiptRuleInput,
      OutputTypesUnion,
      DescribeReceiptRuleOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeReceiptRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReceiptRuleInput,
    DescribeReceiptRuleOutput,
    Blob
  >();

  constructor(readonly input: DescribeReceiptRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReceiptRuleInput,
    DescribeReceiptRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReceiptRuleInput, DescribeReceiptRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
