import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachInstancesFromLoadBalancer } from "../model/DetachInstancesFromLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachInstancesFromLoadBalancerInput } from "../types/DetachInstancesFromLoadBalancerInput";
import { DetachInstancesFromLoadBalancerOutput } from "../types/DetachInstancesFromLoadBalancerOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DetachInstancesFromLoadBalancerInput";
export * from "../types/DetachInstancesFromLoadBalancerOutput";
export * from "../types/DetachInstancesFromLoadBalancerExceptionsUnion";

export class DetachInstancesFromLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachInstancesFromLoadBalancerInput,
      OutputTypesUnion,
      DetachInstancesFromLoadBalancerOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = DetachInstancesFromLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachInstancesFromLoadBalancerInput,
    DetachInstancesFromLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: DetachInstancesFromLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachInstancesFromLoadBalancerInput,
    DetachInstancesFromLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DetachInstancesFromLoadBalancerInput,
        DetachInstancesFromLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
