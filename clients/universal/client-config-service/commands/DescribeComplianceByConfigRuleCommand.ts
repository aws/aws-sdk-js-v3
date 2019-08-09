import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeComplianceByConfigRule } from "../model/DescribeComplianceByConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComplianceByConfigRuleInput } from "../types/DescribeComplianceByConfigRuleInput";
import { DescribeComplianceByConfigRuleOutput } from "../types/DescribeComplianceByConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeComplianceByConfigRuleInput";
export * from "../types/DescribeComplianceByConfigRuleOutput";
export * from "../types/DescribeComplianceByConfigRuleExceptionsUnion";

export class DescribeComplianceByConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComplianceByConfigRuleInput,
      OutputTypesUnion,
      DescribeComplianceByConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeComplianceByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComplianceByConfigRuleInput,
    DescribeComplianceByConfigRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeComplianceByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeComplianceByConfigRuleInput,
    DescribeComplianceByConfigRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeComplianceByConfigRuleInput,
        DescribeComplianceByConfigRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
