import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResyncMFADevice } from "../model/ResyncMFADevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResyncMFADeviceInput } from "../types/ResyncMFADeviceInput";
import { ResyncMFADeviceOutput } from "../types/ResyncMFADeviceOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ResyncMFADeviceInput";
export * from "../types/ResyncMFADeviceOutput";
export * from "../types/ResyncMFADeviceExceptionsUnion";

export class ResyncMFADeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResyncMFADeviceInput,
      OutputTypesUnion,
      ResyncMFADeviceOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResyncMFADevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResyncMFADeviceInput,
    ResyncMFADeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResyncMFADeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ResyncMFADeviceInput, ResyncMFADeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResyncMFADeviceInput, ResyncMFADeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
