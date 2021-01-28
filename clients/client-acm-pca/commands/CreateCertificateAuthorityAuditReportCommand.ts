import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
  serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateCertificateAuthorityAuditReportCommandInput = CreateCertificateAuthorityAuditReportRequest;
export type CreateCertificateAuthorityAuditReportCommandOutput = CreateCertificateAuthorityAuditReportResponse &
  __MetadataBearer;

/**
 * <p>Creates an audit report that lists every time that your CA private key is used. The
 * 			report is saved in the Amazon S3 bucket that you specify on input.
 *
 * 			The <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use
 * 			the private key. </p>
 * 		       <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 *
 * 		       <p>ACM Private CAA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit
 * 				Reports</a>.</p>
 */
export class CreateCertificateAuthorityAuditReportCommand extends $Command<
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCertificateAuthorityAuditReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCertificateAuthorityAuditReportCommandInput, CreateCertificateAuthorityAuditReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "CreateCertificateAuthorityAuditReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityAuditReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityAuditReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCertificateAuthorityAuditReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCertificateAuthorityAuditReportCommandOutput> {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
