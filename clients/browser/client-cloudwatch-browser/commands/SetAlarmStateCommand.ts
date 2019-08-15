import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetAlarmState } from "../model/operations/SetAlarmState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetAlarmStateInput } from "../types/SetAlarmStateInput";
import { SetAlarmStateOutput } from "../types/SetAlarmStateOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/SetAlarmStateInput";
export * from "../types/SetAlarmStateOutput";
export * from "../types/SetAlarmStateExceptionsUnion";

export class SetAlarmStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetAlarmStateInput,
      OutputTypesUnion,
      SetAlarmStateOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = SetAlarmState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetAlarmStateInput,
    SetAlarmStateOutput,
    Blob
  >();

  constructor(readonly input: SetAlarmStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<SetAlarmStateInput, SetAlarmStateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetAlarmStateInput, SetAlarmStateOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
