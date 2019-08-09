import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeviceInstance } from "../model/GetDeviceInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceInstanceInput } from "../types/GetDeviceInstanceInput";
import { GetDeviceInstanceOutput } from "../types/GetDeviceInstanceOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetDeviceInstanceInput";
export * from "../types/GetDeviceInstanceOutput";
export * from "../types/GetDeviceInstanceExceptionsUnion";

export class GetDeviceInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceInstanceInput,
      OutputTypesUnion,
      GetDeviceInstanceOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDeviceInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceInstanceInput,
    GetDeviceInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDeviceInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeviceInstanceInput, GetDeviceInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeviceInstanceInput, GetDeviceInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
