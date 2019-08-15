import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeactivateEventSource } from "../model/operations/DeactivateEventSource";
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
      _stream.Readable
    > {
  readonly model = DeactivateEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeactivateEventSourceInput,
    DeactivateEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeactivateEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
