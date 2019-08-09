import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ScanProvisionedProducts } from "../model/ScanProvisionedProducts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ScanProvisionedProductsInput } from "../types/ScanProvisionedProductsInput";
import { ScanProvisionedProductsOutput } from "../types/ScanProvisionedProductsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ScanProvisionedProductsInput";
export * from "../types/ScanProvisionedProductsOutput";
export * from "../types/ScanProvisionedProductsExceptionsUnion";

export class ScanProvisionedProductsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ScanProvisionedProductsInput,
      OutputTypesUnion,
      ScanProvisionedProductsOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ScanProvisionedProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ScanProvisionedProductsInput,
    ScanProvisionedProductsOutput,
    Uint8Array
  >();

  constructor(readonly input: ScanProvisionedProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ScanProvisionedProductsInput,
    ScanProvisionedProductsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ScanProvisionedProductsInput, ScanProvisionedProductsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
