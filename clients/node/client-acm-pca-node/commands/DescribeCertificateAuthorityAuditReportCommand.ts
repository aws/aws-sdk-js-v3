import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCertificateAuthorityAuditReport } from "../model/DescribeCertificateAuthorityAuditReport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCertificateAuthorityAuditReportInput } from "../types/DescribeCertificateAuthorityAuditReportInput";
import { DescribeCertificateAuthorityAuditReportOutput } from "../types/DescribeCertificateAuthorityAuditReportOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/DescribeCertificateAuthorityAuditReportInput";
export * from "../types/DescribeCertificateAuthorityAuditReportOutput";
export * from "../types/DescribeCertificateAuthorityAuditReportExceptionsUnion";

export class DescribeCertificateAuthorityAuditReportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCertificateAuthorityAuditReportInput,
      OutputTypesUnion,
      DescribeCertificateAuthorityAuditReportOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCertificateAuthorityAuditReport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCertificateAuthorityAuditReportInput,
    DescribeCertificateAuthorityAuditReportOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCertificateAuthorityAuditReportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCertificateAuthorityAuditReportInput,
    DescribeCertificateAuthorityAuditReportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCertificateAuthorityAuditReportInput,
        DescribeCertificateAuthorityAuditReportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
