import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SearchProvisionedProducts } from "../model/operations/SearchProvisionedProducts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SearchProvisionedProductsInput } from "../types/SearchProvisionedProductsInput";
import { SearchProvisionedProductsOutput } from "../types/SearchProvisionedProductsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/SearchProvisionedProductsInput";
export * from "../types/SearchProvisionedProductsOutput";
export * from "../types/SearchProvisionedProductsExceptionsUnion";

export class SearchProvisionedProductsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SearchProvisionedProductsInput,
      OutputTypesUnion,
      SearchProvisionedProductsOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = SearchProvisionedProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SearchProvisionedProductsInput,
    SearchProvisionedProductsOutput,
    Blob
  >();

  constructor(readonly input: SearchProvisionedProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SearchProvisionedProductsInput,
    SearchProvisionedProductsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SearchProvisionedProductsInput, SearchProvisionedProductsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
