import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDevicePool } from "../model/operations/DeleteDevicePool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDevicePoolInput } from "../types/DeleteDevicePoolInput";
import { DeleteDevicePoolOutput } from "../types/DeleteDevicePoolOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/DeleteDevicePoolInput";
export * from "../types/DeleteDevicePoolOutput";
export * from "../types/DeleteDevicePoolExceptionsUnion";

export class DeleteDevicePoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDevicePoolInput,
      OutputTypesUnion,
      DeleteDevicePoolOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDevicePool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDevicePoolInput,
    DeleteDevicePoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDevicePoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDevicePoolInput, DeleteDevicePoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDevicePoolInput, DeleteDevicePoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
