import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListLicenseSpecificationsForResource } from "../model/ListLicenseSpecificationsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListLicenseSpecificationsForResourceInput } from "../types/ListLicenseSpecificationsForResourceInput";
import { ListLicenseSpecificationsForResourceOutput } from "../types/ListLicenseSpecificationsForResourceOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/ListLicenseSpecificationsForResourceInput";
export * from "../types/ListLicenseSpecificationsForResourceOutput";
export * from "../types/ListLicenseSpecificationsForResourceExceptionsUnion";

export class ListLicenseSpecificationsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListLicenseSpecificationsForResourceInput,
      OutputTypesUnion,
      ListLicenseSpecificationsForResourceOutput,
      LicenseManagerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListLicenseSpecificationsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListLicenseSpecificationsForResourceInput,
    ListLicenseSpecificationsForResourceOutput,
    Uint8Array
  >();

  constructor(readonly input: ListLicenseSpecificationsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListLicenseSpecificationsForResourceInput,
    ListLicenseSpecificationsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListLicenseSpecificationsForResourceInput,
        ListLicenseSpecificationsForResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
