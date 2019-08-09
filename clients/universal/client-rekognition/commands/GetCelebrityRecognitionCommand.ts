import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCelebrityRecognition } from "../model/GetCelebrityRecognition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCelebrityRecognitionInput } from "../types/GetCelebrityRecognitionInput";
import { GetCelebrityRecognitionOutput } from "../types/GetCelebrityRecognitionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetCelebrityRecognitionInput";
export * from "../types/GetCelebrityRecognitionOutput";
export * from "../types/GetCelebrityRecognitionExceptionsUnion";

export class GetCelebrityRecognitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCelebrityRecognitionInput,
      OutputTypesUnion,
      GetCelebrityRecognitionOutput,
      RekognitionResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCelebrityRecognition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCelebrityRecognitionInput,
    GetCelebrityRecognitionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCelebrityRecognitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCelebrityRecognitionInput,
    GetCelebrityRecognitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCelebrityRecognitionInput, GetCelebrityRecognitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
