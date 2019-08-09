import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeviceMethods } from "../model/GetDeviceMethods";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceMethodsInput } from "../types/GetDeviceMethodsInput";
import { GetDeviceMethodsOutput } from "../types/GetDeviceMethodsOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/GetDeviceMethodsInput";
export * from "../types/GetDeviceMethodsOutput";
export * from "../types/GetDeviceMethodsExceptionsUnion";

export class GetDeviceMethodsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceMethodsInput,
      OutputTypesUnion,
      GetDeviceMethodsOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeviceMethods;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceMethodsInput,
    GetDeviceMethodsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeviceMethodsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeviceMethodsInput, GetDeviceMethodsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeviceMethodsInput, GetDeviceMethodsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
