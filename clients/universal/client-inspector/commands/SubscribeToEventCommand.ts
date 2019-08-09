import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SubscribeToEvent } from "../model/SubscribeToEvent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubscribeToEventInput } from "../types/SubscribeToEventInput";
import { SubscribeToEventOutput } from "../types/SubscribeToEventOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/SubscribeToEventInput";
export * from "../types/SubscribeToEventOutput";
export * from "../types/SubscribeToEventExceptionsUnion";

export class SubscribeToEventCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubscribeToEventInput,
      OutputTypesUnion,
      SubscribeToEventOutput,
      InspectorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SubscribeToEvent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubscribeToEventInput,
    SubscribeToEventOutput,
    Uint8Array
  >();

  constructor(readonly input: SubscribeToEventInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<SubscribeToEventInput, SubscribeToEventOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SubscribeToEventInput, SubscribeToEventOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
