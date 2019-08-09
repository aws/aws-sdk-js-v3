import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConfigRuleEvaluationStatus } from "../model/DescribeConfigRuleEvaluationStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConfigRuleEvaluationStatusInput } from "../types/DescribeConfigRuleEvaluationStatusInput";
import { DescribeConfigRuleEvaluationStatusOutput } from "../types/DescribeConfigRuleEvaluationStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeConfigRuleEvaluationStatusInput";
export * from "../types/DescribeConfigRuleEvaluationStatusOutput";
export * from "../types/DescribeConfigRuleEvaluationStatusExceptionsUnion";

export class DescribeConfigRuleEvaluationStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConfigRuleEvaluationStatusInput,
      OutputTypesUnion,
      DescribeConfigRuleEvaluationStatusOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConfigRuleEvaluationStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConfigRuleEvaluationStatusInput,
    DescribeConfigRuleEvaluationStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConfigRuleEvaluationStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConfigRuleEvaluationStatusInput,
    DescribeConfigRuleEvaluationStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConfigRuleEvaluationStatusInput,
        DescribeConfigRuleEvaluationStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
