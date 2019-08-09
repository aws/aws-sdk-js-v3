import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateProvisionedProductPlan } from "../model/CreateProvisionedProductPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProvisionedProductPlanInput } from "../types/CreateProvisionedProductPlanInput";
import { CreateProvisionedProductPlanOutput } from "../types/CreateProvisionedProductPlanOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreateProvisionedProductPlanInput";
export * from "../types/CreateProvisionedProductPlanOutput";
export * from "../types/CreateProvisionedProductPlanExceptionsUnion";

export class CreateProvisionedProductPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProvisionedProductPlanInput,
      OutputTypesUnion,
      CreateProvisionedProductPlanOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateProvisionedProductPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProvisionedProductPlanInput,
    CreateProvisionedProductPlanOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateProvisionedProductPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateProvisionedProductPlanInput,
    CreateProvisionedProductPlanOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateProvisionedProductPlanInput,
        CreateProvisionedProductPlanOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
