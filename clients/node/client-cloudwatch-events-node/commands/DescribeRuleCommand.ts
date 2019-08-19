import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRule } from "../model/operations/DescribeRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRuleInput } from "../types/DescribeRuleInput";
import { DescribeRuleOutput } from "../types/DescribeRuleOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DescribeRuleInput";
export * from "../types/DescribeRuleOutput";
export * from "../types/DescribeRuleExceptionsUnion";

export class DescribeRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRuleInput,
      OutputTypesUnion,
      DescribeRuleOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRuleInput,
    DescribeRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRuleInput, DescribeRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRuleInput, DescribeRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
