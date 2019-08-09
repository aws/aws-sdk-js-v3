import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEventBus } from "../model/DeleteEventBus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventBusInput } from "../types/DeleteEventBusInput";
import { DeleteEventBusOutput } from "../types/DeleteEventBusOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/DeleteEventBusInput";
export * from "../types/DeleteEventBusOutput";
export * from "../types/DeleteEventBusExceptionsUnion";

export class DeleteEventBusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventBusInput,
      OutputTypesUnion,
      DeleteEventBusOutput,
      EventBridgeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteEventBus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventBusInput,
    DeleteEventBusOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteEventBusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEventBusInput, DeleteEventBusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventBusInput, DeleteEventBusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
