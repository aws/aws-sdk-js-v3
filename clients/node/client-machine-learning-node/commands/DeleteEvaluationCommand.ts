import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEvaluation } from "../model/operations/DeleteEvaluation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEvaluationInput } from "../types/DeleteEvaluationInput";
import { DeleteEvaluationOutput } from "../types/DeleteEvaluationOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/DeleteEvaluationInput";
export * from "../types/DeleteEvaluationOutput";
export * from "../types/DeleteEvaluationExceptionsUnion";

export class DeleteEvaluationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEvaluationInput,
      OutputTypesUnion,
      DeleteEvaluationOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEvaluation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEvaluationInput,
    DeleteEvaluationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEvaluationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEvaluationInput, DeleteEvaluationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEvaluationInput, DeleteEvaluationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
