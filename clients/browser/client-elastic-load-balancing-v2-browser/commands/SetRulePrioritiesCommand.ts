import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetRulePriorities } from "../model/SetRulePriorities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetRulePrioritiesInput } from "../types/SetRulePrioritiesInput";
import { SetRulePrioritiesOutput } from "../types/SetRulePrioritiesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/SetRulePrioritiesInput";
export * from "../types/SetRulePrioritiesOutput";
export * from "../types/SetRulePrioritiesExceptionsUnion";

export class SetRulePrioritiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetRulePrioritiesInput,
      OutputTypesUnion,
      SetRulePrioritiesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = SetRulePriorities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetRulePrioritiesInput,
    SetRulePrioritiesOutput,
    Blob
  >();

  constructor(readonly input: SetRulePrioritiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<SetRulePrioritiesInput, SetRulePrioritiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetRulePrioritiesInput, SetRulePrioritiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
