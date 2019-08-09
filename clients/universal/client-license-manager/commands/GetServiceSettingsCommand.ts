import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetServiceSettings } from "../model/GetServiceSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetServiceSettingsInput } from "../types/GetServiceSettingsInput";
import { GetServiceSettingsOutput } from "../types/GetServiceSettingsOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/GetServiceSettingsInput";
export * from "../types/GetServiceSettingsOutput";
export * from "../types/GetServiceSettingsExceptionsUnion";

export class GetServiceSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetServiceSettingsInput,
      OutputTypesUnion,
      GetServiceSettingsOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetServiceSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetServiceSettingsInput,
    GetServiceSettingsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetServiceSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetServiceSettingsInput,
    GetServiceSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetServiceSettingsInput, GetServiceSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
