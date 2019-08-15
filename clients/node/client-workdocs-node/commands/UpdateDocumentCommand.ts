import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDocument } from "../model/operations/UpdateDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentInput } from "../types/UpdateDocumentInput";
import { UpdateDocumentOutput } from "../types/UpdateDocumentOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/UpdateDocumentInput";
export * from "../types/UpdateDocumentOutput";
export * from "../types/UpdateDocumentExceptionsUnion";

export class UpdateDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentInput,
      OutputTypesUnion,
      UpdateDocumentOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentInput,
    UpdateDocumentOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDocumentInput, UpdateDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDocumentInput, UpdateDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
