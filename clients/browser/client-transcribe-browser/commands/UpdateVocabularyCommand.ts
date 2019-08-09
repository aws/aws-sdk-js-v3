import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVocabulary } from "../model/UpdateVocabulary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVocabularyInput } from "../types/UpdateVocabularyInput";
import { UpdateVocabularyOutput } from "../types/UpdateVocabularyOutput";
import { TranscribeResolvedConfiguration } from "../TranscribeConfiguration";
export * from "../types/UpdateVocabularyInput";
export * from "../types/UpdateVocabularyOutput";
export * from "../types/UpdateVocabularyExceptionsUnion";

export class UpdateVocabularyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVocabularyInput,
      OutputTypesUnion,
      UpdateVocabularyOutput,
      TranscribeResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateVocabulary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVocabularyInput,
    UpdateVocabularyOutput,
    Blob
  >();

  constructor(readonly input: UpdateVocabularyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TranscribeResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateVocabularyInput, UpdateVocabularyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVocabularyInput, UpdateVocabularyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
