import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLicenseConfiguration } from "../model/CreateLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLicenseConfigurationInput } from "../types/CreateLicenseConfigurationInput";
import { CreateLicenseConfigurationOutput } from "../types/CreateLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/CreateLicenseConfigurationInput";
export * from "../types/CreateLicenseConfigurationOutput";
export * from "../types/CreateLicenseConfigurationExceptionsUnion";

export class CreateLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLicenseConfigurationInput,
      OutputTypesUnion,
      CreateLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLicenseConfigurationInput,
    CreateLicenseConfigurationOutput,
    Blob
  >();

  constructor(readonly input: CreateLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLicenseConfigurationInput,
    CreateLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLicenseConfigurationInput,
        CreateLicenseConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
