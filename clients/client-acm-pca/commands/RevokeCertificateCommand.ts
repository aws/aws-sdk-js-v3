import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { RevokeCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RevokeCertificateCommand,
  serializeAws_json1_1RevokeCertificateCommand,
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

export type RevokeCertificateCommandInput = RevokeCertificateRequest;
export type RevokeCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Revokes a certificate that was issued inside ACM Private CA. If you enable a certificate
 * 			revocation list (CRL) when you create or update your private CA, information about the
 * 			revoked certificates will be included in the CRL. ACM Private CA writes the CRL to an S3 bucket
 * 			that you specify. A CRL is typically updated approximately 30 minutes after a
 * 			certificate is revoked. If for any reason the CRL update fails, ACM Private CA attempts makes
 * 			further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms for the
 * 			metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For more
 * 			information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p>
 * 		       <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 * 		       <p>ACM Private CA also writes revocation information to the audit report. For more information,
 * 			see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p>
 * 		       <note>
 * 			         <p>You cannot revoke a root CA self-signed certificate.</p>
 * 		       </note>
 */
export class RevokeCertificateCommand extends $Command<
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeCertificateCommandInput) {
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
  ): Handler<RevokeCertificateCommandInput, RevokeCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "RevokeCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokeCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeCertificateCommandOutput> {
    return deserializeAws_json1_1RevokeCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
