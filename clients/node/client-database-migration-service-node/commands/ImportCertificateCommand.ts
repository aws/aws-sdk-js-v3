import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportCertificate } from "../model/ImportCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportCertificateInput } from "../types/ImportCertificateInput";
import { ImportCertificateOutput } from "../types/ImportCertificateOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
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
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportCertificateInput,
    ImportCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
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
