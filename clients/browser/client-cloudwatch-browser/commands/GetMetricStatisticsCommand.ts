import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMetricStatistics } from "../model/operations/GetMetricStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMetricStatisticsInput } from "../types/GetMetricStatisticsInput";
import { GetMetricStatisticsOutput } from "../types/GetMetricStatisticsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/GetMetricStatisticsInput";
export * from "../types/GetMetricStatisticsOutput";
export * from "../types/GetMetricStatisticsExceptionsUnion";

export class GetMetricStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMetricStatisticsInput,
      OutputTypesUnion,
      GetMetricStatisticsOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = GetMetricStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMetricStatisticsInput,
    GetMetricStatisticsOutput,
    Blob
  >();

  constructor(readonly input: GetMetricStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMetricStatisticsInput,
    GetMetricStatisticsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMetricStatisticsInput, GetMetricStatisticsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
