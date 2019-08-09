import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachLoadBalancerFromSubnets } from "../model/DetachLoadBalancerFromSubnets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachLoadBalancerFromSubnetsInput } from "../types/DetachLoadBalancerFromSubnetsInput";
import { DetachLoadBalancerFromSubnetsOutput } from "../types/DetachLoadBalancerFromSubnetsOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DetachLoadBalancerFromSubnetsInput";
export * from "../types/DetachLoadBalancerFromSubnetsOutput";
export * from "../types/DetachLoadBalancerFromSubnetsExceptionsUnion";

export class DetachLoadBalancerFromSubnetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachLoadBalancerFromSubnetsInput,
      OutputTypesUnion,
      DetachLoadBalancerFromSubnetsOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = DetachLoadBalancerFromSubnets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachLoadBalancerFromSubnetsInput,
    DetachLoadBalancerFromSubnetsOutput,
    Blob
  >();

  constructor(readonly input: DetachLoadBalancerFromSubnetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachLoadBalancerFromSubnetsInput,
    DetachLoadBalancerFromSubnetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DetachLoadBalancerFromSubnetsInput,
        DetachLoadBalancerFromSubnetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
