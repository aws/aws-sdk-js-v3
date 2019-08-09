import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopCrawler } from "../model/StopCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopCrawlerInput } from "../types/StopCrawlerInput";
import { StopCrawlerOutput } from "../types/StopCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StopCrawlerInput";
export * from "../types/StopCrawlerOutput";
export * from "../types/StopCrawlerExceptionsUnion";

export class StopCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopCrawlerInput,
      OutputTypesUnion,
      StopCrawlerOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = StopCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopCrawlerInput,
    StopCrawlerOutput,
    Blob
  >();

  constructor(readonly input: StopCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StopCrawlerInput, StopCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopCrawlerInput, StopCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
