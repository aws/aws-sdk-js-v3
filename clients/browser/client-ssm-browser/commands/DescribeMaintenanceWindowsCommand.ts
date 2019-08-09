import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindows } from "../model/DescribeMaintenanceWindows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowsInput } from "../types/DescribeMaintenanceWindowsInput";
import { DescribeMaintenanceWindowsOutput } from "../types/DescribeMaintenanceWindowsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowsInput";
export * from "../types/DescribeMaintenanceWindowsOutput";
export * from "../types/DescribeMaintenanceWindowsExceptionsUnion";

export class DescribeMaintenanceWindowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowsInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMaintenanceWindows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowsInput,
    DescribeMaintenanceWindowsOutput,
    Blob
  >();

  constructor(readonly input: DescribeMaintenanceWindowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowsInput,
    DescribeMaintenanceWindowsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowsInput,
        DescribeMaintenanceWindowsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
