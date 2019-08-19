import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetEvaluation } from "../model/operations/GetEvaluation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEvaluationInput } from "../types/GetEvaluationInput";
import { GetEvaluationOutput } from "../types/GetEvaluationOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/GetEvaluationInput";
export * from "../types/GetEvaluationOutput";
export * from "../types/GetEvaluationExceptionsUnion";

export class GetEvaluationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEvaluationInput,
      OutputTypesUnion,
      GetEvaluationOutput,
      MachineLearningResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetEvaluation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEvaluationInput,
    GetEvaluationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetEvaluationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEvaluationInput, GetEvaluationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEvaluationInput, GetEvaluationOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
