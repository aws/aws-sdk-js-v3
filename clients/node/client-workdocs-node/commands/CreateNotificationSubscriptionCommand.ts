import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNotificationSubscription } from "../model/CreateNotificationSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNotificationSubscriptionInput } from "../types/CreateNotificationSubscriptionInput";
import { CreateNotificationSubscriptionOutput } from "../types/CreateNotificationSubscriptionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/CreateNotificationSubscriptionInput";
export * from "../types/CreateNotificationSubscriptionOutput";
export * from "../types/CreateNotificationSubscriptionExceptionsUnion";

export class CreateNotificationSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNotificationSubscriptionInput,
      OutputTypesUnion,
      CreateNotificationSubscriptionOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNotificationSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNotificationSubscriptionInput,
    CreateNotificationSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNotificationSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNotificationSubscriptionInput,
    CreateNotificationSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateNotificationSubscriptionInput,
        CreateNotificationSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
