import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UploadDocuments } from "../model/operations/UploadDocuments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadDocumentsInput } from "../types/UploadDocumentsInput";
import { UploadDocumentsOutput } from "../types/UploadDocumentsOutput";
import { CloudSearchDomainResolvedConfiguration } from "../CloudSearchDomainConfiguration";
export * from "../types/UploadDocumentsInput";
export * from "../types/UploadDocumentsOutput";
export * from "../types/UploadDocumentsExceptionsUnion";

export class UploadDocumentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadDocumentsInput,
      OutputTypesUnion,
      UploadDocumentsOutput,
      CloudSearchDomainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UploadDocuments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadDocumentsInput,
    UploadDocumentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UploadDocumentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchDomainResolvedConfiguration
  ): __aws_sdk_types.Handler<UploadDocumentsInput, UploadDocumentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadDocumentsInput, UploadDocumentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
