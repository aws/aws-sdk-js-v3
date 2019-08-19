import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachLoadBalancerTargetGroups } from "../model/operations/DetachLoadBalancerTargetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachLoadBalancerTargetGroupsInput } from "../types/DetachLoadBalancerTargetGroupsInput";
import { DetachLoadBalancerTargetGroupsOutput } from "../types/DetachLoadBalancerTargetGroupsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DetachLoadBalancerTargetGroupsInput";
export * from "../types/DetachLoadBalancerTargetGroupsOutput";
export * from "../types/DetachLoadBalancerTargetGroupsExceptionsUnion";

export class DetachLoadBalancerTargetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachLoadBalancerTargetGroupsInput,
      OutputTypesUnion,
      DetachLoadBalancerTargetGroupsOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DetachLoadBalancerTargetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachLoadBalancerTargetGroupsInput,
    DetachLoadBalancerTargetGroupsOutput,
    Blob
  >();

  constructor(readonly input: DetachLoadBalancerTargetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachLoadBalancerTargetGroupsInput,
    DetachLoadBalancerTargetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DetachLoadBalancerTargetGroupsInput,
        DetachLoadBalancerTargetGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
