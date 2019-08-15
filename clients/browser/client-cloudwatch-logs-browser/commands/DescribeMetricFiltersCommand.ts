import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMetricFilters } from "../model/operations/DescribeMetricFilters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMetricFiltersInput } from "../types/DescribeMetricFiltersInput";
import { DescribeMetricFiltersOutput } from "../types/DescribeMetricFiltersOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeMetricFiltersInput";
export * from "../types/DescribeMetricFiltersOutput";
export * from "../types/DescribeMetricFiltersExceptionsUnion";

export class DescribeMetricFiltersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMetricFiltersInput,
      OutputTypesUnion,
      DescribeMetricFiltersOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMetricFilters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMetricFiltersInput,
    DescribeMetricFiltersOutput,
    Blob
  >();

  constructor(readonly input: DescribeMetricFiltersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMetricFiltersInput,
    DescribeMetricFiltersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMetricFiltersInput, DescribeMetricFiltersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
