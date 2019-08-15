import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartCrawler } from "../model/operations/StartCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartCrawlerInput } from "../types/StartCrawlerInput";
import { StartCrawlerOutput } from "../types/StartCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StartCrawlerInput";
export * from "../types/StartCrawlerOutput";
export * from "../types/StartCrawlerExceptionsUnion";

export class StartCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartCrawlerInput,
      OutputTypesUnion,
      StartCrawlerOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = StartCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartCrawlerInput,
    StartCrawlerOutput,
    Blob
  >();

  constructor(readonly input: StartCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StartCrawlerInput, StartCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartCrawlerInput, StartCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
