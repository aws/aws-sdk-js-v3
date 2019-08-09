import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnclaimDevice } from "../model/UnclaimDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnclaimDeviceInput } from "../types/UnclaimDeviceInput";
import { UnclaimDeviceOutput } from "../types/UnclaimDeviceOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/UnclaimDeviceInput";
export * from "../types/UnclaimDeviceOutput";
export * from "../types/UnclaimDeviceExceptionsUnion";

export class UnclaimDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnclaimDeviceInput,
      OutputTypesUnion,
      UnclaimDeviceOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Blob
    > {
  readonly model = UnclaimDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnclaimDeviceInput,
    UnclaimDeviceOutput,
    Blob
  >();

  constructor(readonly input: UnclaimDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<UnclaimDeviceInput, UnclaimDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnclaimDeviceInput, UnclaimDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
