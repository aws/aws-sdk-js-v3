import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMetricAlarm } from "../model/PutMetricAlarm";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMetricAlarmInput } from "../types/PutMetricAlarmInput";
import { PutMetricAlarmOutput } from "../types/PutMetricAlarmOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/PutMetricAlarmInput";
export * from "../types/PutMetricAlarmOutput";
export * from "../types/PutMetricAlarmExceptionsUnion";

export class PutMetricAlarmCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMetricAlarmInput,
      OutputTypesUnion,
      PutMetricAlarmOutput,
      CloudWatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutMetricAlarm;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMetricAlarmInput,
    PutMetricAlarmOutput,
    Uint8Array
  >();

  constructor(readonly input: PutMetricAlarmInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<PutMetricAlarmInput, PutMetricAlarmOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMetricAlarmInput, PutMetricAlarmOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
