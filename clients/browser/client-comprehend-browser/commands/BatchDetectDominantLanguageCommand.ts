import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDetectDominantLanguage } from "../model/BatchDetectDominantLanguage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDetectDominantLanguageInput } from "../types/BatchDetectDominantLanguageInput";
import { BatchDetectDominantLanguageOutput } from "../types/BatchDetectDominantLanguageOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/BatchDetectDominantLanguageInput";
export * from "../types/BatchDetectDominantLanguageOutput";
export * from "../types/BatchDetectDominantLanguageExceptionsUnion";

export class BatchDetectDominantLanguageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDetectDominantLanguageInput,
      OutputTypesUnion,
      BatchDetectDominantLanguageOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDetectDominantLanguage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDetectDominantLanguageInput,
    BatchDetectDominantLanguageOutput,
    Blob
  >();

  constructor(readonly input: BatchDetectDominantLanguageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDetectDominantLanguageInput,
    BatchDetectDominantLanguageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDetectDominantLanguageInput,
        BatchDetectDominantLanguageOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
