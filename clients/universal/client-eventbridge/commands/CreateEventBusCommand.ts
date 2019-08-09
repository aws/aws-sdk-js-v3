import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEventBus } from "../model/CreateEventBus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEventBusInput } from "../types/CreateEventBusInput";
import { CreateEventBusOutput } from "../types/CreateEventBusOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/CreateEventBusInput";
export * from "../types/CreateEventBusOutput";
export * from "../types/CreateEventBusExceptionsUnion";

export class CreateEventBusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEventBusInput,
      OutputTypesUnion,
      CreateEventBusOutput,
      EventBridgeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateEventBus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEventBusInput,
    CreateEventBusOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateEventBusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateEventBusInput, CreateEventBusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEventBusInput, CreateEventBusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
