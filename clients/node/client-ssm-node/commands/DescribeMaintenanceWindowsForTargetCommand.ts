import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMaintenanceWindowsForTarget } from "../model/DescribeMaintenanceWindowsForTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowsForTargetInput } from "../types/DescribeMaintenanceWindowsForTargetInput";
import { DescribeMaintenanceWindowsForTargetOutput } from "../types/DescribeMaintenanceWindowsForTargetOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowsForTargetInput";
export * from "../types/DescribeMaintenanceWindowsForTargetOutput";
export * from "../types/DescribeMaintenanceWindowsForTargetExceptionsUnion";

export class DescribeMaintenanceWindowsForTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowsForTargetInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowsForTargetOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMaintenanceWindowsForTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowsForTargetInput,
    DescribeMaintenanceWindowsForTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMaintenanceWindowsForTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowsForTargetInput,
    DescribeMaintenanceWindowsForTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowsForTargetInput,
        DescribeMaintenanceWindowsForTargetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
