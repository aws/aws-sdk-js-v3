import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEventSubscription } from "../model/DeleteEventSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventSubscriptionInput } from "../types/DeleteEventSubscriptionInput";
import { DeleteEventSubscriptionOutput } from "../types/DeleteEventSubscriptionOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/DeleteEventSubscriptionInput";
export * from "../types/DeleteEventSubscriptionOutput";
export * from "../types/DeleteEventSubscriptionExceptionsUnion";

export class DeleteEventSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventSubscriptionInput,
      OutputTypesUnion,
      DeleteEventSubscriptionOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteEventSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventSubscriptionInput,
    DeleteEventSubscriptionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteEventSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEventSubscriptionInput,
    DeleteEventSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventSubscriptionInput, DeleteEventSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
