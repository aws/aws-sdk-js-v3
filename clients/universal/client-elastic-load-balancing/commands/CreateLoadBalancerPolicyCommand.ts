import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLoadBalancerPolicy } from "../model/CreateLoadBalancerPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoadBalancerPolicyInput } from "../types/CreateLoadBalancerPolicyInput";
import { CreateLoadBalancerPolicyOutput } from "../types/CreateLoadBalancerPolicyOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/CreateLoadBalancerPolicyInput";
export * from "../types/CreateLoadBalancerPolicyOutput";
export * from "../types/CreateLoadBalancerPolicyExceptionsUnion";

export class CreateLoadBalancerPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoadBalancerPolicyInput,
      OutputTypesUnion,
      CreateLoadBalancerPolicyOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateLoadBalancerPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoadBalancerPolicyInput,
    CreateLoadBalancerPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateLoadBalancerPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoadBalancerPolicyInput,
    CreateLoadBalancerPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
