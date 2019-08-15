import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportCertificateAuthorityCertificate } from "../model/operations/ImportCertificateAuthorityCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportCertificateAuthorityCertificateInput } from "../types/ImportCertificateAuthorityCertificateInput";
import { ImportCertificateAuthorityCertificateOutput } from "../types/ImportCertificateAuthorityCertificateOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/ImportCertificateAuthorityCertificateInput";
export * from "../types/ImportCertificateAuthorityCertificateOutput";
export * from "../types/ImportCertificateAuthorityCertificateExceptionsUnion";

export class ImportCertificateAuthorityCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportCertificateAuthorityCertificateInput,
      OutputTypesUnion,
      ImportCertificateAuthorityCertificateOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportCertificateAuthorityCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportCertificateAuthorityCertificateInput,
    ImportCertificateAuthorityCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportCertificateAuthorityCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportCertificateAuthorityCertificateInput,
    ImportCertificateAuthorityCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ImportCertificateAuthorityCertificateInput,
        ImportCertificateAuthorityCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
