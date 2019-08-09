import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAWSServiceAccessForOrganization } from "../model/ListAWSServiceAccessForOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAWSServiceAccessForOrganizationInput } from "../types/ListAWSServiceAccessForOrganizationInput";
import { ListAWSServiceAccessForOrganizationOutput } from "../types/ListAWSServiceAccessForOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListAWSServiceAccessForOrganizationInput";
export * from "../types/ListAWSServiceAccessForOrganizationOutput";
export * from "../types/ListAWSServiceAccessForOrganizationExceptionsUnion";

export class ListAWSServiceAccessForOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAWSServiceAccessForOrganizationInput,
      OutputTypesUnion,
      ListAWSServiceAccessForOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListAWSServiceAccessForOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAWSServiceAccessForOrganizationInput,
    ListAWSServiceAccessForOrganizationOutput,
    Blob
  >();

  constructor(readonly input: ListAWSServiceAccessForOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAWSServiceAccessForOrganizationInput,
    ListAWSServiceAccessForOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAWSServiceAccessForOrganizationInput,
        ListAWSServiceAccessForOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
