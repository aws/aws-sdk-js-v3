import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowExecutionTasks } from "../model/DescribeMaintenanceWindowExecutionTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowExecutionTasksInput } from "../types/DescribeMaintenanceWindowExecutionTasksInput";
import { DescribeMaintenanceWindowExecutionTasksOutput } from "../types/DescribeMaintenanceWindowExecutionTasksOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowExecutionTasksInput";
export * from "../types/DescribeMaintenanceWindowExecutionTasksOutput";
export * from "../types/DescribeMaintenanceWindowExecutionTasksExceptionsUnion";

export class DescribeMaintenanceWindowExecutionTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowExecutionTasksInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowExecutionTasksOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMaintenanceWindowExecutionTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowExecutionTasksInput,
    DescribeMaintenanceWindowExecutionTasksOutput,
    Blob
  >();

  constructor(readonly input: DescribeMaintenanceWindowExecutionTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowExecutionTasksInput,
    DescribeMaintenanceWindowExecutionTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowExecutionTasksInput,
        DescribeMaintenanceWindowExecutionTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
