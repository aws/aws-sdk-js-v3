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

import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { ResendValidationEmailRequest } from "../models/models_0";
import { de_ResendValidationEmailCommand, se_ResendValidationEmailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResendValidationEmailCommand}.
 */
export interface ResendValidationEmailCommandInput extends ResendValidationEmailRequest {}
/**
 * @public
 *
 * The output of {@link ResendValidationEmailCommand}.
 */
export interface ResendValidationEmailCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Resends the email that requests domain ownership validation. The domain owner or an
 *       authorized representative must approve the ACM certificate before it can be issued. The
 *       certificate can be approved by clicking a link in the mail to navigate to the Amazon
 *       certificate approval website and then clicking <b>I Approve</b>.
 *       However, the validation email can be blocked by spam filters. Therefore, if you do not receive
 *       the original mail, you can request that the mail be resent within 72 hours of requesting the
 *       ACM certificate. If more than 72 hours have elapsed since your original request or since
 *       your last attempt to resend validation mail, you must request a new certificate. For more
 *       information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ResendValidationEmailCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ResendValidationEmailCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const input = { // ResendValidationEmailRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   ValidationDomain: "STRING_VALUE", // required
 * };
 * const command = new ResendValidationEmailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResendValidationEmailCommandInput - {@link ResendValidationEmailCommandInput}
 * @returns {@link ResendValidationEmailCommandOutput}
 * @see {@link ResendValidationEmailCommandInput} for command's `input` shape.
 * @see {@link ResendValidationEmailCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidDomainValidationOptionsException} (client fault)
 *  <p>One or more values in the <a>DomainValidationOption</a> structure is
 *       incorrect.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>Processing has reached an invalid state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 */
export class ResendValidationEmailCommand extends $Command<
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
  ACMClientResolvedConfig
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
  constructor(readonly input: ResendValidationEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResendValidationEmailCommandInput, ResendValidationEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResendValidationEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "ResendValidationEmailCommand";
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
  private serialize(input: ResendValidationEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResendValidationEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResendValidationEmailCommandOutput> {
    return de_ResendValidationEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
