import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStackSummary } from "../model/operations/DescribeStackSummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackSummaryInput } from "../types/DescribeStackSummaryInput";
import { DescribeStackSummaryOutput } from "../types/DescribeStackSummaryOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeStackSummaryInput";
export * from "../types/DescribeStackSummaryOutput";
export * from "../types/DescribeStackSummaryExceptionsUnion";

export class DescribeStackSummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackSummaryInput,
      OutputTypesUnion,
      DescribeStackSummaryOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStackSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackSummaryInput,
    DescribeStackSummaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStackSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackSummaryInput,
    DescribeStackSummaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStackSummaryInput, DescribeStackSummaryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
