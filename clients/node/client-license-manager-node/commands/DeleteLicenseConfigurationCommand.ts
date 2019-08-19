import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLicenseConfiguration } from "../model/operations/DeleteLicenseConfiguration";
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
      _stream.Readable
    > {
  readonly model = DeleteLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLicenseConfigurationInput,
    DeleteLicenseConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
