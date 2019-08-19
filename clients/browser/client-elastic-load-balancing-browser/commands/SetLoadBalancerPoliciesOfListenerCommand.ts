import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLoadBalancerPoliciesOfListener } from "../model/operations/SetLoadBalancerPoliciesOfListener";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLoadBalancerPoliciesOfListenerInput } from "../types/SetLoadBalancerPoliciesOfListenerInput";
import { SetLoadBalancerPoliciesOfListenerOutput } from "../types/SetLoadBalancerPoliciesOfListenerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/SetLoadBalancerPoliciesOfListenerInput";
export * from "../types/SetLoadBalancerPoliciesOfListenerOutput";
export * from "../types/SetLoadBalancerPoliciesOfListenerExceptionsUnion";

export class SetLoadBalancerPoliciesOfListenerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLoadBalancerPoliciesOfListenerInput,
      OutputTypesUnion,
      SetLoadBalancerPoliciesOfListenerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = SetLoadBalancerPoliciesOfListener;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLoadBalancerPoliciesOfListenerInput,
    SetLoadBalancerPoliciesOfListenerOutput,
    Blob
  >();

  constructor(readonly input: SetLoadBalancerPoliciesOfListenerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetLoadBalancerPoliciesOfListenerInput,
    SetLoadBalancerPoliciesOfListenerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetLoadBalancerPoliciesOfListenerInput,
        SetLoadBalancerPoliciesOfListenerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
