import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IndexDocuments } from "../model/operations/IndexDocuments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IndexDocumentsInput } from "../types/IndexDocumentsInput";
import { IndexDocumentsOutput } from "../types/IndexDocumentsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/IndexDocumentsInput";
export * from "../types/IndexDocumentsOutput";
export * from "../types/IndexDocumentsExceptionsUnion";

export class IndexDocumentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IndexDocumentsInput,
      OutputTypesUnion,
      IndexDocumentsOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = IndexDocuments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IndexDocumentsInput,
    IndexDocumentsOutput,
    Blob
  >();

  constructor(readonly input: IndexDocumentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<IndexDocumentsInput, IndexDocumentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IndexDocumentsInput, IndexDocumentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
