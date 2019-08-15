import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListStackInstancesForProvisionedProduct } from "../model/operations/ListStackInstancesForProvisionedProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStackInstancesForProvisionedProductInput } from "../types/ListStackInstancesForProvisionedProductInput";
import { ListStackInstancesForProvisionedProductOutput } from "../types/ListStackInstancesForProvisionedProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListStackInstancesForProvisionedProductInput";
export * from "../types/ListStackInstancesForProvisionedProductOutput";
export * from "../types/ListStackInstancesForProvisionedProductExceptionsUnion";

export class ListStackInstancesForProvisionedProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStackInstancesForProvisionedProductInput,
      OutputTypesUnion,
      ListStackInstancesForProvisionedProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListStackInstancesForProvisionedProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStackInstancesForProvisionedProductInput,
    ListStackInstancesForProvisionedProductOutput,
    Blob
  >();

  constructor(readonly input: ListStackInstancesForProvisionedProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStackInstancesForProvisionedProductInput,
    ListStackInstancesForProvisionedProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListStackInstancesForProvisionedProductInput,
        ListStackInstancesForProvisionedProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
