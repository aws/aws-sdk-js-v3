import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBatchPredictions } from "../model/DescribeBatchPredictions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBatchPredictionsInput } from "../types/DescribeBatchPredictionsInput";
import { DescribeBatchPredictionsOutput } from "../types/DescribeBatchPredictionsOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DescribeBatchPredictionsInput";
export * from "../types/DescribeBatchPredictionsOutput";
export * from "../types/DescribeBatchPredictionsExceptionsUnion";

export class DescribeBatchPredictionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBatchPredictionsInput,
      OutputTypesUnion,
      DescribeBatchPredictionsOutput,
      MachineLearningResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeBatchPredictions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBatchPredictionsInput,
    DescribeBatchPredictionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeBatchPredictionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBatchPredictionsInput,
    DescribeBatchPredictionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
