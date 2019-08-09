import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProvisionedProduct } from "../model/DescribeProvisionedProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisionedProductInput } from "../types/DescribeProvisionedProductInput";
import { DescribeProvisionedProductOutput } from "../types/DescribeProvisionedProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisionedProductInput";
export * from "../types/DescribeProvisionedProductOutput";
export * from "../types/DescribeProvisionedProductExceptionsUnion";

export class DescribeProvisionedProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisionedProductInput,
      OutputTypesUnion,
      DescribeProvisionedProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProvisionedProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisionedProductInput,
    DescribeProvisionedProductOutput,
    Blob
  >();

  constructor(readonly input: DescribeProvisionedProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisionedProductInput,
    DescribeProvisionedProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisionedProductInput,
        DescribeProvisionedProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
