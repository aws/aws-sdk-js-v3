import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDocumentVersion } from "../model/operations/UpdateDocumentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentVersionInput } from "../types/UpdateDocumentVersionInput";
import { UpdateDocumentVersionOutput } from "../types/UpdateDocumentVersionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/UpdateDocumentVersionInput";
export * from "../types/UpdateDocumentVersionOutput";
export * from "../types/UpdateDocumentVersionExceptionsUnion";

export class UpdateDocumentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentVersionInput,
      OutputTypesUnion,
      UpdateDocumentVersionOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDocumentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentVersionInput,
    UpdateDocumentVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDocumentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDocumentVersionInput,
    UpdateDocumentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDocumentVersionInput, UpdateDocumentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
