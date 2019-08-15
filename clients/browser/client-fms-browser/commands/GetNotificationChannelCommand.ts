import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetNotificationChannel } from "../model/operations/GetNotificationChannel";
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
      Blob
    > {
  readonly model = GetNotificationChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNotificationChannelInput,
    GetNotificationChannelOutput,
    Blob
  >();

  constructor(readonly input: GetNotificationChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
