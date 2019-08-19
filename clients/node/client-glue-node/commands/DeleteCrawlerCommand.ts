import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteCrawler } from "../model/operations/DeleteCrawler";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCrawlerInput } from "../types/DeleteCrawlerInput";
import { DeleteCrawlerOutput } from "../types/DeleteCrawlerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteCrawlerInput";
export * from "../types/DeleteCrawlerOutput";
export * from "../types/DeleteCrawlerExceptionsUnion";

export class DeleteCrawlerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCrawlerInput,
      OutputTypesUnion,
      DeleteCrawlerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteCrawler;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCrawlerInput,
    DeleteCrawlerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteCrawlerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteCrawlerInput, DeleteCrawlerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCrawlerInput, DeleteCrawlerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
