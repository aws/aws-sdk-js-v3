import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeQueries } from "../model/DescribeQueries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeQueriesInput } from "../types/DescribeQueriesInput";
import { DescribeQueriesOutput } from "../types/DescribeQueriesOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeQueriesInput";
export * from "../types/DescribeQueriesOutput";
export * from "../types/DescribeQueriesExceptionsUnion";

export class DescribeQueriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeQueriesInput,
      OutputTypesUnion,
      DescribeQueriesOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeQueries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeQueriesInput,
    DescribeQueriesOutput,
    Blob
  >();

  constructor(readonly input: DescribeQueriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeQueriesInput, DescribeQueriesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeQueriesInput, DescribeQueriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
