import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDocument } from "../model/DeleteDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDocumentInput } from "../types/DeleteDocumentInput";
import { DeleteDocumentOutput } from "../types/DeleteDocumentOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteDocumentInput";
export * from "../types/DeleteDocumentOutput";
export * from "../types/DeleteDocumentExceptionsUnion";

export class DeleteDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDocumentInput,
      OutputTypesUnion,
      DeleteDocumentOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDocumentInput,
    DeleteDocumentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDocumentInput, DeleteDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDocumentInput, DeleteDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
