import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNotification } from "../model/operations/DeleteNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotificationInput } from "../types/DeleteNotificationInput";
import { DeleteNotificationOutput } from "../types/DeleteNotificationOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DeleteNotificationInput";
export * from "../types/DeleteNotificationOutput";
export * from "../types/DeleteNotificationExceptionsUnion";

export class DeleteNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotificationInput,
      OutputTypesUnion,
      DeleteNotificationOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotificationInput,
    DeleteNotificationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotificationInput,
    DeleteNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNotificationInput, DeleteNotificationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
