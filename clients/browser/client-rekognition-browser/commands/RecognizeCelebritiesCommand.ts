import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RecognizeCelebrities } from "../model/RecognizeCelebrities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RecognizeCelebritiesInput } from "../types/RecognizeCelebritiesInput";
import { RecognizeCelebritiesOutput } from "../types/RecognizeCelebritiesOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/RecognizeCelebritiesInput";
export * from "../types/RecognizeCelebritiesOutput";
export * from "../types/RecognizeCelebritiesExceptionsUnion";

export class RecognizeCelebritiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RecognizeCelebritiesInput,
      OutputTypesUnion,
      RecognizeCelebritiesOutput,
      RekognitionResolvedConfiguration,
      Blob
    > {
  readonly model = RecognizeCelebrities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RecognizeCelebritiesInput,
    RecognizeCelebritiesOutput,
    Blob
  >();

  constructor(readonly input: RecognizeCelebritiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RecognizeCelebritiesInput,
    RecognizeCelebritiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RecognizeCelebritiesInput, RecognizeCelebritiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
