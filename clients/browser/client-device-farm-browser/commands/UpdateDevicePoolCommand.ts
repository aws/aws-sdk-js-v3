import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDevicePool } from "../model/operations/UpdateDevicePool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDevicePoolInput } from "../types/UpdateDevicePoolInput";
import { UpdateDevicePoolOutput } from "../types/UpdateDevicePoolOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/UpdateDevicePoolInput";
export * from "../types/UpdateDevicePoolOutput";
export * from "../types/UpdateDevicePoolExceptionsUnion";

export class UpdateDevicePoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDevicePoolInput,
      OutputTypesUnion,
      UpdateDevicePoolOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDevicePool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDevicePoolInput,
    UpdateDevicePoolOutput,
    Blob
  >();

  constructor(readonly input: UpdateDevicePoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDevicePoolInput, UpdateDevicePoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDevicePoolInput, UpdateDevicePoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
