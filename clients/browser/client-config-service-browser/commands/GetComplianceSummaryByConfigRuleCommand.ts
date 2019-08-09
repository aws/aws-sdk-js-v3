import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetComplianceSummaryByConfigRule } from "../model/GetComplianceSummaryByConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetComplianceSummaryByConfigRuleInput } from "../types/GetComplianceSummaryByConfigRuleInput";
import { GetComplianceSummaryByConfigRuleOutput } from "../types/GetComplianceSummaryByConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetComplianceSummaryByConfigRuleInput";
export * from "../types/GetComplianceSummaryByConfigRuleOutput";
export * from "../types/GetComplianceSummaryByConfigRuleExceptionsUnion";

export class GetComplianceSummaryByConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetComplianceSummaryByConfigRuleInput,
      OutputTypesUnion,
      GetComplianceSummaryByConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetComplianceSummaryByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetComplianceSummaryByConfigRuleInput,
    GetComplianceSummaryByConfigRuleOutput,
    Blob
  >();

  constructor(readonly input: GetComplianceSummaryByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetComplianceSummaryByConfigRuleInput,
    GetComplianceSummaryByConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetComplianceSummaryByConfigRuleInput,
        GetComplianceSummaryByConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
