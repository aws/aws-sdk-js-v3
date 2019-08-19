import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifySnapshotSchedule } from "../model/operations/ModifySnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifySnapshotScheduleInput } from "../types/ModifySnapshotScheduleInput";
import { ModifySnapshotScheduleOutput } from "../types/ModifySnapshotScheduleOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifySnapshotScheduleInput";
export * from "../types/ModifySnapshotScheduleOutput";
export * from "../types/ModifySnapshotScheduleExceptionsUnion";

export class ModifySnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifySnapshotScheduleInput,
      OutputTypesUnion,
      ModifySnapshotScheduleOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifySnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifySnapshotScheduleInput,
    ModifySnapshotScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifySnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifySnapshotScheduleInput,
    ModifySnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifySnapshotScheduleInput, ModifySnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
