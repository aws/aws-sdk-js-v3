import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAssociationsForLicenseConfiguration } from "../model/ListAssociationsForLicenseConfiguration";
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
      _stream.Readable
    > {
  readonly model = ListAssociationsForLicenseConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssociationsForLicenseConfigurationInput,
    ListAssociationsForLicenseConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAssociationsForLicenseConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
