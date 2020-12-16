import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { CreateCertificateAuthorityRequest, CreateCertificateAuthorityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityCommand,
  serializeAws_json1_1CreateCertificateAuthorityCommand,
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

export type CreateCertificateAuthorityCommandInput = CreateCertificateAuthorityRequest;
export type CreateCertificateAuthorityCommandOutput = CreateCertificateAuthorityResponse & __MetadataBearer;

/**
 * <p>Creates a root or subordinate private certificate authority (CA). You must specify the
 * 			CA configuration, the certificate revocation list (CRL) configuration, the CA type, and
 * 			an optional idempotency token to avoid accidental creation of multiple CAs. The CA
 * 			configuration specifies the name of the algorithm and key size to be used to create the
 * 			CA private key, the type of signing algorithm that the CA uses, and X.500 subject
 * 			information. The CRL configuration specifies the CRL expiration period in days (the
 * 			validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME
 * 			alias for the S3 bucket that is included in certificates issued by the CA. If
 * 			successful, this action returns the Amazon Resource Name (ARN) of the CA.</p>
 * 		       <p>ACM Private CAA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 * 		       <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 */
export class CreateCertificateAuthorityCommand extends $Command<
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCertificateAuthorityCommandInput) {
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
  ): Handler<CreateCertificateAuthorityCommandInput, CreateCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "CreateCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1CreateCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
