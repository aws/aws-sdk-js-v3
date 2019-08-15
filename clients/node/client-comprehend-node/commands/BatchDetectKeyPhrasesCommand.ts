import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDetectKeyPhrases } from "../model/operations/BatchDetectKeyPhrases";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDetectKeyPhrasesInput } from "../types/BatchDetectKeyPhrasesInput";
import { BatchDetectKeyPhrasesOutput } from "../types/BatchDetectKeyPhrasesOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/BatchDetectKeyPhrasesInput";
export * from "../types/BatchDetectKeyPhrasesOutput";
export * from "../types/BatchDetectKeyPhrasesExceptionsUnion";

export class BatchDetectKeyPhrasesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDetectKeyPhrasesInput,
      OutputTypesUnion,
      BatchDetectKeyPhrasesOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDetectKeyPhrases;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDetectKeyPhrasesInput,
    BatchDetectKeyPhrasesOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDetectKeyPhrasesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDetectKeyPhrasesInput,
    BatchDetectKeyPhrasesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDetectKeyPhrasesInput, BatchDetectKeyPhrasesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
