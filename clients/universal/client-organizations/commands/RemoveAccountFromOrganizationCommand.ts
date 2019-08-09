import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveAccountFromOrganization } from "../model/RemoveAccountFromOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAccountFromOrganizationInput } from "../types/RemoveAccountFromOrganizationInput";
import { RemoveAccountFromOrganizationOutput } from "../types/RemoveAccountFromOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/RemoveAccountFromOrganizationInput";
export * from "../types/RemoveAccountFromOrganizationOutput";
export * from "../types/RemoveAccountFromOrganizationExceptionsUnion";

export class RemoveAccountFromOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAccountFromOrganizationInput,
      OutputTypesUnion,
      RemoveAccountFromOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RemoveAccountFromOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAccountFromOrganizationInput,
    RemoveAccountFromOrganizationOutput,
    Uint8Array
  >();

  constructor(readonly input: RemoveAccountFromOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveAccountFromOrganizationInput,
    RemoveAccountFromOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveAccountFromOrganizationInput,
        RemoveAccountFromOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
