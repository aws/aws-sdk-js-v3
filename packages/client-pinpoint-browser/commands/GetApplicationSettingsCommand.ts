import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApplicationSettings } from "../model/GetApplicationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationSettingsInput } from "../types/GetApplicationSettingsInput";
import { GetApplicationSettingsOutput } from "../types/GetApplicationSettingsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApplicationSettingsInput";
export * from "../types/GetApplicationSettingsOutput";
export * from "../types/GetApplicationSettingsExceptionsUnion";

export class GetApplicationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationSettingsInput,
      OutputTypesUnion,
      GetApplicationSettingsOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationSettingsInput,
    GetApplicationSettingsOutput,
    Blob
  >();

  constructor(readonly input: GetApplicationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApplicationSettingsInput,
    GetApplicationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetApplicationSettings
    };

    return stack.resolve(
      handler<GetApplicationSettingsInput, GetApplicationSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
