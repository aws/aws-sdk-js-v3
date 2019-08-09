import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SynthesizeSpeech } from "../model/SynthesizeSpeech";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SynthesizeSpeechInput } from "../types/SynthesizeSpeechInput";
import { SynthesizeSpeechOutput } from "../types/SynthesizeSpeechOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/SynthesizeSpeechInput";
export * from "../types/SynthesizeSpeechOutput";
export * from "../types/SynthesizeSpeechExceptionsUnion";

export class SynthesizeSpeechCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SynthesizeSpeechInput,
      OutputTypesUnion,
      SynthesizeSpeechOutput,
      PollyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SynthesizeSpeech;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SynthesizeSpeechInput,
    SynthesizeSpeechOutput,
    Uint8Array
  >();

  constructor(readonly input: SynthesizeSpeechInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<SynthesizeSpeechInput, SynthesizeSpeechOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SynthesizeSpeechInput, SynthesizeSpeechOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
