import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListViolationEvents } from "../model/operations/ListViolationEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListViolationEventsInput } from "../types/ListViolationEventsInput";
import { ListViolationEventsOutput } from "../types/ListViolationEventsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListViolationEventsInput";
export * from "../types/ListViolationEventsOutput";
export * from "../types/ListViolationEventsExceptionsUnion";

export class ListViolationEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListViolationEventsInput,
      OutputTypesUnion,
      ListViolationEventsOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListViolationEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListViolationEventsInput,
    ListViolationEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListViolationEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListViolationEventsInput,
    ListViolationEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListViolationEventsInput, ListViolationEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
