import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCrawlers } from "../model/ListCrawlers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCrawlersInput } from "../types/ListCrawlersInput";
import { ListCrawlersOutput } from "../types/ListCrawlersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ListCrawlersInput";
export * from "../types/ListCrawlersOutput";
export * from "../types/ListCrawlersExceptionsUnion";

export class ListCrawlersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCrawlersInput,
      OutputTypesUnion,
      ListCrawlersOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = ListCrawlers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCrawlersInput,
    ListCrawlersOutput,
    Blob
  >();

  constructor(readonly input: ListCrawlersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<ListCrawlersInput, ListCrawlersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCrawlersInput, ListCrawlersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
