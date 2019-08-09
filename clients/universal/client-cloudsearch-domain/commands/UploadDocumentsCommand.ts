import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UploadDocuments } from "../model/UploadDocuments";
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
      Uint8Array
    > {
  readonly model = UploadDocuments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadDocumentsInput,
    UploadDocumentsOutput,
    Uint8Array
  >();

  constructor(readonly input: UploadDocumentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
