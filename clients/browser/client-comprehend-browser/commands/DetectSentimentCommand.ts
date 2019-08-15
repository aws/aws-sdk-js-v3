import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectSentiment } from "../model/operations/DetectSentiment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectSentimentInput } from "../types/DetectSentimentInput";
import { DetectSentimentOutput } from "../types/DetectSentimentOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DetectSentimentInput";
export * from "../types/DetectSentimentOutput";
export * from "../types/DetectSentimentExceptionsUnion";

export class DetectSentimentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectSentimentInput,
      OutputTypesUnion,
      DetectSentimentOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DetectSentiment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectSentimentInput,
    DetectSentimentOutput,
    Blob
  >();

  constructor(readonly input: DetectSentimentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectSentimentInput, DetectSentimentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectSentimentInput, DetectSentimentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
