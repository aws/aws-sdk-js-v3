import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCrawler } from "../model/operations/GetCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCrawlerInput } from "../types/GetCrawlerInput";
import { GetCrawlerOutput } from "../types/GetCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetCrawlerInput";
export * from "../types/GetCrawlerOutput";
export * from "../types/GetCrawlerExceptionsUnion";

export class GetCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCrawlerInput,
      OutputTypesUnion,
      GetCrawlerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCrawlerInput,
    GetCrawlerOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCrawlerInput, GetCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCrawlerInput, GetCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
