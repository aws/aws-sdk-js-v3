import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLoadBalancerMetricData } from "../model/GetLoadBalancerMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoadBalancerMetricDataInput } from "../types/GetLoadBalancerMetricDataInput";
import { GetLoadBalancerMetricDataOutput } from "../types/GetLoadBalancerMetricDataOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetLoadBalancerMetricDataInput";
export * from "../types/GetLoadBalancerMetricDataOutput";
export * from "../types/GetLoadBalancerMetricDataExceptionsUnion";

export class GetLoadBalancerMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoadBalancerMetricDataInput,
      OutputTypesUnion,
      GetLoadBalancerMetricDataOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLoadBalancerMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoadBalancerMetricDataInput,
    GetLoadBalancerMetricDataOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLoadBalancerMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLoadBalancerMetricDataInput,
    GetLoadBalancerMetricDataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoadBalancerMetricDataInput, GetLoadBalancerMetricDataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
