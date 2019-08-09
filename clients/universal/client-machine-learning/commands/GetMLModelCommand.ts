import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMLModel } from "../model/GetMLModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMLModelInput } from "../types/GetMLModelInput";
import { GetMLModelOutput } from "../types/GetMLModelOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/GetMLModelInput";
export * from "../types/GetMLModelOutput";
export * from "../types/GetMLModelExceptionsUnion";

export class GetMLModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMLModelInput,
      OutputTypesUnion,
      GetMLModelOutput,
      MachineLearningResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMLModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMLModelInput,
    GetMLModelOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMLModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMLModelInput, GetMLModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMLModelInput, GetMLModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
