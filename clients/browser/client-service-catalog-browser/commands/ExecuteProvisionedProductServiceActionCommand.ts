import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExecuteProvisionedProductServiceAction } from "../model/ExecuteProvisionedProductServiceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteProvisionedProductServiceActionInput } from "../types/ExecuteProvisionedProductServiceActionInput";
import { ExecuteProvisionedProductServiceActionOutput } from "../types/ExecuteProvisionedProductServiceActionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ExecuteProvisionedProductServiceActionInput";
export * from "../types/ExecuteProvisionedProductServiceActionOutput";
export * from "../types/ExecuteProvisionedProductServiceActionExceptionsUnion";

export class ExecuteProvisionedProductServiceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteProvisionedProductServiceActionInput,
      OutputTypesUnion,
      ExecuteProvisionedProductServiceActionOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ExecuteProvisionedProductServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteProvisionedProductServiceActionInput,
    ExecuteProvisionedProductServiceActionOutput,
    Blob
  >();

  constructor(readonly input: ExecuteProvisionedProductServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExecuteProvisionedProductServiceActionInput,
    ExecuteProvisionedProductServiceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExecuteProvisionedProductServiceActionInput,
        ExecuteProvisionedProductServiceActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
