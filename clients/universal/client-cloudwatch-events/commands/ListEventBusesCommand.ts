import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEventBuses } from "../model/ListEventBuses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEventBusesInput } from "../types/ListEventBusesInput";
import { ListEventBusesOutput } from "../types/ListEventBusesOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/ListEventBusesInput";
export * from "../types/ListEventBusesOutput";
export * from "../types/ListEventBusesExceptionsUnion";

export class ListEventBusesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEventBusesInput,
      OutputTypesUnion,
      ListEventBusesOutput,
      CloudWatchEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListEventBuses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEventBusesInput,
    ListEventBusesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListEventBusesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEventBusesInput, ListEventBusesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEventBusesInput, ListEventBusesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
