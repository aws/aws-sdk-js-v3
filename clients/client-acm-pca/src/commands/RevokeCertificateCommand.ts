// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { RevokeCertificateRequest } from "../models/models_0";
import { de_RevokeCertificateCommand, se_RevokeCertificateCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandInput extends RevokeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RevokeCertificateCommand}.
 */
export interface RevokeCertificateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Revokes a certificate that was issued inside Amazon Web Services Private CA. If you enable a certificate
 * 			revocation list (CRL) when you create or update your private CA, information about the
 * 			revoked certificates will be included in the CRL. Amazon Web Services Private CA writes the CRL to an S3
 * 			bucket that you specify. A CRL is typically updated approximately 30 minutes after a
 * 			certificate is revoked. If for any reason the CRL update fails, Amazon Web Services Private CA attempts
 * 			makes further attempts every 15 minutes. With Amazon CloudWatch, you can create alarms
 * 			for the metrics <code>CRLGenerated</code> and <code>MisconfiguredCRLBucket</code>. For
 * 			more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCloudWatch.html">Supported CloudWatch Metrics</a>.</p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 *          <p>Amazon Web Services Private CA also writes revocation information to the audit report. For more
 * 			information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a>.</p>
 *          <note>
 *             <p>You cannot revoke a root CA self-signed certificate.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RevokeCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RevokeCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // RevokeCertificateRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   CertificateSerial: "STRING_VALUE", // required
 *   RevocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CERTIFICATE_AUTHORITY_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERSEDED" || "CESSATION_OF_OPERATION" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE", // required
 * };
 * const command = new RevokeCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeCertificateCommandInput - {@link RevokeCertificateCommandInput}
 * @returns {@link RevokeCertificateCommandOutput}
 * @see {@link RevokeCertificateCommandInput} for command's `input` shape.
 * @see {@link RevokeCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request action cannot be performed or is prohibited.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine
 * 			the quota that was exceeded.</p>
 *
 * @throws {@link RequestAlreadyProcessedException} (client fault)
 *  <p>Your request has already been completed.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link RequestInProgressException} (client fault)
 *  <p>Your request is already in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 */
export class RevokeCertificateCommand extends $Command<
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "RevokeCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ACMPrivateCA",
        operation: "RevokeCertificate",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RevokeCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeCertificateCommandOutput> {
    return de_RevokeCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
