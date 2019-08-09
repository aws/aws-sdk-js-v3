import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchIndex } from "../model/SearchIndex";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchIndexInput } from "../types/SearchIndexInput";
import { SearchIndexOutput } from "../types/SearchIndexOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SearchIndexInput";
export * from "../types/SearchIndexOutput";
export * from "../types/SearchIndexExceptionsUnion";

export class SearchIndexCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchIndexInput,
      OutputTypesUnion,
      SearchIndexOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchIndex;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchIndexInput,
    SearchIndexOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchIndexInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchIndexInput, SearchIndexOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchIndexInput, SearchIndexOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
