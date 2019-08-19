import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEvaluation } from "../model/operations/CreateEvaluation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEvaluationInput } from "../types/CreateEvaluationInput";
import { CreateEvaluationOutput } from "../types/CreateEvaluationOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateEvaluationInput";
export * from "../types/CreateEvaluationOutput";
export * from "../types/CreateEvaluationExceptionsUnion";

export class CreateEvaluationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEvaluationInput,
      OutputTypesUnion,
      CreateEvaluationOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = CreateEvaluation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEvaluationInput,
    CreateEvaluationOutput,
    Blob
  >();

  constructor(readonly input: CreateEvaluationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateEvaluationInput, CreateEvaluationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEvaluationInput, CreateEvaluationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
