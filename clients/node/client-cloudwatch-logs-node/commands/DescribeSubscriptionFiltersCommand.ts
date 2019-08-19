import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSubscriptionFilters } from "../model/operations/DescribeSubscriptionFilters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubscriptionFiltersInput } from "../types/DescribeSubscriptionFiltersInput";
import { DescribeSubscriptionFiltersOutput } from "../types/DescribeSubscriptionFiltersOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeSubscriptionFiltersInput";
export * from "../types/DescribeSubscriptionFiltersOutput";
export * from "../types/DescribeSubscriptionFiltersExceptionsUnion";

export class DescribeSubscriptionFiltersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubscriptionFiltersInput,
      OutputTypesUnion,
      DescribeSubscriptionFiltersOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSubscriptionFilters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubscriptionFiltersInput,
    DescribeSubscriptionFiltersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSubscriptionFiltersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSubscriptionFiltersInput,
    DescribeSubscriptionFiltersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSubscriptionFiltersInput,
        DescribeSubscriptionFiltersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
