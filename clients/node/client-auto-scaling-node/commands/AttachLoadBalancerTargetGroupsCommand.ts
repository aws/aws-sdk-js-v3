import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachLoadBalancerTargetGroups } from "../model/AttachLoadBalancerTargetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachLoadBalancerTargetGroupsInput } from "../types/AttachLoadBalancerTargetGroupsInput";
import { AttachLoadBalancerTargetGroupsOutput } from "../types/AttachLoadBalancerTargetGroupsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/AttachLoadBalancerTargetGroupsInput";
export * from "../types/AttachLoadBalancerTargetGroupsOutput";
export * from "../types/AttachLoadBalancerTargetGroupsExceptionsUnion";

export class AttachLoadBalancerTargetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachLoadBalancerTargetGroupsInput,
      OutputTypesUnion,
      AttachLoadBalancerTargetGroupsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachLoadBalancerTargetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachLoadBalancerTargetGroupsInput,
    AttachLoadBalancerTargetGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachLoadBalancerTargetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachLoadBalancerTargetGroupsInput,
    AttachLoadBalancerTargetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AttachLoadBalancerTargetGroupsInput,
        AttachLoadBalancerTargetGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
