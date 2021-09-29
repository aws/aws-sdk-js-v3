import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { GetCertificateRequest, GetCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateCommand,
  serializeAws_json1_1GetCertificateCommand,
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

export interface GetCertificateCommandInput extends GetCertificateRequest {}
export interface GetCertificateCommandOutput extends GetCertificateResponse, __MetadataBearer {}

/**
 * <p>Retrieves a certificate from your private CA or one that has been shared with you. The
 * 			ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You
 * 			must specify both the ARN of your private CA and the ARN of the issued certificate when
 * 			calling the <b>GetCertificate</b> action. You can retrieve the
 * 			certificate if it is in the <b>ISSUED</b> state. You can call
 * 			the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that
 * 			contains information about all of the certificates issued and revoked by your private
 * 			CA. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new GetCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCertificateCommand extends $Command<
  GetCertificateCommandInput,
  GetCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCertificateCommandInput) {
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
  ): Handler<GetCertificateCommandInput, GetCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "GetCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCertificateCommandOutput> {
    return deserializeAws_json1_1GetCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
