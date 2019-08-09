import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStream } from "../model/DescribeStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStreamInput } from "../types/DescribeStreamInput";
import { DescribeStreamOutput } from "../types/DescribeStreamOutput";
import { DynamoDBStreamsResolvedConfiguration } from "../DynamoDBStreamsConfiguration";
export * from "../types/DescribeStreamInput";
export * from "../types/DescribeStreamOutput";
export * from "../types/DescribeStreamExceptionsUnion";

export class DescribeStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStreamInput,
      OutputTypesUnion,
      DescribeStreamOutput,
      DynamoDBStreamsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStreamInput,
    DescribeStreamOutput,
    Blob
  >();

  constructor(readonly input: DescribeStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBStreamsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeStreamInput, DescribeStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStreamInput, DescribeStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
