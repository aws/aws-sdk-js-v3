import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCrawlers } from "../model/operations/GetCrawlers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCrawlersInput } from "../types/GetCrawlersInput";
import { GetCrawlersOutput } from "../types/GetCrawlersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetCrawlersInput";
export * from "../types/GetCrawlersOutput";
export * from "../types/GetCrawlersExceptionsUnion";

export class GetCrawlersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCrawlersInput,
      OutputTypesUnion,
      GetCrawlersOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCrawlers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCrawlersInput,
    GetCrawlersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCrawlersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCrawlersInput, GetCrawlersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCrawlersInput, GetCrawlersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
