import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableAvailabilityZonesForLoadBalancer } from "../model/EnableAvailabilityZonesForLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableAvailabilityZonesForLoadBalancerInput } from "../types/EnableAvailabilityZonesForLoadBalancerInput";
import { EnableAvailabilityZonesForLoadBalancerOutput } from "../types/EnableAvailabilityZonesForLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/EnableAvailabilityZonesForLoadBalancerInput";
export * from "../types/EnableAvailabilityZonesForLoadBalancerOutput";
export * from "../types/EnableAvailabilityZonesForLoadBalancerExceptionsUnion";

export class EnableAvailabilityZonesForLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableAvailabilityZonesForLoadBalancerInput,
      OutputTypesUnion,
      EnableAvailabilityZonesForLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableAvailabilityZonesForLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAvailabilityZonesForLoadBalancerInput,
    EnableAvailabilityZonesForLoadBalancerOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableAvailabilityZonesForLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableAvailabilityZonesForLoadBalancerInput,
    EnableAvailabilityZonesForLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableAvailabilityZonesForLoadBalancerInput,
        EnableAvailabilityZonesForLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
