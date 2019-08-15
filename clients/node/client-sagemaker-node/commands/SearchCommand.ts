import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { Search } from "../model/operations/Search";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchInput } from "../types/SearchInput";
import { SearchOutput } from "../types/SearchOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/SearchInput";
export * from "../types/SearchOutput";
export * from "../types/SearchExceptionsUnion";

export class SearchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchInput,
      OutputTypesUnion,
      SearchOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = Search;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchInput,
    SearchOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchInput, SearchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchInput, SearchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
