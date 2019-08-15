import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutions } from "../model/operations/DescribeMaintenanceWindowExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowExecutionsInput } from "../types/DescribeMaintenanceWindowExecutionsInput";
import { DescribeMaintenanceWindowExecutionsOutput } from "../types/DescribeMaintenanceWindowExecutionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowExecutionsInput";
export * from "../types/DescribeMaintenanceWindowExecutionsOutput";
export * from "../types/DescribeMaintenanceWindowExecutionsExceptionsUnion";

export class DescribeMaintenanceWindowExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowExecutionsInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowExecutionsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMaintenanceWindowExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowExecutionsInput,
    DescribeMaintenanceWindowExecutionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeMaintenanceWindowExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowExecutionsInput,
    DescribeMaintenanceWindowExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowExecutionsInput,
        DescribeMaintenanceWindowExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
