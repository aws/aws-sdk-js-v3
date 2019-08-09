import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReceiptRule } from "../model/DescribeReceiptRule";
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
      _stream.Readable
    > {
  readonly model = DescribeReceiptRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReceiptRuleInput,
    DescribeReceiptRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReceiptRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
