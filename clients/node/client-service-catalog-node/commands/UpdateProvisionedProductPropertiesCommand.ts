import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateProvisionedProductProperties } from "../model/UpdateProvisionedProductProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateProvisionedProductPropertiesInput } from "../types/UpdateProvisionedProductPropertiesInput";
import { UpdateProvisionedProductPropertiesOutput } from "../types/UpdateProvisionedProductPropertiesOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdateProvisionedProductPropertiesInput";
export * from "../types/UpdateProvisionedProductPropertiesOutput";
export * from "../types/UpdateProvisionedProductPropertiesExceptionsUnion";

export class UpdateProvisionedProductPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateProvisionedProductPropertiesInput,
      OutputTypesUnion,
      UpdateProvisionedProductPropertiesOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateProvisionedProductProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateProvisionedProductPropertiesInput,
    UpdateProvisionedProductPropertiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateProvisionedProductPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateProvisionedProductPropertiesInput,
    UpdateProvisionedProductPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateProvisionedProductPropertiesInput,
        UpdateProvisionedProductPropertiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
