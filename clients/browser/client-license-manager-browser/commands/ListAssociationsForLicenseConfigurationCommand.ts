import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssociationsForLicenseConfiguration } from "../model/operations/ListAssociationsForLicenseConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssociationsForLicenseConfigurationInput } from "../types/ListAssociationsForLicenseConfigurationInput";
import { ListAssociationsForLicenseConfigurationOutput } from "../types/ListAssociationsForLicenseConfigurationOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/ListAssociationsForLicenseConfigurationInput";
export * from "../types/ListAssociationsForLicenseConfigurationOutput";
export * from "../types/ListAssociationsForLicenseConfigurationExceptionsUnion";

export class ListAssociationsForLicenseConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssociationsForLicenseConfigurationInput,
      OutputTypesUnion,
      ListAssociationsForLicenseConfigurationOutput,
      LicenseManagerResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssociationsForLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociationsForLicenseConfigurationInput,
    ListAssociationsForLicenseConfigurationOutput,
    Blob
  >();

  constructor(readonly input: ListAssociationsForLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssociationsForLicenseConfigurationInput,
    ListAssociationsForLicenseConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAssociationsForLicenseConfigurationInput,
        ListAssociationsForLicenseConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
