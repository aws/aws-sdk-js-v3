import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchProducts } from "../model/operations/SearchProducts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchProductsInput } from "../types/SearchProductsInput";
import { SearchProductsOutput } from "../types/SearchProductsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/SearchProductsInput";
export * from "../types/SearchProductsOutput";
export * from "../types/SearchProductsExceptionsUnion";

export class SearchProductsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchProductsInput,
      OutputTypesUnion,
      SearchProductsOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = SearchProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchProductsInput,
    SearchProductsOutput,
    Blob
  >();

  constructor(readonly input: SearchProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<SearchProductsInput, SearchProductsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchProductsInput, SearchProductsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
