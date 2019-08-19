import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableAWSOrganizationsAccess } from "../model/operations/EnableAWSOrganizationsAccess";
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
      Blob
    > {
  readonly model = EnableAWSOrganizationsAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableAWSOrganizationsAccessInput,
    EnableAWSOrganizationsAccessOutput,
    Blob
  >();

  constructor(readonly input: EnableAWSOrganizationsAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
