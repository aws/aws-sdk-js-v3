import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDevices } from "../model/operations/ListDevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDevicesInput } from "../types/ListDevicesInput";
import { ListDevicesOutput } from "../types/ListDevicesOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/ListDevicesInput";
export * from "../types/ListDevicesOutput";
export * from "../types/ListDevicesExceptionsUnion";

export class ListDevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDevicesInput,
      OutputTypesUnion,
      ListDevicesOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Blob
    > {
  readonly model = ListDevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDevicesInput,
    ListDevicesOutput,
    Blob
  >();

  constructor(readonly input: ListDevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDevicesInput, ListDevicesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDevicesInput, ListDevicesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
