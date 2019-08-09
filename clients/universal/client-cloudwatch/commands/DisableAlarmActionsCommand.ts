import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableAlarmActions } from "../model/DisableAlarmActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableAlarmActionsInput } from "../types/DisableAlarmActionsInput";
import { DisableAlarmActionsOutput } from "../types/DisableAlarmActionsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DisableAlarmActionsInput";
export * from "../types/DisableAlarmActionsOutput";
export * from "../types/DisableAlarmActionsExceptionsUnion";

export class DisableAlarmActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableAlarmActionsInput,
      OutputTypesUnion,
      DisableAlarmActionsOutput,
      CloudWatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DisableAlarmActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableAlarmActionsInput,
    DisableAlarmActionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DisableAlarmActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableAlarmActionsInput,
    DisableAlarmActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableAlarmActionsInput, DisableAlarmActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
