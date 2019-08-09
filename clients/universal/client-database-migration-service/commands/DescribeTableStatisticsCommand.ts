import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTableStatistics } from "../model/DescribeTableStatistics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTableStatisticsInput } from "../types/DescribeTableStatisticsInput";
import { DescribeTableStatisticsOutput } from "../types/DescribeTableStatisticsOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeTableStatisticsInput";
export * from "../types/DescribeTableStatisticsOutput";
export * from "../types/DescribeTableStatisticsExceptionsUnion";

export class DescribeTableStatisticsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTableStatisticsInput,
      OutputTypesUnion,
      DescribeTableStatisticsOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTableStatistics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTableStatisticsInput,
    DescribeTableStatisticsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTableStatisticsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTableStatisticsInput,
    DescribeTableStatisticsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTableStatisticsInput, DescribeTableStatisticsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
