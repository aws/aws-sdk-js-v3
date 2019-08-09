import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSnapshotSchedule } from "../model/DescribeSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSnapshotScheduleInput } from "../types/DescribeSnapshotScheduleInput";
import { DescribeSnapshotScheduleOutput } from "../types/DescribeSnapshotScheduleOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeSnapshotScheduleInput";
export * from "../types/DescribeSnapshotScheduleOutput";
export * from "../types/DescribeSnapshotScheduleExceptionsUnion";

export class DescribeSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSnapshotScheduleInput,
      OutputTypesUnion,
      DescribeSnapshotScheduleOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSnapshotScheduleInput,
    DescribeSnapshotScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSnapshotScheduleInput,
    DescribeSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSnapshotScheduleInput, DescribeSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
