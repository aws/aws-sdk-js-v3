import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCertificateAuthorityAuditReport } from "../model/CreateCertificateAuthorityAuditReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCertificateAuthorityAuditReportInput } from "../types/CreateCertificateAuthorityAuditReportInput";
import { CreateCertificateAuthorityAuditReportOutput } from "../types/CreateCertificateAuthorityAuditReportOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/CreateCertificateAuthorityAuditReportInput";
export * from "../types/CreateCertificateAuthorityAuditReportOutput";
export * from "../types/CreateCertificateAuthorityAuditReportExceptionsUnion";

export class CreateCertificateAuthorityAuditReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCertificateAuthorityAuditReportInput,
      OutputTypesUnion,
      CreateCertificateAuthorityAuditReportOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCertificateAuthorityAuditReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCertificateAuthorityAuditReportInput,
    CreateCertificateAuthorityAuditReportOutput,
    Blob
  >();

  constructor(readonly input: CreateCertificateAuthorityAuditReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCertificateAuthorityAuditReportInput,
    CreateCertificateAuthorityAuditReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateCertificateAuthorityAuditReportInput,
        CreateCertificateAuthorityAuditReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
