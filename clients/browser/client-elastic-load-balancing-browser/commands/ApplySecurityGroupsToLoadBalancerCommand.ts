import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ApplySecurityGroupsToLoadBalancer } from "../model/ApplySecurityGroupsToLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplySecurityGroupsToLoadBalancerInput } from "../types/ApplySecurityGroupsToLoadBalancerInput";
import { ApplySecurityGroupsToLoadBalancerOutput } from "../types/ApplySecurityGroupsToLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/ApplySecurityGroupsToLoadBalancerInput";
export * from "../types/ApplySecurityGroupsToLoadBalancerOutput";
export * from "../types/ApplySecurityGroupsToLoadBalancerExceptionsUnion";

export class ApplySecurityGroupsToLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApplySecurityGroupsToLoadBalancerInput,
      OutputTypesUnion,
      ApplySecurityGroupsToLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = ApplySecurityGroupsToLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplySecurityGroupsToLoadBalancerInput,
    ApplySecurityGroupsToLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: ApplySecurityGroupsToLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ApplySecurityGroupsToLoadBalancerInput,
    ApplySecurityGroupsToLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ApplySecurityGroupsToLoadBalancerInput,
        ApplySecurityGroupsToLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
