import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLicenseConfiguration } from "../model/operations/GetLicenseConfiguration";
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
      _stream.Readable
    > {
  readonly model = GetLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLicenseConfigurationInput,
    GetLicenseConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
