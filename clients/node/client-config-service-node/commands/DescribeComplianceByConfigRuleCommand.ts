import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeComplianceByConfigRule } from "../model/operations/DescribeComplianceByConfigRule";
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
      _stream.Readable
    > {
  readonly model = DescribeComplianceByConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComplianceByConfigRuleInput,
    DescribeComplianceByConfigRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeComplianceByConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
