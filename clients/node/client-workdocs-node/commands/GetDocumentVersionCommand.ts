import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDocumentVersion } from "../model/GetDocumentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentVersionInput } from "../types/GetDocumentVersionInput";
import { GetDocumentVersionOutput } from "../types/GetDocumentVersionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/GetDocumentVersionInput";
export * from "../types/GetDocumentVersionOutput";
export * from "../types/GetDocumentVersionExceptionsUnion";

export class GetDocumentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentVersionInput,
      OutputTypesUnion,
      GetDocumentVersionOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDocumentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentVersionInput,
    GetDocumentVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDocumentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentVersionInput,
    GetDocumentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentVersionInput, GetDocumentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
