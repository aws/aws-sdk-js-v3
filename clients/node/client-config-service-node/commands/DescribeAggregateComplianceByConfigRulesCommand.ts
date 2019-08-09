import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAggregateComplianceByConfigRules } from "../model/DescribeAggregateComplianceByConfigRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAggregateComplianceByConfigRulesInput } from "../types/DescribeAggregateComplianceByConfigRulesInput";
import { DescribeAggregateComplianceByConfigRulesOutput } from "../types/DescribeAggregateComplianceByConfigRulesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeAggregateComplianceByConfigRulesInput";
export * from "../types/DescribeAggregateComplianceByConfigRulesOutput";
export * from "../types/DescribeAggregateComplianceByConfigRulesExceptionsUnion";

export class DescribeAggregateComplianceByConfigRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAggregateComplianceByConfigRulesInput,
      OutputTypesUnion,
      DescribeAggregateComplianceByConfigRulesOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAggregateComplianceByConfigRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAggregateComplianceByConfigRulesInput,
    DescribeAggregateComplianceByConfigRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAggregateComplianceByConfigRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAggregateComplianceByConfigRulesInput,
    DescribeAggregateComplianceByConfigRulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAggregateComplianceByConfigRulesInput,
        DescribeAggregateComplianceByConfigRulesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
