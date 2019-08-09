import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApplicationSettings } from "../model/UpdateApplicationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationSettingsInput } from "../types/UpdateApplicationSettingsInput";
import { UpdateApplicationSettingsOutput } from "../types/UpdateApplicationSettingsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateApplicationSettingsInput";
export * from "../types/UpdateApplicationSettingsOutput";
export * from "../types/UpdateApplicationSettingsExceptionsUnion";

export class UpdateApplicationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationSettingsInput,
      OutputTypesUnion,
      UpdateApplicationSettingsOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateApplicationSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationSettingsInput,
    UpdateApplicationSettingsOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateApplicationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateApplicationSettingsInput,
    UpdateApplicationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApplicationSettingsInput, UpdateApplicationSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
