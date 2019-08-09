import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableAWSOrganizationsAccess } from "../model/DisableAWSOrganizationsAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableAWSOrganizationsAccessInput } from "../types/DisableAWSOrganizationsAccessInput";
import { DisableAWSOrganizationsAccessOutput } from "../types/DisableAWSOrganizationsAccessOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisableAWSOrganizationsAccessInput";
export * from "../types/DisableAWSOrganizationsAccessOutput";
export * from "../types/DisableAWSOrganizationsAccessExceptionsUnion";

export class DisableAWSOrganizationsAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableAWSOrganizationsAccessInput,
      OutputTypesUnion,
      DisableAWSOrganizationsAccessOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DisableAWSOrganizationsAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableAWSOrganizationsAccessInput,
    DisableAWSOrganizationsAccessOutput,
    Blob
  >();

  constructor(readonly input: DisableAWSOrganizationsAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableAWSOrganizationsAccessInput,
    DisableAWSOrganizationsAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisableAWSOrganizationsAccessInput,
        DisableAWSOrganizationsAccessOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
