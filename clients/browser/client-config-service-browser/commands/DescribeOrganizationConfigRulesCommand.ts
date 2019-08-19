import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOrganizationConfigRules } from "../model/operations/DescribeOrganizationConfigRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrganizationConfigRulesInput } from "../types/DescribeOrganizationConfigRulesInput";
import { DescribeOrganizationConfigRulesOutput } from "../types/DescribeOrganizationConfigRulesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeOrganizationConfigRulesInput";
export * from "../types/DescribeOrganizationConfigRulesOutput";
export * from "../types/DescribeOrganizationConfigRulesExceptionsUnion";

export class DescribeOrganizationConfigRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrganizationConfigRulesInput,
      OutputTypesUnion,
      DescribeOrganizationConfigRulesOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeOrganizationConfigRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrganizationConfigRulesInput,
    DescribeOrganizationConfigRulesOutput,
    Blob
  >();

  constructor(readonly input: DescribeOrganizationConfigRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrganizationConfigRulesInput,
    DescribeOrganizationConfigRulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrganizationConfigRulesInput,
        DescribeOrganizationConfigRulesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
