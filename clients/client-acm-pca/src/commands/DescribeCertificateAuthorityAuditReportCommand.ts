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
} from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import {
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
} from "../models/models_0";
import {
  de_DescribeCertificateAuthorityAuditReportCommand,
  se_DescribeCertificateAuthorityAuditReportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandInput
  extends DescribeCertificateAuthorityAuditReportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateAuthorityAuditReportCommand}.
 */
export interface DescribeCertificateAuthorityAuditReportCommandOutput
  extends DescribeCertificateAuthorityAuditReportResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // DescribeCertificateAuthorityAuditReportRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   AuditReportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateAuthorityAuditReportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateAuthorityAuditReportResponse
 * //   AuditReportStatus: "CREATING" || "SUCCESS" || "FAILED",
 * //   S3BucketName: "STRING_VALUE",
 * //   S3Key: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCertificateAuthorityAuditReportCommandInput - {@link DescribeCertificateAuthorityAuditReportCommandInput}
 * @returns {@link DescribeCertificateAuthorityAuditReportCommandOutput}
 * @see {@link DescribeCertificateAuthorityAuditReportCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityAuditReportCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: DescribeCertificateAuthorityAuditReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCertificateAuthorityAuditReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
    return de_DescribeCertificateAuthorityAuditReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
