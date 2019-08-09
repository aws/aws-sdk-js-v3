import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteOrganizationalUnit } from "../model/DeleteOrganizationalUnit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOrganizationalUnitInput } from "../types/DeleteOrganizationalUnitInput";
import { DeleteOrganizationalUnitOutput } from "../types/DeleteOrganizationalUnitOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DeleteOrganizationalUnitInput";
export * from "../types/DeleteOrganizationalUnitOutput";
export * from "../types/DeleteOrganizationalUnitExceptionsUnion";

export class DeleteOrganizationalUnitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOrganizationalUnitInput,
      OutputTypesUnion,
      DeleteOrganizationalUnitOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteOrganizationalUnit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOrganizationalUnitInput,
    DeleteOrganizationalUnitOutput,
    Blob
  >();

  constructor(readonly input: DeleteOrganizationalUnitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteOrganizationalUnitInput,
    DeleteOrganizationalUnitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteOrganizationalUnitInput, DeleteOrganizationalUnitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
