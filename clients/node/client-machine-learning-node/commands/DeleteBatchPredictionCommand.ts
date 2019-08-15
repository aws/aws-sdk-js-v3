import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBatchPrediction } from "../model/operations/DeleteBatchPrediction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBatchPredictionInput } from "../types/DeleteBatchPredictionInput";
import { DeleteBatchPredictionOutput } from "../types/DeleteBatchPredictionOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DeleteBatchPredictionInput";
export * from "../types/DeleteBatchPredictionOutput";
export * from "../types/DeleteBatchPredictionExceptionsUnion";

export class DeleteBatchPredictionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBatchPredictionInput,
      OutputTypesUnion,
      DeleteBatchPredictionOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBatchPrediction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBatchPredictionInput,
    DeleteBatchPredictionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBatchPredictionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBatchPredictionInput,
    DeleteBatchPredictionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBatchPredictionInput, DeleteBatchPredictionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
