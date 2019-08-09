import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSnapshotSchedule } from "../model/DeleteSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSnapshotScheduleInput } from "../types/DeleteSnapshotScheduleInput";
import { DeleteSnapshotScheduleOutput } from "../types/DeleteSnapshotScheduleOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteSnapshotScheduleInput";
export * from "../types/DeleteSnapshotScheduleOutput";
export * from "../types/DeleteSnapshotScheduleExceptionsUnion";

export class DeleteSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSnapshotScheduleInput,
      OutputTypesUnion,
      DeleteSnapshotScheduleOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSnapshotScheduleInput,
    DeleteSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
