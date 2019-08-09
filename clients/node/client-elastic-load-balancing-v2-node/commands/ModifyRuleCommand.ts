import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyRule } from "../model/ModifyRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyRuleInput } from "../types/ModifyRuleInput";
import { ModifyRuleOutput } from "../types/ModifyRuleOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/ModifyRuleInput";
export * from "../types/ModifyRuleOutput";
export * from "../types/ModifyRuleExceptionsUnion";

export class ModifyRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyRuleInput,
      OutputTypesUnion,
      ModifyRuleOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyRuleInput,
    ModifyRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyRuleInput, ModifyRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyRuleInput, ModifyRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
