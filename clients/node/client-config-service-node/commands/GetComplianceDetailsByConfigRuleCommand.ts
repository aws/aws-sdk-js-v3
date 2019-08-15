import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetComplianceDetailsByConfigRule } from "../model/operations/GetComplianceDetailsByConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetComplianceDetailsByConfigRuleInput } from "../types/GetComplianceDetailsByConfigRuleInput";
import { GetComplianceDetailsByConfigRuleOutput } from "../types/GetComplianceDetailsByConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/GetComplianceDetailsByConfigRuleInput";
export * from "../types/GetComplianceDetailsByConfigRuleOutput";
export * from "../types/GetComplianceDetailsByConfigRuleExceptionsUnion";

export class GetComplianceDetailsByConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetComplianceDetailsByConfigRuleInput,
      OutputTypesUnion,
      GetComplianceDetailsByConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetComplianceDetailsByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetComplianceDetailsByConfigRuleInput,
    GetComplianceDetailsByConfigRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetComplianceDetailsByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetComplianceDetailsByConfigRuleInput,
    GetComplianceDetailsByConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetComplianceDetailsByConfigRuleInput,
        GetComplianceDetailsByConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
