import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLabelingJob } from "../model/DescribeLabelingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLabelingJobInput } from "../types/DescribeLabelingJobInput";
import { DescribeLabelingJobOutput } from "../types/DescribeLabelingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DescribeLabelingJobInput";
export * from "../types/DescribeLabelingJobOutput";
export * from "../types/DescribeLabelingJobExceptionsUnion";

export class DescribeLabelingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLabelingJobInput,
      OutputTypesUnion,
      DescribeLabelingJobOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeLabelingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLabelingJobInput,
    DescribeLabelingJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeLabelingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLabelingJobInput,
    DescribeLabelingJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLabelingJobInput, DescribeLabelingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
