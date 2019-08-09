import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLicenseConfiguration } from "../model/GetLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLicenseConfigurationInput } from "../types/GetLicenseConfigurationInput";
import { GetLicenseConfigurationOutput } from "../types/GetLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/GetLicenseConfigurationInput";
export * from "../types/GetLicenseConfigurationOutput";
export * from "../types/GetLicenseConfigurationExceptionsUnion";

export class GetLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLicenseConfigurationInput,
      OutputTypesUnion,
      GetLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLicenseConfigurationInput,
    GetLicenseConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLicenseConfigurationInput,
    GetLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLicenseConfigurationInput, GetLicenseConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
