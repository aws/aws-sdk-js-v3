import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableMFADevice } from "../model/operations/EnableMFADevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableMFADeviceInput } from "../types/EnableMFADeviceInput";
import { EnableMFADeviceOutput } from "../types/EnableMFADeviceOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/EnableMFADeviceInput";
export * from "../types/EnableMFADeviceOutput";
export * from "../types/EnableMFADeviceExceptionsUnion";

export class EnableMFADeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableMFADeviceInput,
      OutputTypesUnion,
      EnableMFADeviceOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableMFADevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableMFADeviceInput,
    EnableMFADeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableMFADeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableMFADeviceInput, EnableMFADeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableMFADeviceInput, EnableMFADeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
