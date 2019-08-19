import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAggregateConfigRuleComplianceSummary } from "../model/operations/GetAggregateConfigRuleComplianceSummary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAggregateConfigRuleComplianceSummaryInput } from "../types/GetAggregateConfigRuleComplianceSummaryInput";
import { GetAggregateConfigRuleComplianceSummaryOutput } from "../types/GetAggregateConfigRuleComplianceSummaryOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetAggregateConfigRuleComplianceSummaryInput";
export * from "../types/GetAggregateConfigRuleComplianceSummaryOutput";
export * from "../types/GetAggregateConfigRuleComplianceSummaryExceptionsUnion";

export class GetAggregateConfigRuleComplianceSummaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAggregateConfigRuleComplianceSummaryInput,
      OutputTypesUnion,
      GetAggregateConfigRuleComplianceSummaryOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAggregateConfigRuleComplianceSummary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateConfigRuleComplianceSummaryInput,
    GetAggregateConfigRuleComplianceSummaryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAggregateConfigRuleComplianceSummaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAggregateConfigRuleComplianceSummaryInput,
    GetAggregateConfigRuleComplianceSummaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAggregateConfigRuleComplianceSummaryInput,
        GetAggregateConfigRuleComplianceSummaryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
