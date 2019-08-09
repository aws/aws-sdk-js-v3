import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEventSubscription } from "../model/CreateEventSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEventSubscriptionInput } from "../types/CreateEventSubscriptionInput";
import { CreateEventSubscriptionOutput } from "../types/CreateEventSubscriptionOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/CreateEventSubscriptionInput";
export * from "../types/CreateEventSubscriptionOutput";
export * from "../types/CreateEventSubscriptionExceptionsUnion";

export class CreateEventSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEventSubscriptionInput,
      OutputTypesUnion,
      CreateEventSubscriptionOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateEventSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEventSubscriptionInput,
    CreateEventSubscriptionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateEventSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEventSubscriptionInput,
    CreateEventSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEventSubscriptionInput, CreateEventSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
