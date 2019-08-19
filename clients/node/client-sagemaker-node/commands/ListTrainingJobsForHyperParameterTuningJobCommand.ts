import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTrainingJobsForHyperParameterTuningJob } from "../model/operations/ListTrainingJobsForHyperParameterTuningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrainingJobsForHyperParameterTuningJobInput } from "../types/ListTrainingJobsForHyperParameterTuningJobInput";
import { ListTrainingJobsForHyperParameterTuningJobOutput } from "../types/ListTrainingJobsForHyperParameterTuningJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListTrainingJobsForHyperParameterTuningJobInput";
export * from "../types/ListTrainingJobsForHyperParameterTuningJobOutput";
export * from "../types/ListTrainingJobsForHyperParameterTuningJobExceptionsUnion";

export class ListTrainingJobsForHyperParameterTuningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrainingJobsForHyperParameterTuningJobInput,
      OutputTypesUnion,
      ListTrainingJobsForHyperParameterTuningJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTrainingJobsForHyperParameterTuningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrainingJobsForHyperParameterTuningJobInput,
    ListTrainingJobsForHyperParameterTuningJobOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: ListTrainingJobsForHyperParameterTuningJobInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTrainingJobsForHyperParameterTuningJobInput,
    ListTrainingJobsForHyperParameterTuningJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTrainingJobsForHyperParameterTuningJobInput,
        ListTrainingJobsForHyperParameterTuningJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
