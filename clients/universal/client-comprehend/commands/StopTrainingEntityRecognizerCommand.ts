import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopTrainingEntityRecognizer } from "../model/StopTrainingEntityRecognizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopTrainingEntityRecognizerInput } from "../types/StopTrainingEntityRecognizerInput";
import { StopTrainingEntityRecognizerOutput } from "../types/StopTrainingEntityRecognizerOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopTrainingEntityRecognizerInput";
export * from "../types/StopTrainingEntityRecognizerOutput";
export * from "../types/StopTrainingEntityRecognizerExceptionsUnion";

export class StopTrainingEntityRecognizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopTrainingEntityRecognizerInput,
      OutputTypesUnion,
      StopTrainingEntityRecognizerOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopTrainingEntityRecognizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopTrainingEntityRecognizerInput,
    StopTrainingEntityRecognizerOutput,
    Uint8Array
  >();

  constructor(readonly input: StopTrainingEntityRecognizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopTrainingEntityRecognizerInput,
    StopTrainingEntityRecognizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopTrainingEntityRecognizerInput,
        StopTrainingEntityRecognizerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
