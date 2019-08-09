import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDocumentClassifier } from "../model/DeleteDocumentClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDocumentClassifierInput } from "../types/DeleteDocumentClassifierInput";
import { DeleteDocumentClassifierOutput } from "../types/DeleteDocumentClassifierOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DeleteDocumentClassifierInput";
export * from "../types/DeleteDocumentClassifierOutput";
export * from "../types/DeleteDocumentClassifierExceptionsUnion";

export class DeleteDocumentClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDocumentClassifierInput,
      OutputTypesUnion,
      DeleteDocumentClassifierOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDocumentClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDocumentClassifierInput,
    DeleteDocumentClassifierOutput,
    Blob
  >();

  constructor(readonly input: DeleteDocumentClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDocumentClassifierInput,
    DeleteDocumentClassifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDocumentClassifierInput, DeleteDocumentClassifierOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
