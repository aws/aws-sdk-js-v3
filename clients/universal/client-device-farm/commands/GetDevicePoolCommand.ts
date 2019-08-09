import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevicePool } from "../model/GetDevicePool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDevicePoolInput } from "../types/GetDevicePoolInput";
import { GetDevicePoolOutput } from "../types/GetDevicePoolOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetDevicePoolInput";
export * from "../types/GetDevicePoolOutput";
export * from "../types/GetDevicePoolExceptionsUnion";

export class GetDevicePoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDevicePoolInput,
      OutputTypesUnion,
      GetDevicePoolOutput,
      DeviceFarmResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDevicePool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevicePoolInput,
    GetDevicePoolOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDevicePoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDevicePoolInput, GetDevicePoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDevicePoolInput, GetDevicePoolOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
