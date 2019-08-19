import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetVocabulary } from "../model/operations/GetVocabulary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVocabularyInput } from "../types/GetVocabularyInput";
import { GetVocabularyOutput } from "../types/GetVocabularyOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/GetVocabularyInput";
export * from "../types/GetVocabularyOutput";
export * from "../types/GetVocabularyExceptionsUnion";

export class GetVocabularyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVocabularyInput,
      OutputTypesUnion,
      GetVocabularyOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetVocabulary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVocabularyInput,
    GetVocabularyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetVocabularyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetVocabularyInput, GetVocabularyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVocabularyInput, GetVocabularyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
