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
import { GetCertificateRequest, GetCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateCommand,
  serializeAws_json1_1GetCertificateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetCertificateCommand}.
 */
export interface GetCertificateCommandInput extends GetCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificateCommand}.
 */
export interface GetCertificateCommandOutput extends GetCertificateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a certificate from your private CA or one that has been shared with you. The
 * 			ARN of the certificate is returned when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action. You
 * 			must specify both the ARN of your private CA and the ARN of the issued certificate when
 * 			calling the <b>GetCertificate</b> action. You can retrieve the
 * 			certificate if it is in the <b>ISSUED</b> state. You can call
 * 			the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action to create a report that
 * 			contains information about all of the certificates issued and revoked by your private
 * 			CA. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = {
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new GetCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetCertificateCommandInput - {@link GetCertificateCommandInput}
 * @returns {@link GetCertificateCommandOutput}
 * @see {@link GetCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
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
 *
 */
export class GetCertificateCommand extends $Command<
  GetCertificateCommandInput,
  GetCertificateCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "GetCertificateCommand";
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
  private serialize(input: GetCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCertificateCommandOutput> {
    return deserializeAws_json1_1GetCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
