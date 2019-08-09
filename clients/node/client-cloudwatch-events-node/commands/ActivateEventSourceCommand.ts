import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ActivateEventSource } from "../model/ActivateEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ActivateEventSourceInput } from "../types/ActivateEventSourceInput";
import { ActivateEventSourceOutput } from "../types/ActivateEventSourceOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
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
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ActivateEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ActivateEventSourceInput,
    ActivateEventSourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ActivateEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
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
