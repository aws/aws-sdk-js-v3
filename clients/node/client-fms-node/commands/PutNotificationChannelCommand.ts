import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = PutNotificationChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutNotificationChannelInput,
    PutNotificationChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutNotificationChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
