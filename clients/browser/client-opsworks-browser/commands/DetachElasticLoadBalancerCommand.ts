import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachElasticLoadBalancer } from "../model/operations/DetachElasticLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachElasticLoadBalancerInput } from "../types/DetachElasticLoadBalancerInput";
import { DetachElasticLoadBalancerOutput } from "../types/DetachElasticLoadBalancerOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DetachElasticLoadBalancerInput";
export * from "../types/DetachElasticLoadBalancerOutput";
export * from "../types/DetachElasticLoadBalancerExceptionsUnion";

export class DetachElasticLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachElasticLoadBalancerInput,
      OutputTypesUnion,
      DetachElasticLoadBalancerOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DetachElasticLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachElasticLoadBalancerInput,
    DetachElasticLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: DetachElasticLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachElasticLoadBalancerInput,
    DetachElasticLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachElasticLoadBalancerInput, DetachElasticLoadBalancerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
