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

import { SendBulkEmailRequest, SendBulkEmailResponse } from "../models/models_0";
import { de_SendBulkEmailCommand, se_SendBulkEmailCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendBulkEmailCommand}.
 */
export interface SendBulkEmailCommandInput extends SendBulkEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendBulkEmailCommand}.
 */
export interface SendBulkEmailCommandOutput extends SendBulkEmailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Composes an email message to multiple destinations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendBulkEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendBulkEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // SendBulkEmailRequest
 *   FromEmailAddress: "STRING_VALUE",
 *   FromEmailAddressIdentityArn: "STRING_VALUE",
 *   ReplyToAddresses: [ // EmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   FeedbackForwardingEmailAddress: "STRING_VALUE",
 *   FeedbackForwardingEmailAddressIdentityArn: "STRING_VALUE",
 *   DefaultEmailTags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DefaultContent: { // BulkEmailContent
 *     Template: { // Template
 *       TemplateName: "STRING_VALUE",
 *       TemplateArn: "STRING_VALUE",
 *       TemplateData: "STRING_VALUE",
 *     },
 *   },
 *   BulkEmailEntries: [ // BulkEmailEntryList // required
 *     { // BulkEmailEntry
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
 *       ReplacementEmailContent: { // ReplacementEmailContent
 *         ReplacementTemplate: { // ReplacementTemplate
 *           ReplacementTemplateData: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new SendBulkEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendBulkEmailResponse
 * //   BulkEmailEntryResults: [ // BulkEmailEntryResultList // required
 * //     { // BulkEmailEntryResult
 * //       Status: "SUCCESS" || "MESSAGE_REJECTED" || "MAIL_FROM_DOMAIN_NOT_VERIFIED" || "CONFIGURATION_SET_NOT_FOUND" || "TEMPLATE_NOT_FOUND" || "ACCOUNT_SUSPENDED" || "ACCOUNT_THROTTLED" || "ACCOUNT_DAILY_QUOTA_EXCEEDED" || "INVALID_SENDING_POOL_NAME" || "ACCOUNT_SENDING_PAUSED" || "CONFIGURATION_SET_SENDING_PAUSED" || "INVALID_PARAMETER" || "TRANSIENT_FAILURE" || "FAILED",
 * //       Error: "STRING_VALUE",
 * //       MessageId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SendBulkEmailCommandInput - {@link SendBulkEmailCommandInput}
 * @returns {@link SendBulkEmailCommandOutput}
 * @see {@link SendBulkEmailCommandInput} for command's `input` shape.
 * @see {@link SendBulkEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AccountSuspendedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The message can't be sent because it contains invalid content.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link SendingPausedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class SendBulkEmailCommand extends $Command<
  SendBulkEmailCommandInput,
  SendBulkEmailCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: SendBulkEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkEmailCommandInput, SendBulkEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendBulkEmailCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "SendBulkEmailCommand";
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
  private serialize(input: SendBulkEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendBulkEmailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkEmailCommandOutput> {
    return de_SendBulkEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
