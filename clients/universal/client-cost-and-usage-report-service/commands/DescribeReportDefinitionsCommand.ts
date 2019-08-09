import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReportDefinitions } from "../model/DescribeReportDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReportDefinitionsInput } from "../types/DescribeReportDefinitionsInput";
import { DescribeReportDefinitionsOutput } from "../types/DescribeReportDefinitionsOutput";
import { CostandUsageReportServiceResolvedConfiguration } from "../CostandUsageReportServiceConfiguration";
export * from "../types/DescribeReportDefinitionsInput";
export * from "../types/DescribeReportDefinitionsOutput";
export * from "../types/DescribeReportDefinitionsExceptionsUnion";

export class DescribeReportDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReportDefinitionsInput,
      OutputTypesUnion,
      DescribeReportDefinitionsOutput,
      CostandUsageReportServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReportDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReportDefinitionsInput,
    DescribeReportDefinitionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReportDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CostandUsageReportServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReportDefinitionsInput,
    DescribeReportDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReportDefinitionsInput, DescribeReportDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
