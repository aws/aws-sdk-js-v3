import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRules } from "../model/operations/DescribeRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRulesInput } from "../types/DescribeRulesInput";
import { DescribeRulesOutput } from "../types/DescribeRulesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeRulesInput";
export * from "../types/DescribeRulesOutput";
export * from "../types/DescribeRulesExceptionsUnion";

export class DescribeRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRulesInput,
      OutputTypesUnion,
      DescribeRulesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRulesInput,
    DescribeRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRulesInput, DescribeRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRulesInput, DescribeRulesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
