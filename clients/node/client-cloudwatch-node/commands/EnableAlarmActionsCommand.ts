import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableAlarmActions } from "../model/operations/EnableAlarmActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableAlarmActionsInput } from "../types/EnableAlarmActionsInput";
import { EnableAlarmActionsOutput } from "../types/EnableAlarmActionsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/EnableAlarmActionsInput";
export * from "../types/EnableAlarmActionsOutput";
export * from "../types/EnableAlarmActionsExceptionsUnion";

export class EnableAlarmActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableAlarmActionsInput,
      OutputTypesUnion,
      EnableAlarmActionsOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableAlarmActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAlarmActionsInput,
    EnableAlarmActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableAlarmActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableAlarmActionsInput,
    EnableAlarmActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableAlarmActionsInput, EnableAlarmActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
