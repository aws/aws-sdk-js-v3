import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateNotification } from "../model/UpdateNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNotificationInput } from "../types/UpdateNotificationInput";
import { UpdateNotificationOutput } from "../types/UpdateNotificationOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/UpdateNotificationInput";
export * from "../types/UpdateNotificationOutput";
export * from "../types/UpdateNotificationExceptionsUnion";

export class UpdateNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNotificationInput,
      OutputTypesUnion,
      UpdateNotificationOutput,
      BudgetsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNotificationInput,
    UpdateNotificationOutput,
    Blob
  >();

  constructor(readonly input: UpdateNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNotificationInput,
    UpdateNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateNotificationInput, UpdateNotificationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
