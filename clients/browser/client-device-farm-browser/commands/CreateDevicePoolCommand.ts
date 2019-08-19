import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDevicePool } from "../model/operations/CreateDevicePool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDevicePoolInput } from "../types/CreateDevicePoolInput";
import { CreateDevicePoolOutput } from "../types/CreateDevicePoolOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/CreateDevicePoolInput";
export * from "../types/CreateDevicePoolOutput";
export * from "../types/CreateDevicePoolExceptionsUnion";

export class CreateDevicePoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDevicePoolInput,
      OutputTypesUnion,
      CreateDevicePoolOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDevicePool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDevicePoolInput,
    CreateDevicePoolOutput,
    Blob
  >();

  constructor(readonly input: CreateDevicePoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDevicePoolInput, CreateDevicePoolOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDevicePoolInput, CreateDevicePoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
