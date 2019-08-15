import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AnalyzeDocument } from "../model/operations/AnalyzeDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AnalyzeDocumentInput } from "../types/AnalyzeDocumentInput";
import { AnalyzeDocumentOutput } from "../types/AnalyzeDocumentOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/AnalyzeDocumentInput";
export * from "../types/AnalyzeDocumentOutput";
export * from "../types/AnalyzeDocumentExceptionsUnion";

export class AnalyzeDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AnalyzeDocumentInput,
      OutputTypesUnion,
      AnalyzeDocumentOutput,
      TextractResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AnalyzeDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AnalyzeDocumentInput,
    AnalyzeDocumentOutput,
    _stream.Readable
  >();

  constructor(readonly input: AnalyzeDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<AnalyzeDocumentInput, AnalyzeDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AnalyzeDocumentInput, AnalyzeDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
