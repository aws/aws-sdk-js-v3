import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ScheduleRun } from "../model/ScheduleRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ScheduleRunInput } from "../types/ScheduleRunInput";
import { ScheduleRunOutput } from "../types/ScheduleRunOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ScheduleRunInput";
export * from "../types/ScheduleRunOutput";
export * from "../types/ScheduleRunExceptionsUnion";

export class ScheduleRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ScheduleRunInput,
      OutputTypesUnion,
      ScheduleRunOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ScheduleRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ScheduleRunInput,
    ScheduleRunOutput,
    Blob
  >();

  constructor(readonly input: ScheduleRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ScheduleRunInput, ScheduleRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ScheduleRunInput, ScheduleRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
