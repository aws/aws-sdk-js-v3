import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteProvisionedProductPlan } from "../model/DeleteProvisionedProductPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProvisionedProductPlanInput } from "../types/DeleteProvisionedProductPlanInput";
import { DeleteProvisionedProductPlanOutput } from "../types/DeleteProvisionedProductPlanOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteProvisionedProductPlanInput";
export * from "../types/DeleteProvisionedProductPlanOutput";
export * from "../types/DeleteProvisionedProductPlanExceptionsUnion";

export class DeleteProvisionedProductPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProvisionedProductPlanInput,
      OutputTypesUnion,
      DeleteProvisionedProductPlanOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteProvisionedProductPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProvisionedProductPlanInput,
    DeleteProvisionedProductPlanOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteProvisionedProductPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteProvisionedProductPlanInput,
    DeleteProvisionedProductPlanOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteProvisionedProductPlanInput,
        DeleteProvisionedProductPlanOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
