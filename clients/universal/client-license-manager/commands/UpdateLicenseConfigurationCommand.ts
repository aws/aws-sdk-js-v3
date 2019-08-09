import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLicenseConfiguration } from "../model/UpdateLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLicenseConfigurationInput } from "../types/UpdateLicenseConfigurationInput";
import { UpdateLicenseConfigurationOutput } from "../types/UpdateLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/UpdateLicenseConfigurationInput";
export * from "../types/UpdateLicenseConfigurationOutput";
export * from "../types/UpdateLicenseConfigurationExceptionsUnion";

export class UpdateLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLicenseConfigurationInput,
      OutputTypesUnion,
      UpdateLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLicenseConfigurationInput,
    UpdateLicenseConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLicenseConfigurationInput,
    UpdateLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateLicenseConfigurationInput,
        UpdateLicenseConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
