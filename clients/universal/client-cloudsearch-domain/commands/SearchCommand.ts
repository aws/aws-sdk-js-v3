import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Search } from "../model/Search";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchInput } from "../types/SearchInput";
import { SearchOutput } from "../types/SearchOutput";
import { CloudSearchDomainResolvedConfiguration } from "../CloudSearchDomainConfiguration";
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
      CloudSearchDomainResolvedConfiguration,
      Uint8Array
    > {
  readonly model = Search;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchInput,
    SearchOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudSearchDomainResolvedConfiguration
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
