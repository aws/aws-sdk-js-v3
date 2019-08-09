import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceWindowSchedule } from "../model/DescribeMaintenanceWindowSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowScheduleInput } from "../types/DescribeMaintenanceWindowScheduleInput";
import { DescribeMaintenanceWindowScheduleOutput } from "../types/DescribeMaintenanceWindowScheduleOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowScheduleInput";
export * from "../types/DescribeMaintenanceWindowScheduleOutput";
export * from "../types/DescribeMaintenanceWindowScheduleExceptionsUnion";

export class DescribeMaintenanceWindowScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowScheduleInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowScheduleOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMaintenanceWindowSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowScheduleInput,
    DescribeMaintenanceWindowScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeMaintenanceWindowScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowScheduleInput,
    DescribeMaintenanceWindowScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowScheduleInput,
        DescribeMaintenanceWindowScheduleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
