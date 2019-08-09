import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowTasks } from "../model/DescribeMaintenanceWindowTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowTasksInput } from "../types/DescribeMaintenanceWindowTasksInput";
import { DescribeMaintenanceWindowTasksOutput } from "../types/DescribeMaintenanceWindowTasksOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowTasksInput";
export * from "../types/DescribeMaintenanceWindowTasksOutput";
export * from "../types/DescribeMaintenanceWindowTasksExceptionsUnion";

export class DescribeMaintenanceWindowTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowTasksInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowTasksOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMaintenanceWindowTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowTasksInput,
    DescribeMaintenanceWindowTasksOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeMaintenanceWindowTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowTasksInput,
    DescribeMaintenanceWindowTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowTasksInput,
        DescribeMaintenanceWindowTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
