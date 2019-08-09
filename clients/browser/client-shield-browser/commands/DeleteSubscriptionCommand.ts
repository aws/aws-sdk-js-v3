import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSubscription } from "../model/DeleteSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubscriptionInput } from "../types/DeleteSubscriptionInput";
import { DeleteSubscriptionOutput } from "../types/DeleteSubscriptionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DeleteSubscriptionInput";
export * from "../types/DeleteSubscriptionOutput";
export * from "../types/DeleteSubscriptionExceptionsUnion";

export class DeleteSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubscriptionInput,
      OutputTypesUnion,
      DeleteSubscriptionOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubscriptionInput,
    DeleteSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: DeleteSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSubscriptionInput,
    DeleteSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSubscriptionInput, DeleteSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
