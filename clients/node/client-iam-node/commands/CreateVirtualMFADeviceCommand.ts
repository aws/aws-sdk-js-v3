import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVirtualMFADevice } from "../model/CreateVirtualMFADevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVirtualMFADeviceInput } from "../types/CreateVirtualMFADeviceInput";
import { CreateVirtualMFADeviceOutput } from "../types/CreateVirtualMFADeviceOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateVirtualMFADeviceInput";
export * from "../types/CreateVirtualMFADeviceOutput";
export * from "../types/CreateVirtualMFADeviceExceptionsUnion";

export class CreateVirtualMFADeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVirtualMFADeviceInput,
      OutputTypesUnion,
      CreateVirtualMFADeviceOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVirtualMFADevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVirtualMFADeviceInput,
    CreateVirtualMFADeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVirtualMFADeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVirtualMFADeviceInput,
    CreateVirtualMFADeviceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVirtualMFADeviceInput, CreateVirtualMFADeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
