import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNotificationChannel } from "../model/DeleteNotificationChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotificationChannelInput } from "../types/DeleteNotificationChannelInput";
import { DeleteNotificationChannelOutput } from "../types/DeleteNotificationChannelOutput";
import { FMSResolvedConfiguration } from "../FMSConfiguration";
export * from "../types/DeleteNotificationChannelInput";
export * from "../types/DeleteNotificationChannelOutput";
export * from "../types/DeleteNotificationChannelExceptionsUnion";

export class DeleteNotificationChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotificationChannelInput,
      OutputTypesUnion,
      DeleteNotificationChannelOutput,
      FMSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteNotificationChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotificationChannelInput,
    DeleteNotificationChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteNotificationChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: FMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotificationChannelInput,
    DeleteNotificationChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNotificationChannelInput, DeleteNotificationChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
