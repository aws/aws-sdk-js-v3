import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNotification } from "../model/CreateNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNotificationInput } from "../types/CreateNotificationInput";
import { CreateNotificationOutput } from "../types/CreateNotificationOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/CreateNotificationInput";
export * from "../types/CreateNotificationOutput";
export * from "../types/CreateNotificationExceptionsUnion";

export class CreateNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNotificationInput,
      OutputTypesUnion,
      CreateNotificationOutput,
      BudgetsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNotificationInput,
    CreateNotificationOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNotificationInput,
    CreateNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNotificationInput, CreateNotificationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
