import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopTrainingDocumentClassifier } from "../model/StopTrainingDocumentClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTrainingDocumentClassifierInput } from "../types/StopTrainingDocumentClassifierInput";
import { StopTrainingDocumentClassifierOutput } from "../types/StopTrainingDocumentClassifierOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopTrainingDocumentClassifierInput";
export * from "../types/StopTrainingDocumentClassifierOutput";
export * from "../types/StopTrainingDocumentClassifierExceptionsUnion";

export class StopTrainingDocumentClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTrainingDocumentClassifierInput,
      OutputTypesUnion,
      StopTrainingDocumentClassifierOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopTrainingDocumentClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTrainingDocumentClassifierInput,
    StopTrainingDocumentClassifierOutput,
    Uint8Array
  >();

  constructor(readonly input: StopTrainingDocumentClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopTrainingDocumentClassifierInput,
    StopTrainingDocumentClassifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopTrainingDocumentClassifierInput,
        StopTrainingDocumentClassifierOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
