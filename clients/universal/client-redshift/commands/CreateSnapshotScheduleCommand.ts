import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateSnapshotSchedule } from "../model/CreateSnapshotSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSnapshotScheduleInput } from "../types/CreateSnapshotScheduleInput";
import { CreateSnapshotScheduleOutput } from "../types/CreateSnapshotScheduleOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CreateSnapshotScheduleInput";
export * from "../types/CreateSnapshotScheduleOutput";
export * from "../types/CreateSnapshotScheduleExceptionsUnion";

export class CreateSnapshotScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSnapshotScheduleInput,
      OutputTypesUnion,
      CreateSnapshotScheduleOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateSnapshotSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSnapshotScheduleInput,
    CreateSnapshotScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateSnapshotScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSnapshotScheduleInput,
    CreateSnapshotScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSnapshotScheduleInput, CreateSnapshotScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
