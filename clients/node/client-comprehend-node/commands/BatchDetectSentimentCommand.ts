import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDetectSentiment } from "../model/BatchDetectSentiment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDetectSentimentInput } from "../types/BatchDetectSentimentInput";
import { BatchDetectSentimentOutput } from "../types/BatchDetectSentimentOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/BatchDetectSentimentInput";
export * from "../types/BatchDetectSentimentOutput";
export * from "../types/BatchDetectSentimentExceptionsUnion";

export class BatchDetectSentimentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDetectSentimentInput,
      OutputTypesUnion,
      BatchDetectSentimentOutput,
      ComprehendResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDetectSentiment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDetectSentimentInput,
    BatchDetectSentimentOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDetectSentimentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDetectSentimentInput,
    BatchDetectSentimentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDetectSentimentInput, BatchDetectSentimentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
