import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDocument } from "../model/GetDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentInput } from "../types/GetDocumentInput";
import { GetDocumentOutput } from "../types/GetDocumentOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetDocumentInput";
export * from "../types/GetDocumentOutput";
export * from "../types/GetDocumentExceptionsUnion";

export class GetDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentInput,
      OutputTypesUnion,
      GetDocumentOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentInput,
    GetDocumentOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDocumentInput, GetDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentInput, GetDocumentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
