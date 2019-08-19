import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStreamProcessor } from "../model/operations/DescribeStreamProcessor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStreamProcessorInput } from "../types/DescribeStreamProcessorInput";
import { DescribeStreamProcessorOutput } from "../types/DescribeStreamProcessorOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/DescribeStreamProcessorInput";
export * from "../types/DescribeStreamProcessorOutput";
export * from "../types/DescribeStreamProcessorExceptionsUnion";

export class DescribeStreamProcessorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStreamProcessorInput,
      OutputTypesUnion,
      DescribeStreamProcessorOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStreamProcessor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStreamProcessorInput,
    DescribeStreamProcessorOutput,
    Blob
  >();

  constructor(readonly input: DescribeStreamProcessorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStreamProcessorInput,
    DescribeStreamProcessorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeStreamProcessorInput, DescribeStreamProcessorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
