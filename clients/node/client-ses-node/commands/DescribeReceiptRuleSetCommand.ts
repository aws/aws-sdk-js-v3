import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReceiptRuleSet } from "../model/DescribeReceiptRuleSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReceiptRuleSetInput } from "../types/DescribeReceiptRuleSetInput";
import { DescribeReceiptRuleSetOutput } from "../types/DescribeReceiptRuleSetOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DescribeReceiptRuleSetInput";
export * from "../types/DescribeReceiptRuleSetOutput";
export * from "../types/DescribeReceiptRuleSetExceptionsUnion";

export class DescribeReceiptRuleSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReceiptRuleSetInput,
      OutputTypesUnion,
      DescribeReceiptRuleSetOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReceiptRuleSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReceiptRuleSetInput,
    DescribeReceiptRuleSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReceiptRuleSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReceiptRuleSetInput,
    DescribeReceiptRuleSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReceiptRuleSetInput, DescribeReceiptRuleSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
