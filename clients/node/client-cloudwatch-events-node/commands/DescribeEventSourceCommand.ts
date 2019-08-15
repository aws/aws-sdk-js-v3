import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEventSource } from "../model/operations/DescribeEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventSourceInput } from "../types/DescribeEventSourceInput";
import { DescribeEventSourceOutput } from "../types/DescribeEventSourceOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DescribeEventSourceInput";
export * from "../types/DescribeEventSourceOutput";
export * from "../types/DescribeEventSourceExceptionsUnion";

export class DescribeEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventSourceInput,
      OutputTypesUnion,
      DescribeEventSourceOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventSourceInput,
    DescribeEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventSourceInput,
    DescribeEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventSourceInput, DescribeEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
