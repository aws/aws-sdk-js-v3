import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOrganizationConfigRuleStatuses } from "../model/operations/DescribeOrganizationConfigRuleStatuses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrganizationConfigRuleStatusesInput } from "../types/DescribeOrganizationConfigRuleStatusesInput";
import { DescribeOrganizationConfigRuleStatusesOutput } from "../types/DescribeOrganizationConfigRuleStatusesOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeOrganizationConfigRuleStatusesInput";
export * from "../types/DescribeOrganizationConfigRuleStatusesOutput";
export * from "../types/DescribeOrganizationConfigRuleStatusesExceptionsUnion";

export class DescribeOrganizationConfigRuleStatusesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrganizationConfigRuleStatusesInput,
      OutputTypesUnion,
      DescribeOrganizationConfigRuleStatusesOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOrganizationConfigRuleStatuses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrganizationConfigRuleStatusesInput,
    DescribeOrganizationConfigRuleStatusesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOrganizationConfigRuleStatusesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrganizationConfigRuleStatusesInput,
    DescribeOrganizationConfigRuleStatusesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrganizationConfigRuleStatusesInput,
        DescribeOrganizationConfigRuleStatusesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
