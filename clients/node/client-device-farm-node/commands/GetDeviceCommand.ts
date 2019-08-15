import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDevice } from "../model/operations/GetDevice";
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
      _stream.Readable
    > {
  readonly model = GetDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceInput,
    GetDeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
