import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchAddressBooks } from "../model/SearchAddressBooks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchAddressBooksInput } from "../types/SearchAddressBooksInput";
import { SearchAddressBooksOutput } from "../types/SearchAddressBooksOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/SearchAddressBooksInput";
export * from "../types/SearchAddressBooksOutput";
export * from "../types/SearchAddressBooksExceptionsUnion";

export class SearchAddressBooksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchAddressBooksInput,
      OutputTypesUnion,
      SearchAddressBooksOutput,
      AlexaForBusinessResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SearchAddressBooks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchAddressBooksInput,
    SearchAddressBooksOutput,
    Uint8Array
  >();

  constructor(readonly input: SearchAddressBooksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchAddressBooksInput,
    SearchAddressBooksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchAddressBooksInput, SearchAddressBooksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
