import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateLicenseConfiguration } from "../model/operations/UpdateLicenseConfiguration";
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
      _stream.Readable
    > {
  readonly model = UpdateLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLicenseConfigurationInput,
    UpdateLicenseConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
