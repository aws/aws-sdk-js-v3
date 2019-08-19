import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMaintenanceStartTime } from "../model/operations/DescribeMaintenanceStartTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceStartTimeInput } from "../types/DescribeMaintenanceStartTimeInput";
import { DescribeMaintenanceStartTimeOutput } from "../types/DescribeMaintenanceStartTimeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeMaintenanceStartTimeInput";
export * from "../types/DescribeMaintenanceStartTimeOutput";
export * from "../types/DescribeMaintenanceStartTimeExceptionsUnion";

export class DescribeMaintenanceStartTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceStartTimeInput,
      OutputTypesUnion,
      DescribeMaintenanceStartTimeOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeMaintenanceStartTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceStartTimeInput,
    DescribeMaintenanceStartTimeOutput,
    Blob
  >();

  constructor(readonly input: DescribeMaintenanceStartTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceStartTimeInput,
    DescribeMaintenanceStartTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceStartTimeInput,
        DescribeMaintenanceStartTimeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
