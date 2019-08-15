import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCrawlerMetrics } from "../model/operations/GetCrawlerMetrics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCrawlerMetricsInput } from "../types/GetCrawlerMetricsInput";
import { GetCrawlerMetricsOutput } from "../types/GetCrawlerMetricsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetCrawlerMetricsInput";
export * from "../types/GetCrawlerMetricsOutput";
export * from "../types/GetCrawlerMetricsExceptionsUnion";

export class GetCrawlerMetricsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCrawlerMetricsInput,
      OutputTypesUnion,
      GetCrawlerMetricsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetCrawlerMetrics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCrawlerMetricsInput,
    GetCrawlerMetricsOutput,
    Blob
  >();

  constructor(readonly input: GetCrawlerMetricsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCrawlerMetricsInput, GetCrawlerMetricsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCrawlerMetricsInput, GetCrawlerMetricsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
