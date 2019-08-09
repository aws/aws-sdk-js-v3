import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAccountAuditConfiguration } from "../model/DescribeAccountAuditConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAccountAuditConfigurationInput } from "../types/DescribeAccountAuditConfigurationInput";
import { DescribeAccountAuditConfigurationOutput } from "../types/DescribeAccountAuditConfigurationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeAccountAuditConfigurationInput";
export * from "../types/DescribeAccountAuditConfigurationOutput";
export * from "../types/DescribeAccountAuditConfigurationExceptionsUnion";

export class DescribeAccountAuditConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAccountAuditConfigurationInput,
      OutputTypesUnion,
      DescribeAccountAuditConfigurationOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAccountAuditConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAccountAuditConfigurationInput,
    DescribeAccountAuditConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DescribeAccountAuditConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAccountAuditConfigurationInput,
    DescribeAccountAuditConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAccountAuditConfigurationInput,
        DescribeAccountAuditConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
