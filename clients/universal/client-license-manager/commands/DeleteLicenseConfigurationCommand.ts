import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLicenseConfiguration } from "../model/DeleteLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLicenseConfigurationInput } from "../types/DeleteLicenseConfigurationInput";
import { DeleteLicenseConfigurationOutput } from "../types/DeleteLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/DeleteLicenseConfigurationInput";
export * from "../types/DeleteLicenseConfigurationOutput";
export * from "../types/DeleteLicenseConfigurationExceptionsUnion";

export class DeleteLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLicenseConfigurationInput,
      OutputTypesUnion,
      DeleteLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLicenseConfigurationInput,
    DeleteLicenseConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLicenseConfigurationInput,
    DeleteLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteLicenseConfigurationInput,
        DeleteLicenseConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
