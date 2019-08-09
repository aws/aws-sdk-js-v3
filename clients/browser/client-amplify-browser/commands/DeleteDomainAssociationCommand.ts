import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDomainAssociation } from "../model/DeleteDomainAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainAssociationInput } from "../types/DeleteDomainAssociationInput";
import { DeleteDomainAssociationOutput } from "../types/DeleteDomainAssociationOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/DeleteDomainAssociationInput";
export * from "../types/DeleteDomainAssociationOutput";
export * from "../types/DeleteDomainAssociationExceptionsUnion";

export class DeleteDomainAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDomainAssociationInput,
      OutputTypesUnion,
      DeleteDomainAssociationOutput,
      AmplifyResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDomainAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainAssociationInput,
    DeleteDomainAssociationOutput,
    Blob
  >();

  constructor(readonly input: DeleteDomainAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDomainAssociationInput,
    DeleteDomainAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDomainAssociationInput, DeleteDomainAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
