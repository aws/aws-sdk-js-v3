import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProvisionedProductPlan } from "../model/operations/DescribeProvisionedProductPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisionedProductPlanInput } from "../types/DescribeProvisionedProductPlanInput";
import { DescribeProvisionedProductPlanOutput } from "../types/DescribeProvisionedProductPlanOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisionedProductPlanInput";
export * from "../types/DescribeProvisionedProductPlanOutput";
export * from "../types/DescribeProvisionedProductPlanExceptionsUnion";

export class DescribeProvisionedProductPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisionedProductPlanInput,
      OutputTypesUnion,
      DescribeProvisionedProductPlanOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProvisionedProductPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisionedProductPlanInput,
    DescribeProvisionedProductPlanOutput,
    Blob
  >();

  constructor(readonly input: DescribeProvisionedProductPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisionedProductPlanInput,
    DescribeProvisionedProductPlanOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisionedProductPlanInput,
        DescribeProvisionedProductPlanOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
