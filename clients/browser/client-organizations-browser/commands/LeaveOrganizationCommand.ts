import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { LeaveOrganization } from "../model/operations/LeaveOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { LeaveOrganizationInput } from "../types/LeaveOrganizationInput";
import { LeaveOrganizationOutput } from "../types/LeaveOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/LeaveOrganizationInput";
export * from "../types/LeaveOrganizationOutput";
export * from "../types/LeaveOrganizationExceptionsUnion";

export class LeaveOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      LeaveOrganizationInput,
      OutputTypesUnion,
      LeaveOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = LeaveOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    LeaveOrganizationInput,
    LeaveOrganizationOutput,
    Blob
  >();

  constructor(readonly input: LeaveOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<LeaveOrganizationInput, LeaveOrganizationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<LeaveOrganizationInput, LeaveOrganizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
