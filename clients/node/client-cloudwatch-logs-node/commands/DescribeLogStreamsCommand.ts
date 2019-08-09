import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLogStreams } from "../model/DescribeLogStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLogStreamsInput } from "../types/DescribeLogStreamsInput";
import { DescribeLogStreamsOutput } from "../types/DescribeLogStreamsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DescribeLogStreamsInput";
export * from "../types/DescribeLogStreamsOutput";
export * from "../types/DescribeLogStreamsExceptionsUnion";

export class DescribeLogStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLogStreamsInput,
      OutputTypesUnion,
      DescribeLogStreamsOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLogStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLogStreamsInput,
    DescribeLogStreamsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLogStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLogStreamsInput,
    DescribeLogStreamsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLogStreamsInput, DescribeLogStreamsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
