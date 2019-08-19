import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchUpdateSchedule } from "../model/operations/BatchUpdateSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchUpdateScheduleInput } from "../types/BatchUpdateScheduleInput";
import { BatchUpdateScheduleOutput } from "../types/BatchUpdateScheduleOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/BatchUpdateScheduleInput";
export * from "../types/BatchUpdateScheduleOutput";
export * from "../types/BatchUpdateScheduleExceptionsUnion";

export class BatchUpdateScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchUpdateScheduleInput,
      OutputTypesUnion,
      BatchUpdateScheduleOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchUpdateSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchUpdateScheduleInput,
    BatchUpdateScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchUpdateScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchUpdateScheduleInput,
    BatchUpdateScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchUpdateScheduleInput, BatchUpdateScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
