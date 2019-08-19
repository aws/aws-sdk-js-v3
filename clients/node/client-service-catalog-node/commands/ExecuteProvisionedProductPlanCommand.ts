import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExecuteProvisionedProductPlan } from "../model/operations/ExecuteProvisionedProductPlan";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteProvisionedProductPlanInput } from "../types/ExecuteProvisionedProductPlanInput";
import { ExecuteProvisionedProductPlanOutput } from "../types/ExecuteProvisionedProductPlanOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ExecuteProvisionedProductPlanInput";
export * from "../types/ExecuteProvisionedProductPlanOutput";
export * from "../types/ExecuteProvisionedProductPlanExceptionsUnion";

export class ExecuteProvisionedProductPlanCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteProvisionedProductPlanInput,
      OutputTypesUnion,
      ExecuteProvisionedProductPlanOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExecuteProvisionedProductPlan;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteProvisionedProductPlanInput,
    ExecuteProvisionedProductPlanOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExecuteProvisionedProductPlanInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ExecuteProvisionedProductPlanInput,
    ExecuteProvisionedProductPlanOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ExecuteProvisionedProductPlanInput,
        ExecuteProvisionedProductPlanOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
