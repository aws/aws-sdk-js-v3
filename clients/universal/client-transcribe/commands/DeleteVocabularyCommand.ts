import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVocabulary } from "../model/DeleteVocabulary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVocabularyInput } from "../types/DeleteVocabularyInput";
import { DeleteVocabularyOutput } from "../types/DeleteVocabularyOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/DeleteVocabularyInput";
export * from "../types/DeleteVocabularyOutput";
export * from "../types/DeleteVocabularyExceptionsUnion";

export class DeleteVocabularyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVocabularyInput,
      OutputTypesUnion,
      DeleteVocabularyOutput,
      TranscribeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVocabulary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVocabularyInput,
    DeleteVocabularyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVocabularyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVocabularyInput, DeleteVocabularyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVocabularyInput, DeleteVocabularyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
