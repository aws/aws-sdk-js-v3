import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AbortDocumentVersionUpload } from "../model/AbortDocumentVersionUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AbortDocumentVersionUploadInput } from "../types/AbortDocumentVersionUploadInput";
import { AbortDocumentVersionUploadOutput } from "../types/AbortDocumentVersionUploadOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/AbortDocumentVersionUploadInput";
export * from "../types/AbortDocumentVersionUploadOutput";
export * from "../types/AbortDocumentVersionUploadExceptionsUnion";

export class AbortDocumentVersionUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AbortDocumentVersionUploadInput,
      OutputTypesUnion,
      AbortDocumentVersionUploadOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = AbortDocumentVersionUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AbortDocumentVersionUploadInput,
    AbortDocumentVersionUploadOutput,
    Blob
  >();

  constructor(readonly input: AbortDocumentVersionUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AbortDocumentVersionUploadInput,
    AbortDocumentVersionUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AbortDocumentVersionUploadInput,
        AbortDocumentVersionUploadOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
