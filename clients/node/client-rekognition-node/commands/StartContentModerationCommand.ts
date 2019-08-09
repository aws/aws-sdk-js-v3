import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartContentModeration } from "../model/StartContentModeration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartContentModerationInput } from "../types/StartContentModerationInput";
import { StartContentModerationOutput } from "../types/StartContentModerationOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartContentModerationInput";
export * from "../types/StartContentModerationOutput";
export * from "../types/StartContentModerationExceptionsUnion";

export class StartContentModerationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartContentModerationInput,
      OutputTypesUnion,
      StartContentModerationOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartContentModeration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartContentModerationInput,
    StartContentModerationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartContentModerationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartContentModerationInput,
    StartContentModerationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartContentModerationInput, StartContentModerationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
