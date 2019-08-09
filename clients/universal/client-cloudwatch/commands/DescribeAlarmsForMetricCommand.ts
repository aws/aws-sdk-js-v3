import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAlarmsForMetric } from "../model/DescribeAlarmsForMetric";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAlarmsForMetricInput } from "../types/DescribeAlarmsForMetricInput";
import { DescribeAlarmsForMetricOutput } from "../types/DescribeAlarmsForMetricOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DescribeAlarmsForMetricInput";
export * from "../types/DescribeAlarmsForMetricOutput";
export * from "../types/DescribeAlarmsForMetricExceptionsUnion";

export class DescribeAlarmsForMetricCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAlarmsForMetricInput,
      OutputTypesUnion,
      DescribeAlarmsForMetricOutput,
      CloudWatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAlarmsForMetric;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAlarmsForMetricInput,
    DescribeAlarmsForMetricOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAlarmsForMetricInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAlarmsForMetricInput,
    DescribeAlarmsForMetricOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAlarmsForMetricInput, DescribeAlarmsForMetricOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
