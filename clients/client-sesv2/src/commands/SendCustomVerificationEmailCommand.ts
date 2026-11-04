// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/models_1";
import { SendCustomVerificationEmail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendCustomVerificationEmailCommand}.
 */
export interface SendCustomVerificationEmailCommandInput extends SendCustomVerificationEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendCustomVerificationEmailCommand}.
 */
export interface SendCustomVerificationEmailCommandOutput extends SendCustomVerificationEmailResponse, __MetadataBearer {}

/**
 * Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.
 *
 * To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see [Using custom verification email templates](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendCustomVerificationEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // SendCustomVerificationEmailRequest
 *   EmailAddress: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new SendCustomVerificationEmailCommand(input);
 * const response = await client.send(command);
 * // { // SendCustomVerificationEmailResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendCustomVerificationEmailCommandInput - {@link SendCustomVerificationEmailCommandInput}
 * @returns {@link SendCustomVerificationEmailCommandOutput}
 * @see {@link SendCustomVerificationEmailCommandInput} for command's `input` shape.
 * @see {@link SendCustomVerificationEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * There are too many instances of the specified resource type.
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *
 * The message can't be sent because the sending domain isn't verified.
 *
 * @throws {@link MessageRejected} (client fault)
 *
 * The message can't be sent because it contains invalid content.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link SendingPausedException} (client fault)
 *
 * The message can't be sent because the account's ability to send email is currently paused.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class SendCustomVerificationEmailCommand extends command<SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput>(
  _ep0,
  _mw0,
  "SendCustomVerificationEmail",
  SendCustomVerificationEmail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendCustomVerificationEmailRequest;
      output: SendCustomVerificationEmailResponse;
    };
    sdk: {
      input: SendCustomVerificationEmailCommandInput;
      output: SendCustomVerificationEmailCommandOutput;
    };
  };
}
