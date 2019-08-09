import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { FinalizeDeviceClaim } from "../model/FinalizeDeviceClaim";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { FinalizeDeviceClaimInput } from "../types/FinalizeDeviceClaimInput";
import { FinalizeDeviceClaimOutput } from "../types/FinalizeDeviceClaimOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/FinalizeDeviceClaimInput";
export * from "../types/FinalizeDeviceClaimOutput";
export * from "../types/FinalizeDeviceClaimExceptionsUnion";

export class FinalizeDeviceClaimCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      FinalizeDeviceClaimInput,
      OutputTypesUnion,
      FinalizeDeviceClaimOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = FinalizeDeviceClaim;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    FinalizeDeviceClaimInput,
    FinalizeDeviceClaimOutput,
    Uint8Array
  >();

  constructor(readonly input: FinalizeDeviceClaimInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    FinalizeDeviceClaimInput,
    FinalizeDeviceClaimOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<FinalizeDeviceClaimInput, FinalizeDeviceClaimOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
