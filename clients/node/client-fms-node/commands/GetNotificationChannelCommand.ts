import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetNotificationChannel } from "../model/GetNotificationChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNotificationChannelInput } from "../types/GetNotificationChannelInput";
import { GetNotificationChannelOutput } from "../types/GetNotificationChannelOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/GetNotificationChannelInput";
export * from "../types/GetNotificationChannelOutput";
export * from "../types/GetNotificationChannelExceptionsUnion";

export class GetNotificationChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNotificationChannelInput,
      OutputTypesUnion,
      GetNotificationChannelOutput,
      FMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetNotificationChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNotificationChannelInput,
    GetNotificationChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetNotificationChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetNotificationChannelInput,
    GetNotificationChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetNotificationChannelInput, GetNotificationChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
