import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLicenseSpecificationsForResource } from "../model/operations/UpdateLicenseSpecificationsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLicenseSpecificationsForResourceInput } from "../types/UpdateLicenseSpecificationsForResourceInput";
import { UpdateLicenseSpecificationsForResourceOutput } from "../types/UpdateLicenseSpecificationsForResourceOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/UpdateLicenseSpecificationsForResourceInput";
export * from "../types/UpdateLicenseSpecificationsForResourceOutput";
export * from "../types/UpdateLicenseSpecificationsForResourceExceptionsUnion";

export class UpdateLicenseSpecificationsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLicenseSpecificationsForResourceInput,
      OutputTypesUnion,
      UpdateLicenseSpecificationsForResourceOutput,
      LicenseManagerResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLicenseSpecificationsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLicenseSpecificationsForResourceInput,
    UpdateLicenseSpecificationsForResourceOutput,
    Blob
  >();

  constructor(readonly input: UpdateLicenseSpecificationsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLicenseSpecificationsForResourceInput,
    UpdateLicenseSpecificationsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateLicenseSpecificationsForResourceInput,
        UpdateLicenseSpecificationsForResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
