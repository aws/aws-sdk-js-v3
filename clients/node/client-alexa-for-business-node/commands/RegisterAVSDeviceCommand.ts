import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterAVSDevice } from "../model/operations/RegisterAVSDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterAVSDeviceInput } from "../types/RegisterAVSDeviceInput";
import { RegisterAVSDeviceOutput } from "../types/RegisterAVSDeviceOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/RegisterAVSDeviceInput";
export * from "../types/RegisterAVSDeviceOutput";
export * from "../types/RegisterAVSDeviceExceptionsUnion";

export class RegisterAVSDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterAVSDeviceInput,
      OutputTypesUnion,
      RegisterAVSDeviceOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterAVSDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterAVSDeviceInput,
    RegisterAVSDeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterAVSDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterAVSDeviceInput, RegisterAVSDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterAVSDeviceInput, RegisterAVSDeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
