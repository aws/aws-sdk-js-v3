import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListHandshakesForOrganization } from "../model/ListHandshakesForOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHandshakesForOrganizationInput } from "../types/ListHandshakesForOrganizationInput";
import { ListHandshakesForOrganizationOutput } from "../types/ListHandshakesForOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListHandshakesForOrganizationInput";
export * from "../types/ListHandshakesForOrganizationOutput";
export * from "../types/ListHandshakesForOrganizationExceptionsUnion";

export class ListHandshakesForOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHandshakesForOrganizationInput,
      OutputTypesUnion,
      ListHandshakesForOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = ListHandshakesForOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHandshakesForOrganizationInput,
    ListHandshakesForOrganizationOutput,
    Blob
  >();

  constructor(readonly input: ListHandshakesForOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListHandshakesForOrganizationInput,
    ListHandshakesForOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListHandshakesForOrganizationInput,
        ListHandshakesForOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
