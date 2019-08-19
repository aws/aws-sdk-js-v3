import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDocument } from "../model/operations/CreateDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDocumentInput } from "../types/CreateDocumentInput";
import { CreateDocumentOutput } from "../types/CreateDocumentOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateDocumentInput";
export * from "../types/CreateDocumentOutput";
export * from "../types/CreateDocumentExceptionsUnion";

export class CreateDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDocumentInput,
      OutputTypesUnion,
      CreateDocumentOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDocumentInput,
    CreateDocumentOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateDocumentInput, CreateDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDocumentInput, CreateDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
