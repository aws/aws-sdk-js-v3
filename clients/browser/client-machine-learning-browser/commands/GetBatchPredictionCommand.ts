import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBatchPrediction } from "../model/operations/GetBatchPrediction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBatchPredictionInput } from "../types/GetBatchPredictionInput";
import { GetBatchPredictionOutput } from "../types/GetBatchPredictionOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/GetBatchPredictionInput";
export * from "../types/GetBatchPredictionOutput";
export * from "../types/GetBatchPredictionExceptionsUnion";

export class GetBatchPredictionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBatchPredictionInput,
      OutputTypesUnion,
      GetBatchPredictionOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = GetBatchPrediction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBatchPredictionInput,
    GetBatchPredictionOutput,
    Blob
  >();

  constructor(readonly input: GetBatchPredictionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBatchPredictionInput,
    GetBatchPredictionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBatchPredictionInput, GetBatchPredictionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
