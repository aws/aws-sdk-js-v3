import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDeviceInstance } from "../model/operations/UpdateDeviceInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDeviceInstanceInput } from "../types/UpdateDeviceInstanceInput";
import { UpdateDeviceInstanceOutput } from "../types/UpdateDeviceInstanceOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/UpdateDeviceInstanceInput";
export * from "../types/UpdateDeviceInstanceOutput";
export * from "../types/UpdateDeviceInstanceExceptionsUnion";

export class UpdateDeviceInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDeviceInstanceInput,
      OutputTypesUnion,
      UpdateDeviceInstanceOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDeviceInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDeviceInstanceInput,
    UpdateDeviceInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDeviceInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDeviceInstanceInput,
    UpdateDeviceInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDeviceInstanceInput, UpdateDeviceInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
