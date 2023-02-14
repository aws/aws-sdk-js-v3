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
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportRequestFilterSensitiveLog,
  DescribeCertificateAuthorityAuditReportResponse,
  DescribeCertificateAuthorityAuditReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand,
  serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeCertificateAuthorityAuditReportCommandInput
  extends DescribeCertificateAuthorityAuditReportRequest {}
export interface DescribeCertificateAuthorityAuditReportCommandOutput
  extends DescribeCertificateAuthorityAuditReportResponse,
    __MetadataBearer {}

/**
 * <p>Lists information about a specific audit report created by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action. Audit information is created
 * 			every time the certificate authority (CA) private key is used. The private key is used
 * 			when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action or the
 * 				<a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityAuditReportCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new DescribeCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class DescribeCertificateAuthorityAuditReportCommand extends $Command<
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
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

  constructor(readonly input: DescribeCertificateAuthorityAuditReportCommandInput) {
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
  ): Handler<
    DescribeCertificateAuthorityAuditReportCommandInput,
    DescribeCertificateAuthorityAuditReportCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeCertificateAuthorityAuditReportCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "DescribeCertificateAuthorityAuditReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCertificateAuthorityAuditReportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCertificateAuthorityAuditReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCertificateAuthorityAuditReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
