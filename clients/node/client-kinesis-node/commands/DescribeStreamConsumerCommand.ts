import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeStreamConsumer } from "../model/operations/DescribeStreamConsumer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStreamConsumerInput } from "../types/DescribeStreamConsumerInput";
import { DescribeStreamConsumerOutput } from "../types/DescribeStreamConsumerOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/DescribeStreamConsumerInput";
export * from "../types/DescribeStreamConsumerOutput";
export * from "../types/DescribeStreamConsumerExceptionsUnion";

export class DescribeStreamConsumerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStreamConsumerInput,
      OutputTypesUnion,
      DescribeStreamConsumerOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeStreamConsumer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStreamConsumerInput,
    DescribeStreamConsumerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeStreamConsumerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStreamConsumerInput,
    DescribeStreamConsumerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStreamConsumerInput, DescribeStreamConsumerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
