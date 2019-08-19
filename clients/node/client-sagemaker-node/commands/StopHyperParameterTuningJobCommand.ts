import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopHyperParameterTuningJob } from "../model/operations/StopHyperParameterTuningJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopHyperParameterTuningJobInput } from "../types/StopHyperParameterTuningJobInput";
import { StopHyperParameterTuningJobOutput } from "../types/StopHyperParameterTuningJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopHyperParameterTuningJobInput";
export * from "../types/StopHyperParameterTuningJobOutput";
export * from "../types/StopHyperParameterTuningJobExceptionsUnion";

export class StopHyperParameterTuningJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopHyperParameterTuningJobInput,
      OutputTypesUnion,
      StopHyperParameterTuningJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopHyperParameterTuningJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopHyperParameterTuningJobInput,
    StopHyperParameterTuningJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopHyperParameterTuningJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopHyperParameterTuningJobInput,
    StopHyperParameterTuningJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopHyperParameterTuningJobInput,
        StopHyperParameterTuningJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
