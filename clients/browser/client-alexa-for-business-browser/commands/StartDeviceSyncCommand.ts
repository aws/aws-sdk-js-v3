import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDeviceSync } from "../model/operations/StartDeviceSync";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDeviceSyncInput } from "../types/StartDeviceSyncInput";
import { StartDeviceSyncOutput } from "../types/StartDeviceSyncOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/StartDeviceSyncInput";
export * from "../types/StartDeviceSyncOutput";
export * from "../types/StartDeviceSyncExceptionsUnion";

export class StartDeviceSyncCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDeviceSyncInput,
      OutputTypesUnion,
      StartDeviceSyncOutput,
      AlexaForBusinessResolvedConfiguration,
      Blob
    > {
  readonly model = StartDeviceSync;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDeviceSyncInput,
    StartDeviceSyncOutput,
    Blob
  >();

  constructor(readonly input: StartDeviceSyncInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<StartDeviceSyncInput, StartDeviceSyncOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartDeviceSyncInput, StartDeviceSyncOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
