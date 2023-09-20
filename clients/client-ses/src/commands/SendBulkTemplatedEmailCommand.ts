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

import { SendBulkTemplatedEmailRequest, SendBulkTemplatedEmailResponse } from "../models/models_0";
import { de_SendBulkTemplatedEmailCommand, se_SendBulkTemplatedEmailCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendBulkTemplatedEmailCommand}.
 */
export interface SendBulkTemplatedEmailCommandInput extends SendBulkTemplatedEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendBulkTemplatedEmailCommand}.
 */
export interface SendBulkTemplatedEmailCommandOutput extends SendBulkTemplatedEmailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Composes an email message to multiple destinations. The message body is created using
 *             an email template.</p>
 *          <p>To send email using this operation, your call must meet the following
 *             requirements:</p>
 *          <ul>
 *             <li>
 *                <p>The call must refer to an existing email template. You can create email
 *                     templates using <a>CreateTemplate</a>.</p>
 *             </li>
 *             <li>
 *                <p>The message must be sent from a verified email address or domain.</p>
 *             </li>
 *             <li>
 *                <p>If your account is still in the Amazon SES sandbox, you may send only to verified
 *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">Verifying Email
 *                         Addresses and Domains</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>The maximum message size is 10 MB.</p>
 *             </li>
 *             <li>
 *                <p>Each <code>Destination</code> parameter must include at least one recipient
 *                     email address. The recipient address can be a To: address, a CC: address, or a
 *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
 *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
 *                     entire message is rejected, even if the message contains other recipients that
 *                     are valid.</p>
 *             </li>
 *             <li>
 *                <p>The message may not include more than 50 recipients, across the To:, CC: and
 *                     BCC: fields. If you need to send an email message to a larger audience, you can
 *                     divide your recipient list into groups of 50 or fewer, and then call the
 *                         <code>SendBulkTemplatedEmail</code> operation several times to send the
 *                     message to each group.</p>
 *             </li>
 *             <li>
 *                <p>The number of destinations you can contact in a single call can be limited by
 *                     your account's maximum sending rate.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendBulkTemplatedEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendBulkTemplatedEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SendBulkTemplatedEmailRequest
 *   Source: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE",
 *   ReplyToAddresses: [ // AddressList
 *     "STRING_VALUE",
 *   ],
 *   ReturnPath: "STRING_VALUE",
 *   ReturnPathArn: "STRING_VALUE",
 *   ConfigurationSetName: "STRING_VALUE",
 *   DefaultTags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Template: "STRING_VALUE", // required
 *   TemplateArn: "STRING_VALUE",
 *   DefaultTemplateData: "STRING_VALUE",
 *   Destinations: [ // BulkEmailDestinationList // required
 *     { // BulkEmailDestination
 *       Destination: { // Destination
 *         ToAddresses: [
 *           "STRING_VALUE",
 *         ],
 *         CcAddresses: [
 *           "STRING_VALUE",
 *         ],
 *         BccAddresses: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ReplacementTags: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       ReplacementTemplateData: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SendBulkTemplatedEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendBulkTemplatedEmailResponse
 * //   Status: [ // BulkEmailDestinationStatusList // required
 * //     { // BulkEmailDestinationStatus
 * //       Status: "Success" || "MessageRejected" || "MailFromDomainNotVerified" || "ConfigurationSetDoesNotExist" || "TemplateDoesNotExist" || "AccountSuspended" || "AccountThrottled" || "AccountDailyQuotaExceeded" || "InvalidSendingPoolName" || "AccountSendingPaused" || "ConfigurationSetSendingPaused" || "InvalidParameterValue" || "TransientFailure" || "Failed",
 * //       Error: "STRING_VALUE",
 * //       MessageId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SendBulkTemplatedEmailCommandInput - {@link SendBulkTemplatedEmailCommandInput}
 * @returns {@link SendBulkTemplatedEmailCommandOutput}
 * @see {@link SendBulkTemplatedEmailCommandInput} for command's `input` shape.
 * @see {@link SendBulkTemplatedEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AccountSendingPausedException} (client fault)
 *  <p>Indicates that email sending is disabled for your entire Amazon SES account.</p>
 *          <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link ConfigurationSetSendingPausedException} (client fault)
 *  <p>Indicates that email sending is disabled for the configuration set.</p>
 *          <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p> Indicates that the message could not be sent because Amazon SES could not read the MX
 *             record required to use the specified MAIL FROM domain. For information about editing the
 *             custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>Indicates that the action failed, and the message could not be sent. Check the error
 *             stack for more information about what caused the error.</p>
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *  <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class SendBulkTemplatedEmailCommand extends $Command<
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: SendBulkTemplatedEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendBulkTemplatedEmailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendBulkTemplatedEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "SendBulkTemplatedEmail",
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
  private serialize(input: SendBulkTemplatedEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendBulkTemplatedEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkTemplatedEmailCommandOutput> {
    return de_SendBulkTemplatedEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
