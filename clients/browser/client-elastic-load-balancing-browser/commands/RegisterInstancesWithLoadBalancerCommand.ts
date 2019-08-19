import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterInstancesWithLoadBalancer } from "../model/operations/RegisterInstancesWithLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterInstancesWithLoadBalancerInput } from "../types/RegisterInstancesWithLoadBalancerInput";
import { RegisterInstancesWithLoadBalancerOutput } from "../types/RegisterInstancesWithLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/RegisterInstancesWithLoadBalancerInput";
export * from "../types/RegisterInstancesWithLoadBalancerOutput";
export * from "../types/RegisterInstancesWithLoadBalancerExceptionsUnion";

export class RegisterInstancesWithLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterInstancesWithLoadBalancerInput,
      OutputTypesUnion,
      RegisterInstancesWithLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterInstancesWithLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterInstancesWithLoadBalancerInput,
    RegisterInstancesWithLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: RegisterInstancesWithLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterInstancesWithLoadBalancerInput,
    RegisterInstancesWithLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RegisterInstancesWithLoadBalancerInput,
        RegisterInstancesWithLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
