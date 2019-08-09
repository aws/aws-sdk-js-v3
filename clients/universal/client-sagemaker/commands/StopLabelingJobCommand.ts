import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopLabelingJob } from "../model/StopLabelingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopLabelingJobInput } from "../types/StopLabelingJobInput";
import { StopLabelingJobOutput } from "../types/StopLabelingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopLabelingJobInput";
export * from "../types/StopLabelingJobOutput";
export * from "../types/StopLabelingJobExceptionsUnion";

export class StopLabelingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopLabelingJobInput,
      OutputTypesUnion,
      StopLabelingJobOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopLabelingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopLabelingJobInput,
    StopLabelingJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StopLabelingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<StopLabelingJobInput, StopLabelingJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopLabelingJobInput, StopLabelingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
