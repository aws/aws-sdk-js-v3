import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAlarmHistory } from "../model/operations/DescribeAlarmHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAlarmHistoryInput } from "../types/DescribeAlarmHistoryInput";
import { DescribeAlarmHistoryOutput } from "../types/DescribeAlarmHistoryOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DescribeAlarmHistoryInput";
export * from "../types/DescribeAlarmHistoryOutput";
export * from "../types/DescribeAlarmHistoryExceptionsUnion";

export class DescribeAlarmHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAlarmHistoryInput,
      OutputTypesUnion,
      DescribeAlarmHistoryOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAlarmHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAlarmHistoryInput,
    DescribeAlarmHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAlarmHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAlarmHistoryInput,
    DescribeAlarmHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAlarmHistoryInput, DescribeAlarmHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
