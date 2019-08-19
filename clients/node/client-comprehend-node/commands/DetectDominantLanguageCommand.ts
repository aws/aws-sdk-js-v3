import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetectDominantLanguage } from "../model/operations/DetectDominantLanguage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectDominantLanguageInput } from "../types/DetectDominantLanguageInput";
import { DetectDominantLanguageOutput } from "../types/DetectDominantLanguageOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DetectDominantLanguageInput";
export * from "../types/DetectDominantLanguageOutput";
export * from "../types/DetectDominantLanguageExceptionsUnion";

export class DetectDominantLanguageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectDominantLanguageInput,
      OutputTypesUnion,
      DetectDominantLanguageOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetectDominantLanguage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectDominantLanguageInput,
    DetectDominantLanguageOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetectDominantLanguageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetectDominantLanguageInput,
    DetectDominantLanguageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectDominantLanguageInput, DetectDominantLanguageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
