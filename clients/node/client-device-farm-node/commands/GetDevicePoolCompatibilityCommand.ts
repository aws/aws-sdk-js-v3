import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDevicePoolCompatibility } from "../model/GetDevicePoolCompatibility";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDevicePoolCompatibilityInput } from "../types/GetDevicePoolCompatibilityInput";
import { GetDevicePoolCompatibilityOutput } from "../types/GetDevicePoolCompatibilityOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetDevicePoolCompatibilityInput";
export * from "../types/GetDevicePoolCompatibilityOutput";
export * from "../types/GetDevicePoolCompatibilityExceptionsUnion";

export class GetDevicePoolCompatibilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDevicePoolCompatibilityInput,
      OutputTypesUnion,
      GetDevicePoolCompatibilityOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDevicePoolCompatibility;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevicePoolCompatibilityInput,
    GetDevicePoolCompatibilityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDevicePoolCompatibilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDevicePoolCompatibilityInput,
    GetDevicePoolCompatibilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDevicePoolCompatibilityInput,
        GetDevicePoolCompatibilityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
