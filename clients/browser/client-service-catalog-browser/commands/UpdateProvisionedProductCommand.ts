import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateProvisionedProduct } from "../model/UpdateProvisionedProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProvisionedProductInput } from "../types/UpdateProvisionedProductInput";
import { UpdateProvisionedProductOutput } from "../types/UpdateProvisionedProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateProvisionedProductInput";
export * from "../types/UpdateProvisionedProductOutput";
export * from "../types/UpdateProvisionedProductExceptionsUnion";

export class UpdateProvisionedProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProvisionedProductInput,
      OutputTypesUnion,
      UpdateProvisionedProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateProvisionedProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProvisionedProductInput,
    UpdateProvisionedProductOutput,
    Blob
  >();

  constructor(readonly input: UpdateProvisionedProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateProvisionedProductInput,
    UpdateProvisionedProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateProvisionedProductInput, UpdateProvisionedProductOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
