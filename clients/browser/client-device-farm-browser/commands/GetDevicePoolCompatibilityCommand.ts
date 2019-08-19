import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevicePoolCompatibility } from "../model/operations/GetDevicePoolCompatibility";
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
      Blob
    > {
  readonly model = GetDevicePoolCompatibility;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevicePoolCompatibilityInput,
    GetDevicePoolCompatibilityOutput,
    Blob
  >();

  constructor(readonly input: GetDevicePoolCompatibilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
