import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLoadBalancerPoliciesForBackendServer } from "../model/SetLoadBalancerPoliciesForBackendServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLoadBalancerPoliciesForBackendServerInput } from "../types/SetLoadBalancerPoliciesForBackendServerInput";
import { SetLoadBalancerPoliciesForBackendServerOutput } from "../types/SetLoadBalancerPoliciesForBackendServerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/SetLoadBalancerPoliciesForBackendServerInput";
export * from "../types/SetLoadBalancerPoliciesForBackendServerOutput";
export * from "../types/SetLoadBalancerPoliciesForBackendServerExceptionsUnion";

export class SetLoadBalancerPoliciesForBackendServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLoadBalancerPoliciesForBackendServerInput,
      OutputTypesUnion,
      SetLoadBalancerPoliciesForBackendServerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = SetLoadBalancerPoliciesForBackendServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLoadBalancerPoliciesForBackendServerInput,
    SetLoadBalancerPoliciesForBackendServerOutput,
    Blob
  >();

  constructor(readonly input: SetLoadBalancerPoliciesForBackendServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetLoadBalancerPoliciesForBackendServerInput,
    SetLoadBalancerPoliciesForBackendServerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetLoadBalancerPoliciesForBackendServerInput,
        SetLoadBalancerPoliciesForBackendServerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
