import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TerminateProvisionedProduct } from "../model/operations/TerminateProvisionedProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateProvisionedProductInput } from "../types/TerminateProvisionedProductInput";
import { TerminateProvisionedProductOutput } from "../types/TerminateProvisionedProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/TerminateProvisionedProductInput";
export * from "../types/TerminateProvisionedProductOutput";
export * from "../types/TerminateProvisionedProductExceptionsUnion";

export class TerminateProvisionedProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateProvisionedProductInput,
      OutputTypesUnion,
      TerminateProvisionedProductOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = TerminateProvisionedProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateProvisionedProductInput,
    TerminateProvisionedProductOutput,
    Blob
  >();

  constructor(readonly input: TerminateProvisionedProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TerminateProvisionedProductInput,
    TerminateProvisionedProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        TerminateProvisionedProductInput,
        TerminateProvisionedProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
