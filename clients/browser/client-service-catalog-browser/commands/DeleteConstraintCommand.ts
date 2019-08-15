import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConstraint } from "../model/operations/DeleteConstraint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConstraintInput } from "../types/DeleteConstraintInput";
import { DeleteConstraintOutput } from "../types/DeleteConstraintOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeleteConstraintInput";
export * from "../types/DeleteConstraintOutput";
export * from "../types/DeleteConstraintExceptionsUnion";

export class DeleteConstraintCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConstraintInput,
      OutputTypesUnion,
      DeleteConstraintOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConstraint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConstraintInput,
    DeleteConstraintOutput,
    Blob
  >();

  constructor(readonly input: DeleteConstraintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteConstraintInput, DeleteConstraintOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConstraintInput, DeleteConstraintOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
