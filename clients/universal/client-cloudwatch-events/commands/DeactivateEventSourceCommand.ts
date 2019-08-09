import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeactivateEventSource } from "../model/DeactivateEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeactivateEventSourceInput } from "../types/DeactivateEventSourceInput";
import { DeactivateEventSourceOutput } from "../types/DeactivateEventSourceOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DeactivateEventSourceInput";
export * from "../types/DeactivateEventSourceOutput";
export * from "../types/DeactivateEventSourceExceptionsUnion";

export class DeactivateEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeactivateEventSourceInput,
      OutputTypesUnion,
      DeactivateEventSourceOutput,
      CloudWatchEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeactivateEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeactivateEventSourceInput,
    DeactivateEventSourceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeactivateEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeactivateEventSourceInput,
    DeactivateEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeactivateEventSourceInput, DeactivateEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
