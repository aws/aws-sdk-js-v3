import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUsageForLicenseConfiguration } from "../model/ListUsageForLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUsageForLicenseConfigurationInput } from "../types/ListUsageForLicenseConfigurationInput";
import { ListUsageForLicenseConfigurationOutput } from "../types/ListUsageForLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/ListUsageForLicenseConfigurationInput";
export * from "../types/ListUsageForLicenseConfigurationOutput";
export * from "../types/ListUsageForLicenseConfigurationExceptionsUnion";

export class ListUsageForLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUsageForLicenseConfigurationInput,
      OutputTypesUnion,
      ListUsageForLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListUsageForLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUsageForLicenseConfigurationInput,
    ListUsageForLicenseConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: ListUsageForLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListUsageForLicenseConfigurationInput,
    ListUsageForLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListUsageForLicenseConfigurationInput,
        ListUsageForLicenseConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
