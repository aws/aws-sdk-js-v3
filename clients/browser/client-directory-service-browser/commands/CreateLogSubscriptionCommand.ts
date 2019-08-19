import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLogSubscription } from "../model/operations/CreateLogSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLogSubscriptionInput } from "../types/CreateLogSubscriptionInput";
import { CreateLogSubscriptionOutput } from "../types/CreateLogSubscriptionOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/CreateLogSubscriptionInput";
export * from "../types/CreateLogSubscriptionOutput";
export * from "../types/CreateLogSubscriptionExceptionsUnion";

export class CreateLogSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLogSubscriptionInput,
      OutputTypesUnion,
      CreateLogSubscriptionOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLogSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLogSubscriptionInput,
    CreateLogSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: CreateLogSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLogSubscriptionInput,
    CreateLogSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLogSubscriptionInput, CreateLogSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
