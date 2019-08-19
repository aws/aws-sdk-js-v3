import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMLModel } from "../model/operations/CreateMLModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMLModelInput } from "../types/CreateMLModelInput";
import { CreateMLModelOutput } from "../types/CreateMLModelOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/CreateMLModelInput";
export * from "../types/CreateMLModelOutput";
export * from "../types/CreateMLModelExceptionsUnion";

export class CreateMLModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMLModelInput,
      OutputTypesUnion,
      CreateMLModelOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMLModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMLModelInput,
    CreateMLModelOutput,
    Blob
  >();

  constructor(readonly input: CreateMLModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMLModelInput, CreateMLModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMLModelInput, CreateMLModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
