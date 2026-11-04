// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendTemplatedEmailRequest, SendTemplatedEmailResponse } from "../models/models_0";
import { SendTemplatedEmail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendTemplatedEmailCommand}.
 */
export interface SendTemplatedEmailCommandInput extends SendTemplatedEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendTemplatedEmailCommand}.
 */
export interface SendTemplatedEmailCommandOutput extends SendTemplatedEmailResponse, __MetadataBearer {}

/**
 * Composes an email message using an email template and immediately queues it for sending.
 *
 * To send email using this operation, your call must meet the following requirements:
 *
 * - The call must refer to an existing email template. You can create email templates using the CreateTemplate operation.
 * - The message must be sent from a verified email address or domain.
 * - If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see [Verifying Email Addresses and Domains](https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html) in the *Amazon SES Developer Guide.*
 * - The maximum message size is 10 MB.
 * - Calls to the `SendTemplatedEmail` operation may only include one `Destination` parameter. A destination is a set of recipients that receives the same version of the email. The `Destination` parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.
 * - The `Destination` parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format *UserName@[SubDomain.]Domain.TopLevelDomain*), the entire message is rejected, even if the message contains other recipients that are valid.
 *
 * > **Important:**
 * >
 * > If your call to the `SendTemplatedEmail` operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.
 * >
 * > For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see [Sending Personalized Email Using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html) in the *Amazon Simple Email Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendTemplatedEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // SendTemplatedEmailRequest
 *   Source: "STRING_VALUE", // required
 *   Destination: { // Destination
 *     ToAddresses: [ // AddressList
 *       "STRING_VALUE",
 *     ],
 *     CcAddresses: [
 *       "STRING_VALUE",
 *     ],
 *     BccAddresses: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReplyToAddresses: [
 *     "STRING_VALUE",
 *   ],
 *   ReturnPath: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   ReturnPathArn: "STRING_VALUE",
 *   Tags: [ // MessageTagList
 *     { // MessageTag
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConfigurationSetName: "STRING_VALUE",
 *   Template: "STRING_VALUE", // required
 *   TemplateArn: "STRING_VALUE",
 *   TemplateData: "STRING_VALUE", // required
 * };
 * const command = new SendTemplatedEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendTemplatedEmailResponse
 * //   MessageId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendTemplatedEmailCommandInput - {@link SendTemplatedEmailCommandInput}
 * @returns {@link SendTemplatedEmailCommandOutput}
 * @see {@link SendTemplatedEmailCommandInput} for command's `input` shape.
 * @see {@link SendTemplatedEmailCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AccountSendingPausedException} (client fault)
 *
 * Indicates that email sending is disabled for your entire Amazon SES account.
 *
 * You can enable or disable email sending for your Amazon SES account using UpdateAccountSendingEnabled.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *
 * Indicates that the configuration set does not exist.
 *
 * @throws {@link ConfigurationSetSendingPausedException} (client fault)
 *
 * Indicates that email sending is disabled for the configuration set.
 *
 * You can enable or disable email sending for a configuration set using UpdateConfigurationSetSendingEnabled.
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *
 * Indicates that the message could not be sent because Amazon SES could not read the MX record required to use the specified MAIL FROM domain. For information about editing the custom MAIL FROM domain settings for an identity, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html).
 *
 * @throws {@link MessageRejected} (client fault)
 *
 * Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *
 * Indicates that the Template object you specified does not exist in your Amazon SES account.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @public
 */
export class SendTemplatedEmailCommand extends command<SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput>(
  _ep0,
  _mw0,
  "SendTemplatedEmail",
  SendTemplatedEmail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendTemplatedEmailRequest;
      output: SendTemplatedEmailResponse;
    };
    sdk: {
      input: SendTemplatedEmailCommandInput;
      output: SendTemplatedEmailCommandOutput;
    };
  };
}
