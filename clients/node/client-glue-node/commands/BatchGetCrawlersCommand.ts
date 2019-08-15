import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetCrawlers } from "../model/operations/BatchGetCrawlers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetCrawlersInput } from "../types/BatchGetCrawlersInput";
import { BatchGetCrawlersOutput } from "../types/BatchGetCrawlersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetCrawlersInput";
export * from "../types/BatchGetCrawlersOutput";
export * from "../types/BatchGetCrawlersExceptionsUnion";

export class BatchGetCrawlersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetCrawlersInput,
      OutputTypesUnion,
      BatchGetCrawlersOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetCrawlers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetCrawlersInput,
    BatchGetCrawlersOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetCrawlersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetCrawlersInput, BatchGetCrawlersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetCrawlersInput, BatchGetCrawlersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
