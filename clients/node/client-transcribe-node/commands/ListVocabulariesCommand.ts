import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListVocabularies } from "../model/ListVocabularies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVocabulariesInput } from "../types/ListVocabulariesInput";
import { ListVocabulariesOutput } from "../types/ListVocabulariesOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/ListVocabulariesInput";
export * from "../types/ListVocabulariesOutput";
export * from "../types/ListVocabulariesExceptionsUnion";

export class ListVocabulariesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVocabulariesInput,
      OutputTypesUnion,
      ListVocabulariesOutput,
      TranscribeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListVocabularies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVocabulariesInput,
    ListVocabulariesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListVocabulariesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListVocabulariesInput, ListVocabulariesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListVocabulariesInput, ListVocabulariesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
