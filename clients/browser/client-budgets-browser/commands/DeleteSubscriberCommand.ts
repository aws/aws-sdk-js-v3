import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSubscriber } from "../model/operations/DeleteSubscriber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubscriberInput } from "../types/DeleteSubscriberInput";
import { DeleteSubscriberOutput } from "../types/DeleteSubscriberOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DeleteSubscriberInput";
export * from "../types/DeleteSubscriberOutput";
export * from "../types/DeleteSubscriberExceptionsUnion";

export class DeleteSubscriberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubscriberInput,
      OutputTypesUnion,
      DeleteSubscriberOutput,
      BudgetsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSubscriber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubscriberInput,
    DeleteSubscriberOutput,
    Blob
  >();

  constructor(readonly input: DeleteSubscriberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSubscriberInput, DeleteSubscriberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSubscriberInput, DeleteSubscriberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
