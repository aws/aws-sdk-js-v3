import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCrawler } from "../model/CreateCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCrawlerInput } from "../types/CreateCrawlerInput";
import { CreateCrawlerOutput } from "../types/CreateCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateCrawlerInput";
export * from "../types/CreateCrawlerOutput";
export * from "../types/CreateCrawlerExceptionsUnion";

export class CreateCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCrawlerInput,
      OutputTypesUnion,
      CreateCrawlerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCrawlerInput,
    CreateCrawlerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCrawlerInput, CreateCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCrawlerInput, CreateCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
