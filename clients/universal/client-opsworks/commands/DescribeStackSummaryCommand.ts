import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackSummary } from "../model/DescribeStackSummary";
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
      Uint8Array
    > {
  readonly model = DescribeStackSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackSummaryInput,
    DescribeStackSummaryOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeStackSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
