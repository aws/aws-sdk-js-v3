import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMLModel } from "../model/operations/UpdateMLModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMLModelInput } from "../types/UpdateMLModelInput";
import { UpdateMLModelOutput } from "../types/UpdateMLModelOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/UpdateMLModelInput";
export * from "../types/UpdateMLModelOutput";
export * from "../types/UpdateMLModelExceptionsUnion";

export class UpdateMLModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMLModelInput,
      OutputTypesUnion,
      UpdateMLModelOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMLModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMLModelInput,
    UpdateMLModelOutput,
    Blob
  >();

  constructor(readonly input: UpdateMLModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateMLModelInput, UpdateMLModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMLModelInput, UpdateMLModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
