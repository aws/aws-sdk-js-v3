import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportCertificate } from "../model/operations/ImportCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportCertificateInput } from "../types/ImportCertificateInput";
import { ImportCertificateOutput } from "../types/ImportCertificateOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/ImportCertificateInput";
export * from "../types/ImportCertificateOutput";
export * from "../types/ImportCertificateExceptionsUnion";

export class ImportCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportCertificateInput,
      OutputTypesUnion,
      ImportCertificateOutput,
      ACMResolvedConfiguration,
      Blob
    > {
  readonly model = ImportCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportCertificateInput,
    ImportCertificateOutput,
    Blob
  >();

  constructor(readonly input: ImportCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<ImportCertificateInput, ImportCertificateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportCertificateInput, ImportCertificateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
