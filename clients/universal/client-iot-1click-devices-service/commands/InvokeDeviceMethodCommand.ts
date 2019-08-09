import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InvokeDeviceMethod } from "../model/InvokeDeviceMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InvokeDeviceMethodInput } from "../types/InvokeDeviceMethodInput";
import { InvokeDeviceMethodOutput } from "../types/InvokeDeviceMethodOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/InvokeDeviceMethodInput";
export * from "../types/InvokeDeviceMethodOutput";
export * from "../types/InvokeDeviceMethodExceptionsUnion";

export class InvokeDeviceMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InvokeDeviceMethodInput,
      OutputTypesUnion,
      InvokeDeviceMethodOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InvokeDeviceMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InvokeDeviceMethodInput,
    InvokeDeviceMethodOutput,
    Uint8Array
  >();

  constructor(readonly input: InvokeDeviceMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InvokeDeviceMethodInput,
    InvokeDeviceMethodOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InvokeDeviceMethodInput, InvokeDeviceMethodOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
