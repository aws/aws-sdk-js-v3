import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeviceEvents } from "../model/ListDeviceEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeviceEventsInput } from "../types/ListDeviceEventsInput";
import { ListDeviceEventsOutput } from "../types/ListDeviceEventsOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/ListDeviceEventsInput";
export * from "../types/ListDeviceEventsOutput";
export * from "../types/ListDeviceEventsExceptionsUnion";

export class ListDeviceEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeviceEventsInput,
      OutputTypesUnion,
      ListDeviceEventsOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListDeviceEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeviceEventsInput,
    ListDeviceEventsOutput,
    Blob
  >();

  constructor(readonly input: ListDeviceEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDeviceEventsInput, ListDeviceEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeviceEventsInput, ListDeviceEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
