import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutNotificationChannel } from "../model/PutNotificationChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutNotificationChannelInput } from "../types/PutNotificationChannelInput";
import { PutNotificationChannelOutput } from "../types/PutNotificationChannelOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/PutNotificationChannelInput";
export * from "../types/PutNotificationChannelOutput";
export * from "../types/PutNotificationChannelExceptionsUnion";

export class PutNotificationChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutNotificationChannelInput,
      OutputTypesUnion,
      PutNotificationChannelOutput,
      FMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutNotificationChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutNotificationChannelInput,
    PutNotificationChannelOutput,
    Uint8Array
  >();

  constructor(readonly input: PutNotificationChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutNotificationChannelInput,
    PutNotificationChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutNotificationChannelInput, PutNotificationChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
