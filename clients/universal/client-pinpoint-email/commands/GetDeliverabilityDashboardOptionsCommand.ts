import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeliverabilityDashboardOptions } from "../model/GetDeliverabilityDashboardOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeliverabilityDashboardOptionsInput } from "../types/GetDeliverabilityDashboardOptionsInput";
import { GetDeliverabilityDashboardOptionsOutput } from "../types/GetDeliverabilityDashboardOptionsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/GetDeliverabilityDashboardOptionsInput";
export * from "../types/GetDeliverabilityDashboardOptionsOutput";
export * from "../types/GetDeliverabilityDashboardOptionsExceptionsUnion";

export class GetDeliverabilityDashboardOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeliverabilityDashboardOptionsInput,
      OutputTypesUnion,
      GetDeliverabilityDashboardOptionsOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDeliverabilityDashboardOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeliverabilityDashboardOptionsInput,
    GetDeliverabilityDashboardOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDeliverabilityDashboardOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeliverabilityDashboardOptionsInput,
    GetDeliverabilityDashboardOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDeliverabilityDashboardOptionsInput,
        GetDeliverabilityDashboardOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
