import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ScanProvisionedProducts } from "../model/operations/ScanProvisionedProducts";
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
      _stream.Readable
    > {
  readonly model = ScanProvisionedProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ScanProvisionedProductsInput,
    ScanProvisionedProductsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ScanProvisionedProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
