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
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportRequestFilterSensitiveLog,
  CreateCertificateAuthorityAuditReportResponse,
  CreateCertificateAuthorityAuditReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
  serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCertificateAuthorityAuditReportCommandInput
  extends CreateCertificateAuthorityAuditReportRequest {}
export interface CreateCertificateAuthorityAuditReportCommandOutput
  extends CreateCertificateAuthorityAuditReportResponse,
    __MetadataBearer {}

/**
 * <p>Creates an audit report that lists every time that your CA private key is used. The
 * 			report is saved in the Amazon S3 bucket that you specify on input. The <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> actions use
 * 			the private key. </p>
 *          <note>
 *             <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access
 * 						policies for CRLs in Amazon S3</a>.</p>
 *          </note>
 *          <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaAuditReport.html#audit-report-encryption">Encrypting Your Audit
 * 				Reports</a>.</p>
 *          <note>
 *             <p>You can generate a maximum of one report every 30 minutes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreateCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new CreateCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class CreateCertificateAuthorityAuditReportCommand extends $Command<
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateAuthorityAuditReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "CreateCertificateAuthorityAuditReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateAuthorityAuditReportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateAuthorityAuditReportResponseFilterSensitiveLog,
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
