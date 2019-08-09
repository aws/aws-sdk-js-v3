import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVocabulary } from "../model/CreateVocabulary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVocabularyInput } from "../types/CreateVocabularyInput";
import { CreateVocabularyOutput } from "../types/CreateVocabularyOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/CreateVocabularyInput";
export * from "../types/CreateVocabularyOutput";
export * from "../types/CreateVocabularyExceptionsUnion";

export class CreateVocabularyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVocabularyInput,
      OutputTypesUnion,
      CreateVocabularyOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVocabulary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVocabularyInput,
    CreateVocabularyOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVocabularyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateVocabularyInput, CreateVocabularyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVocabularyInput, CreateVocabularyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
