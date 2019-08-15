import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAlarms } from "../model/operations/DeleteAlarms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAlarmsInput } from "../types/DeleteAlarmsInput";
import { DeleteAlarmsOutput } from "../types/DeleteAlarmsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DeleteAlarmsInput";
export * from "../types/DeleteAlarmsOutput";
export * from "../types/DeleteAlarmsExceptionsUnion";

export class DeleteAlarmsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAlarmsInput,
      OutputTypesUnion,
      DeleteAlarmsOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAlarms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAlarmsInput,
    DeleteAlarmsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAlarmsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAlarmsInput, DeleteAlarmsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAlarmsInput, DeleteAlarmsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
