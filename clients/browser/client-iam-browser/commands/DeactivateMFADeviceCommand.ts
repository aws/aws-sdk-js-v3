import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeactivateMFADevice } from "../model/operations/DeactivateMFADevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeactivateMFADeviceInput } from "../types/DeactivateMFADeviceInput";
import { DeactivateMFADeviceOutput } from "../types/DeactivateMFADeviceOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeactivateMFADeviceInput";
export * from "../types/DeactivateMFADeviceOutput";
export * from "../types/DeactivateMFADeviceExceptionsUnion";

export class DeactivateMFADeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeactivateMFADeviceInput,
      OutputTypesUnion,
      DeactivateMFADeviceOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeactivateMFADevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeactivateMFADeviceInput,
    DeactivateMFADeviceOutput,
    Blob
  >();

  constructor(readonly input: DeactivateMFADeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeactivateMFADeviceInput,
    DeactivateMFADeviceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeactivateMFADeviceInput, DeactivateMFADeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
