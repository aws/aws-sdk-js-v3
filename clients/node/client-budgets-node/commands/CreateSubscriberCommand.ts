import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSubscriber } from "../model/operations/CreateSubscriber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSubscriberInput } from "../types/CreateSubscriberInput";
import { CreateSubscriberOutput } from "../types/CreateSubscriberOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/CreateSubscriberInput";
export * from "../types/CreateSubscriberOutput";
export * from "../types/CreateSubscriberExceptionsUnion";

export class CreateSubscriberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSubscriberInput,
      OutputTypesUnion,
      CreateSubscriberOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSubscriber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSubscriberInput,
    CreateSubscriberOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSubscriberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateSubscriberInput, CreateSubscriberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSubscriberInput, CreateSubscriberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
