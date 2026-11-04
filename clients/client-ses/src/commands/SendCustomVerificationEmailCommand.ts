// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/models_0";
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
 * To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see [Using Custom Verification Email Templates](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendCustomVerificationEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
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
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *
 * Indicates that the configuration set does not exist.
 *
 * @throws {@link CustomVerificationEmailTemplateDoesNotExistException} (client fault)
 *
 * Indicates that a custom verification email template with the name you specified does not exist.
 *
 * @throws {@link FromEmailAddressNotVerifiedException} (client fault)
 *
 * Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email.
 *
 * @throws {@link MessageRejected} (client fault)
 *
 * Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.
 *
 * @throws {@link ProductionAccessNotGrantedException} (client fault)
 *
 * Indicates that the account has not been granted production access.
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
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
