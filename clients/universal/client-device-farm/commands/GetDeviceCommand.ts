import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevice } from "../model/GetDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceInput } from "../types/GetDeviceInput";
import { GetDeviceOutput } from "../types/GetDeviceOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetDeviceInput";
export * from "../types/GetDeviceOutput";
export * from "../types/GetDeviceExceptionsUnion";

export class GetDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceInput,
      OutputTypesUnion,
      GetDeviceOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceInput,
    GetDeviceOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDeviceInput, GetDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDeviceInput, GetDeviceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
