import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRule } from "../model/operations/CreateRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRuleInput } from "../types/CreateRuleInput";
import { CreateRuleOutput } from "../types/CreateRuleOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/CreateRuleInput";
export * from "../types/CreateRuleOutput";
export * from "../types/CreateRuleExceptionsUnion";

export class CreateRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRuleInput,
      OutputTypesUnion,
      CreateRuleOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRuleInput,
    CreateRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRuleInput, CreateRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRuleInput, CreateRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
