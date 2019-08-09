import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateBatchPrediction } from "../model/UpdateBatchPrediction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBatchPredictionInput } from "../types/UpdateBatchPredictionInput";
import { UpdateBatchPredictionOutput } from "../types/UpdateBatchPredictionOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/UpdateBatchPredictionInput";
export * from "../types/UpdateBatchPredictionOutput";
export * from "../types/UpdateBatchPredictionExceptionsUnion";

export class UpdateBatchPredictionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBatchPredictionInput,
      OutputTypesUnion,
      UpdateBatchPredictionOutput,
      MachineLearningResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateBatchPrediction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBatchPredictionInput,
    UpdateBatchPredictionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateBatchPredictionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBatchPredictionInput,
    UpdateBatchPredictionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBatchPredictionInput, UpdateBatchPredictionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
