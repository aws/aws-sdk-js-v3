import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InitiateDocumentVersionUpload } from "../model/InitiateDocumentVersionUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InitiateDocumentVersionUploadInput } from "../types/InitiateDocumentVersionUploadInput";
import { InitiateDocumentVersionUploadOutput } from "../types/InitiateDocumentVersionUploadOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/InitiateDocumentVersionUploadInput";
export * from "../types/InitiateDocumentVersionUploadOutput";
export * from "../types/InitiateDocumentVersionUploadExceptionsUnion";

export class InitiateDocumentVersionUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InitiateDocumentVersionUploadInput,
      OutputTypesUnion,
      InitiateDocumentVersionUploadOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = InitiateDocumentVersionUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InitiateDocumentVersionUploadInput,
    InitiateDocumentVersionUploadOutput,
    Uint8Array
  >();

  constructor(readonly input: InitiateDocumentVersionUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InitiateDocumentVersionUploadInput,
    InitiateDocumentVersionUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        InitiateDocumentVersionUploadInput,
        InitiateDocumentVersionUploadOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
