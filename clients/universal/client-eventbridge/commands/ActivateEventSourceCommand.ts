import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ActivateEventSource } from "../model/ActivateEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ActivateEventSourceInput } from "../types/ActivateEventSourceInput";
import { ActivateEventSourceOutput } from "../types/ActivateEventSourceOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/ActivateEventSourceInput";
export * from "../types/ActivateEventSourceOutput";
export * from "../types/ActivateEventSourceExceptionsUnion";

export class ActivateEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ActivateEventSourceInput,
      OutputTypesUnion,
      ActivateEventSourceOutput,
      EventBridgeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ActivateEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ActivateEventSourceInput,
    ActivateEventSourceOutput,
    Uint8Array
  >();

  constructor(readonly input: ActivateEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ActivateEventSourceInput,
    ActivateEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ActivateEventSourceInput, ActivateEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
