import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableAvailabilityZonesForLoadBalancer } from "../model/operations/DisableAvailabilityZonesForLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableAvailabilityZonesForLoadBalancerInput } from "../types/DisableAvailabilityZonesForLoadBalancerInput";
import { DisableAvailabilityZonesForLoadBalancerOutput } from "../types/DisableAvailabilityZonesForLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DisableAvailabilityZonesForLoadBalancerInput";
export * from "../types/DisableAvailabilityZonesForLoadBalancerOutput";
export * from "../types/DisableAvailabilityZonesForLoadBalancerExceptionsUnion";

export class DisableAvailabilityZonesForLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableAvailabilityZonesForLoadBalancerInput,
      OutputTypesUnion,
      DisableAvailabilityZonesForLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = DisableAvailabilityZonesForLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableAvailabilityZonesForLoadBalancerInput,
    DisableAvailabilityZonesForLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: DisableAvailabilityZonesForLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableAvailabilityZonesForLoadBalancerInput,
    DisableAvailabilityZonesForLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableAvailabilityZonesForLoadBalancerInput,
        DisableAvailabilityZonesForLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
