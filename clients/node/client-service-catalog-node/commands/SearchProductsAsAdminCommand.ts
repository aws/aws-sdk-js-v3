import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SearchProductsAsAdmin } from "../model/SearchProductsAsAdmin";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchProductsAsAdminInput } from "../types/SearchProductsAsAdminInput";
import { SearchProductsAsAdminOutput } from "../types/SearchProductsAsAdminOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/SearchProductsAsAdminInput";
export * from "../types/SearchProductsAsAdminOutput";
export * from "../types/SearchProductsAsAdminExceptionsUnion";

export class SearchProductsAsAdminCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchProductsAsAdminInput,
      OutputTypesUnion,
      SearchProductsAsAdminOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SearchProductsAsAdmin;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchProductsAsAdminInput,
    SearchProductsAsAdminOutput,
    _stream.Readable
  >();

  constructor(readonly input: SearchProductsAsAdminInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchProductsAsAdminInput,
    SearchProductsAsAdminOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchProductsAsAdminInput, SearchProductsAsAdminOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
