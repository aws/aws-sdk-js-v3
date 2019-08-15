import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAssociation } from "../model/operations/DeleteAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAssociationInput } from "../types/DeleteAssociationInput";
import { DeleteAssociationOutput } from "../types/DeleteAssociationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteAssociationInput";
export * from "../types/DeleteAssociationOutput";
export * from "../types/DeleteAssociationExceptionsUnion";

export class DeleteAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAssociationInput,
      OutputTypesUnion,
      DeleteAssociationOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAssociationInput,
    DeleteAssociationOutput,
    Blob
  >();

  constructor(readonly input: DeleteAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAssociationInput, DeleteAssociationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAssociationInput, DeleteAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
