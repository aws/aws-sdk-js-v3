import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTimeSeriesServiceStatistics } from "../model/operations/GetTimeSeriesServiceStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTimeSeriesServiceStatisticsInput } from "../types/GetTimeSeriesServiceStatisticsInput";
import { GetTimeSeriesServiceStatisticsOutput } from "../types/GetTimeSeriesServiceStatisticsOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/GetTimeSeriesServiceStatisticsInput";
export * from "../types/GetTimeSeriesServiceStatisticsOutput";
export * from "../types/GetTimeSeriesServiceStatisticsExceptionsUnion";

export class GetTimeSeriesServiceStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTimeSeriesServiceStatisticsInput,
      OutputTypesUnion,
      GetTimeSeriesServiceStatisticsOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = GetTimeSeriesServiceStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTimeSeriesServiceStatisticsInput,
    GetTimeSeriesServiceStatisticsOutput,
    Blob
  >();

  constructor(readonly input: GetTimeSeriesServiceStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTimeSeriesServiceStatisticsInput,
    GetTimeSeriesServiceStatisticsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetTimeSeriesServiceStatisticsInput,
        GetTimeSeriesServiceStatisticsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
