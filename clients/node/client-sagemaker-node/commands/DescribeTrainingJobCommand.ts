import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTrainingJob } from "../model/operations/DescribeTrainingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrainingJobInput } from "../types/DescribeTrainingJobInput";
import { DescribeTrainingJobOutput } from "../types/DescribeTrainingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeTrainingJobInput";
export * from "../types/DescribeTrainingJobOutput";
export * from "../types/DescribeTrainingJobExceptionsUnion";

export class DescribeTrainingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrainingJobInput,
      OutputTypesUnion,
      DescribeTrainingJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTrainingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrainingJobInput,
    DescribeTrainingJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTrainingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrainingJobInput,
    DescribeTrainingJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTrainingJobInput, DescribeTrainingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
