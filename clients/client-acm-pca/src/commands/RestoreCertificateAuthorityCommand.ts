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
  RestoreCertificateAuthorityRequest,
  RestoreCertificateAuthorityRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RestoreCertificateAuthorityCommand,
  serializeAws_json1_1RestoreCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";

export interface RestoreCertificateAuthorityCommandInput extends RestoreCertificateAuthorityRequest {}
export interface RestoreCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * <p>Restores a certificate authority (CA) that is in the <code>DELETED</code> state. You
 * 			can restore a CA during the period that you defined in the <b>PermanentDeletionTimeInDays</b> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthority.html">DeleteCertificateAuthority</a> action. Currently, you can specify 7 to 30 days.
 * 			If you did not specify a <b>PermanentDeletionTimeInDays</b>
 * 			value, by default you can restore the CA at any time in a 30 day period. You can check
 * 			the time remaining in the restoration period of a private CA in the <code>DELETED</code>
 * 			state by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DescribeCertificateAuthority.html">DescribeCertificateAuthority</a> or <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> actions. The status of a restored CA is set to
 * 			its pre-deletion status when the <b>RestoreCertificateAuthority</b> action returns. To change its status to
 * 				<code>ACTIVE</code>, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. If the private CA was in the
 * 				<code>PENDING_CERTIFICATE</code> state at deletion, you must use the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import a certificate
 * 			authority into the private CA before it can be activated. You cannot restore a CA after
 * 			the restoration period has ended.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, RestoreCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, RestoreCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new RestoreCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link RestoreCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 */
export class RestoreCertificateAuthorityCommand extends $Command<
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
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

  constructor(readonly input: RestoreCertificateAuthorityCommandInput) {
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
  ): Handler<RestoreCertificateAuthorityCommandInput, RestoreCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreCertificateAuthorityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "RestoreCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreCertificateAuthorityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreCertificateAuthorityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreCertificateAuthorityCommandOutput> {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
