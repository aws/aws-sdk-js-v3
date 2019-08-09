import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAuditStreamConfiguration } from "../model/DescribeAuditStreamConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAuditStreamConfigurationInput } from "../types/DescribeAuditStreamConfigurationInput";
import { DescribeAuditStreamConfigurationOutput } from "../types/DescribeAuditStreamConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeAuditStreamConfigurationInput";
export * from "../types/DescribeAuditStreamConfigurationOutput";
export * from "../types/DescribeAuditStreamConfigurationExceptionsUnion";

export class DescribeAuditStreamConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAuditStreamConfigurationInput,
      OutputTypesUnion,
      DescribeAuditStreamConfigurationOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAuditStreamConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAuditStreamConfigurationInput,
    DescribeAuditStreamConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAuditStreamConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAuditStreamConfigurationInput,
    DescribeAuditStreamConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAuditStreamConfigurationInput,
        DescribeAuditStreamConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
