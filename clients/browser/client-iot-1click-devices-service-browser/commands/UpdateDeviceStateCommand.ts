import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDeviceState } from "../model/operations/UpdateDeviceState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeviceStateInput } from "../types/UpdateDeviceStateInput";
import { UpdateDeviceStateOutput } from "../types/UpdateDeviceStateOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/UpdateDeviceStateInput";
export * from "../types/UpdateDeviceStateOutput";
export * from "../types/UpdateDeviceStateExceptionsUnion";

export class UpdateDeviceStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeviceStateInput,
      OutputTypesUnion,
      UpdateDeviceStateOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDeviceState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeviceStateInput,
    UpdateDeviceStateOutput,
    Blob
  >();

  constructor(readonly input: UpdateDeviceStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDeviceStateInput, UpdateDeviceStateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeviceStateInput, UpdateDeviceStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
