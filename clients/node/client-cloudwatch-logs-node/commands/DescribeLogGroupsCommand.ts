import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLogGroups } from "../model/operations/DescribeLogGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLogGroupsInput } from "../types/DescribeLogGroupsInput";
import { DescribeLogGroupsOutput } from "../types/DescribeLogGroupsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeLogGroupsInput";
export * from "../types/DescribeLogGroupsOutput";
export * from "../types/DescribeLogGroupsExceptionsUnion";

export class DescribeLogGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLogGroupsInput,
      OutputTypesUnion,
      DescribeLogGroupsOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLogGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLogGroupsInput,
    DescribeLogGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLogGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLogGroupsInput, DescribeLogGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLogGroupsInput, DescribeLogGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
