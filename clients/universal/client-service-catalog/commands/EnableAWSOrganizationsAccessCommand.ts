import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableAWSOrganizationsAccess } from "../model/EnableAWSOrganizationsAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableAWSOrganizationsAccessInput } from "../types/EnableAWSOrganizationsAccessInput";
import { EnableAWSOrganizationsAccessOutput } from "../types/EnableAWSOrganizationsAccessOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/EnableAWSOrganizationsAccessInput";
export * from "../types/EnableAWSOrganizationsAccessOutput";
export * from "../types/EnableAWSOrganizationsAccessExceptionsUnion";

export class EnableAWSOrganizationsAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableAWSOrganizationsAccessInput,
      OutputTypesUnion,
      EnableAWSOrganizationsAccessOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableAWSOrganizationsAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAWSOrganizationsAccessInput,
    EnableAWSOrganizationsAccessOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableAWSOrganizationsAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableAWSOrganizationsAccessInput,
    EnableAWSOrganizationsAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        EnableAWSOrganizationsAccessInput,
        EnableAWSOrganizationsAccessOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
