import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAggregateComplianceDetailsByConfigRule } from "../model/GetAggregateComplianceDetailsByConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAggregateComplianceDetailsByConfigRuleInput } from "../types/GetAggregateComplianceDetailsByConfigRuleInput";
import { GetAggregateComplianceDetailsByConfigRuleOutput } from "../types/GetAggregateComplianceDetailsByConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleInput";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleOutput";
export * from "../types/GetAggregateComplianceDetailsByConfigRuleExceptionsUnion";

export class GetAggregateComplianceDetailsByConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAggregateComplianceDetailsByConfigRuleInput,
      OutputTypesUnion,
      GetAggregateComplianceDetailsByConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAggregateComplianceDetailsByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAggregateComplianceDetailsByConfigRuleInput,
    GetAggregateComplianceDetailsByConfigRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAggregateComplianceDetailsByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAggregateComplianceDetailsByConfigRuleInput,
    GetAggregateComplianceDetailsByConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAggregateComplianceDetailsByConfigRuleInput,
        GetAggregateComplianceDetailsByConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
