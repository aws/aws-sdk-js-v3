import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopTrainingJob } from "../model/StopTrainingJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTrainingJobInput } from "../types/StopTrainingJobInput";
import { StopTrainingJobOutput } from "../types/StopTrainingJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopTrainingJobInput";
export * from "../types/StopTrainingJobOutput";
export * from "../types/StopTrainingJobExceptionsUnion";

export class StopTrainingJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTrainingJobInput,
      OutputTypesUnion,
      StopTrainingJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopTrainingJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTrainingJobInput,
    StopTrainingJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopTrainingJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<StopTrainingJobInput, StopTrainingJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopTrainingJobInput, StopTrainingJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
