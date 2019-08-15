import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExecuteProvisionedProductServiceAction } from "../model/operations/ExecuteProvisionedProductServiceAction";
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
      _stream.Readable
    > {
  readonly model = ExecuteProvisionedProductServiceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteProvisionedProductServiceActionInput,
    ExecuteProvisionedProductServiceActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExecuteProvisionedProductServiceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
