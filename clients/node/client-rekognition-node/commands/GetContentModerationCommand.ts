import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetContentModeration } from "../model/operations/GetContentModeration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContentModerationInput } from "../types/GetContentModerationInput";
import { GetContentModerationOutput } from "../types/GetContentModerationOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetContentModerationInput";
export * from "../types/GetContentModerationOutput";
export * from "../types/GetContentModerationExceptionsUnion";

export class GetContentModerationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContentModerationInput,
      OutputTypesUnion,
      GetContentModerationOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetContentModeration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContentModerationInput,
    GetContentModerationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetContentModerationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContentModerationInput,
    GetContentModerationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetContentModerationInput, GetContentModerationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
