import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyLoadBalancerAttributes } from "../model/operations/ModifyLoadBalancerAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyLoadBalancerAttributesInput } from "../types/ModifyLoadBalancerAttributesInput";
import { ModifyLoadBalancerAttributesOutput } from "../types/ModifyLoadBalancerAttributesOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/ModifyLoadBalancerAttributesInput";
export * from "../types/ModifyLoadBalancerAttributesOutput";
export * from "../types/ModifyLoadBalancerAttributesExceptionsUnion";

export class ModifyLoadBalancerAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyLoadBalancerAttributesInput,
      OutputTypesUnion,
      ModifyLoadBalancerAttributesOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyLoadBalancerAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyLoadBalancerAttributesInput,
    ModifyLoadBalancerAttributesOutput,
    Blob
  >();

  constructor(readonly input: ModifyLoadBalancerAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyLoadBalancerAttributesInput,
    ModifyLoadBalancerAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyLoadBalancerAttributesInput,
        ModifyLoadBalancerAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
