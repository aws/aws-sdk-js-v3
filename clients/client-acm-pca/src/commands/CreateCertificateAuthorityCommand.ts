// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityRequestFilterSensitiveLog,
  CreateCertificateAuthorityResponse,
  CreateCertificateAuthorityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityCommand,
  serializeAws_json1_1CreateCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCertificateAuthorityCommandInput extends CreateCertificateAuthorityRequest {}
export interface CreateCertificateAuthorityCommandOutput extends CreateCertificateAuthorityResponse, __MetadataBearer {}

/**
 * <p>Creates a root or subordinate private certificate authority (CA). You must specify the
 * 			CA configuration, an optional configuration for Online Certificate Status Protocol
 * 			(OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional
 * 			idempotency token to avoid accidental creation of multiple CAs. The CA configuration
 * 			specifies the name of the algorithm and key size to be used to create the CA private
 * 			key, the type of signing algorithm that the CA uses, and X.500 subject information. The
 * 			OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL
 * 			configuration specifies the CRL expiration period in days (the validity period of the
 * 			CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3
 * 			bucket that is included in certificates issued by the CA. If successful, this action
 * 			returns the Amazon Resource Name (ARN) of the CA.</p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 *          <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new CreateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class CreateCertificateAuthorityCommand extends $Command<
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "CreateCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityResponseFilterSensitiveLog,
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
