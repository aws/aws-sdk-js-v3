import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ClaimDevicesByClaimCode } from "../model/ClaimDevicesByClaimCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ClaimDevicesByClaimCodeInput } from "../types/ClaimDevicesByClaimCodeInput";
import { ClaimDevicesByClaimCodeOutput } from "../types/ClaimDevicesByClaimCodeOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/ClaimDevicesByClaimCodeInput";
export * from "../types/ClaimDevicesByClaimCodeOutput";
export * from "../types/ClaimDevicesByClaimCodeExceptionsUnion";

export class ClaimDevicesByClaimCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ClaimDevicesByClaimCodeInput,
      OutputTypesUnion,
      ClaimDevicesByClaimCodeOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ClaimDevicesByClaimCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ClaimDevicesByClaimCodeInput,
    ClaimDevicesByClaimCodeOutput,
    Uint8Array
  >();

  constructor(readonly input: ClaimDevicesByClaimCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ClaimDevicesByClaimCodeInput,
    ClaimDevicesByClaimCodeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ClaimDevicesByClaimCodeInput, ClaimDevicesByClaimCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
