import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSubscription } from "../model/CreateSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubscriptionInput } from "../types/CreateSubscriptionInput";
import { CreateSubscriptionOutput } from "../types/CreateSubscriptionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/CreateSubscriptionInput";
export * from "../types/CreateSubscriptionOutput";
export * from "../types/CreateSubscriptionExceptionsUnion";

export class CreateSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubscriptionInput,
      OutputTypesUnion,
      CreateSubscriptionOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubscriptionInput,
    CreateSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSubscriptionInput,
    CreateSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSubscriptionInput, CreateSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
