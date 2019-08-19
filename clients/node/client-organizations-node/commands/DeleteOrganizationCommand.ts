import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteOrganization } from "../model/operations/DeleteOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOrganizationInput } from "../types/DeleteOrganizationInput";
import { DeleteOrganizationOutput } from "../types/DeleteOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DeleteOrganizationInput";
export * from "../types/DeleteOrganizationOutput";
export * from "../types/DeleteOrganizationExceptionsUnion";

export class DeleteOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOrganizationInput,
      OutputTypesUnion,
      DeleteOrganizationOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOrganizationInput,
    DeleteOrganizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteOrganizationInput,
    DeleteOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteOrganizationInput, DeleteOrganizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
