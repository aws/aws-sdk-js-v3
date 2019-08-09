import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSchedule } from "../model/DeleteSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScheduleInput } from "../types/DeleteScheduleInput";
import { DeleteScheduleOutput } from "../types/DeleteScheduleOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DeleteScheduleInput";
export * from "../types/DeleteScheduleOutput";
export * from "../types/DeleteScheduleExceptionsUnion";

export class DeleteScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScheduleInput,
      OutputTypesUnion,
      DeleteScheduleOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScheduleInput,
    DeleteScheduleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteScheduleInput, DeleteScheduleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScheduleInput, DeleteScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
