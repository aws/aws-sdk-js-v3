import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUsageReportSubscriptions } from "../model/operations/DescribeUsageReportSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUsageReportSubscriptionsInput } from "../types/DescribeUsageReportSubscriptionsInput";
import { DescribeUsageReportSubscriptionsOutput } from "../types/DescribeUsageReportSubscriptionsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeUsageReportSubscriptionsInput";
export * from "../types/DescribeUsageReportSubscriptionsOutput";
export * from "../types/DescribeUsageReportSubscriptionsExceptionsUnion";

export class DescribeUsageReportSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUsageReportSubscriptionsInput,
      OutputTypesUnion,
      DescribeUsageReportSubscriptionsOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUsageReportSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUsageReportSubscriptionsInput,
    DescribeUsageReportSubscriptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeUsageReportSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUsageReportSubscriptionsInput,
    DescribeUsageReportSubscriptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeUsageReportSubscriptionsInput,
        DescribeUsageReportSubscriptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
