import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyClusterSnapshotSchedule } from "../model/ModifyClusterSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterSnapshotScheduleInput } from "../types/ModifyClusterSnapshotScheduleInput";
import { ModifyClusterSnapshotScheduleOutput } from "../types/ModifyClusterSnapshotScheduleOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterSnapshotScheduleInput";
export * from "../types/ModifyClusterSnapshotScheduleOutput";
export * from "../types/ModifyClusterSnapshotScheduleExceptionsUnion";

export class ModifyClusterSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterSnapshotScheduleInput,
      OutputTypesUnion,
      ModifyClusterSnapshotScheduleOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyClusterSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterSnapshotScheduleInput,
    ModifyClusterSnapshotScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterSnapshotScheduleInput,
    ModifyClusterSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyClusterSnapshotScheduleInput,
        ModifyClusterSnapshotScheduleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
