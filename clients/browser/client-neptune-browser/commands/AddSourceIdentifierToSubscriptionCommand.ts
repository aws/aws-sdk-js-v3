import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddSourceIdentifierToSubscription } from "../model/operations/AddSourceIdentifierToSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddSourceIdentifierToSubscriptionInput } from "../types/AddSourceIdentifierToSubscriptionInput";
import { AddSourceIdentifierToSubscriptionOutput } from "../types/AddSourceIdentifierToSubscriptionOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/AddSourceIdentifierToSubscriptionInput";
export * from "../types/AddSourceIdentifierToSubscriptionOutput";
export * from "../types/AddSourceIdentifierToSubscriptionExceptionsUnion";

export class AddSourceIdentifierToSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddSourceIdentifierToSubscriptionInput,
      OutputTypesUnion,
      AddSourceIdentifierToSubscriptionOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = AddSourceIdentifierToSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddSourceIdentifierToSubscriptionInput,
    AddSourceIdentifierToSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: AddSourceIdentifierToSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddSourceIdentifierToSubscriptionInput,
    AddSourceIdentifierToSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddSourceIdentifierToSubscriptionInput,
        AddSourceIdentifierToSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
