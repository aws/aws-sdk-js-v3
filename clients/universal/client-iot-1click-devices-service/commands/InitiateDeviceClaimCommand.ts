import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InitiateDeviceClaim } from "../model/InitiateDeviceClaim";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitiateDeviceClaimInput } from "../types/InitiateDeviceClaimInput";
import { InitiateDeviceClaimOutput } from "../types/InitiateDeviceClaimOutput";
import { IoT1ClickDevicesServiceResolvedConfiguration } from "../IoT1ClickDevicesServiceConfiguration";
export * from "../types/InitiateDeviceClaimInput";
export * from "../types/InitiateDeviceClaimOutput";
export * from "../types/InitiateDeviceClaimExceptionsUnion";

export class InitiateDeviceClaimCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitiateDeviceClaimInput,
      OutputTypesUnion,
      InitiateDeviceClaimOutput,
      IoT1ClickDevicesServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InitiateDeviceClaim;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitiateDeviceClaimInput,
    InitiateDeviceClaimOutput,
    Uint8Array
  >();

  constructor(readonly input: InitiateDeviceClaimInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoT1ClickDevicesServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InitiateDeviceClaimInput,
    InitiateDeviceClaimOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<InitiateDeviceClaimInput, InitiateDeviceClaimOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
