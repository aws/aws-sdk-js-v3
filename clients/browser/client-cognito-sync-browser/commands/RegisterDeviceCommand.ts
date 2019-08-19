import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterDevice } from "../model/operations/RegisterDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterDeviceInput } from "../types/RegisterDeviceInput";
import { RegisterDeviceOutput } from "../types/RegisterDeviceOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/RegisterDeviceInput";
export * from "../types/RegisterDeviceOutput";
export * from "../types/RegisterDeviceExceptionsUnion";

export class RegisterDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterDeviceInput,
      OutputTypesUnion,
      RegisterDeviceOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = RegisterDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterDeviceInput,
    RegisterDeviceOutput,
    Blob
  >();

  constructor(readonly input: RegisterDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<RegisterDeviceInput, RegisterDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterDeviceInput, RegisterDeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
