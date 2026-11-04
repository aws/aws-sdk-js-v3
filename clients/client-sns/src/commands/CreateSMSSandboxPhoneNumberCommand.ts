// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSMSSandboxPhoneNumberInput, CreateSMSSandboxPhoneNumberResult } from "../models/models_0";
import { CreateSMSSandboxPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSMSSandboxPhoneNumberCommand}.
 */
export interface CreateSMSSandboxPhoneNumberCommandInput extends CreateSMSSandboxPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link CreateSMSSandboxPhoneNumberCommand}.
 */
export interface CreateSMSSandboxPhoneNumberCommandOutput extends CreateSMSSandboxPhoneNumberResult, __MetadataBearer {}

/**
 * Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a one-time password (OTP) to that phone number.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the *SMS sandbox*. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see [SMS sandbox](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html) in the *Amazon SNS Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateSMSSandboxPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CreateSMSSandboxPhoneNumberInput
 *   PhoneNumber: "STRING_VALUE", // required
 *   LanguageCode: "en-US" || "en-GB" || "es-419" || "es-ES" || "de-DE" || "fr-CA" || "fr-FR" || "it-IT" || "ja-JP" || "pt-BR" || "kr-KR" || "zh-CN" || "zh-TW",
 * };
 * const command = new CreateSMSSandboxPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSMSSandboxPhoneNumberCommandInput - {@link CreateSMSSandboxPhoneNumberCommandInput}
 * @returns {@link CreateSMSSandboxPhoneNumberCommandOutput}
 * @see {@link CreateSMSSandboxPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link CreateSMSSandboxPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link OptedOutException} (client fault)
 *
 * Indicates that the specified phone number opted out of receiving SMS messages from your Amazon Web Services account. You can't send SMS messages to phone numbers that opt out.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.
 *
 * @throws {@link UserErrorException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class CreateSMSSandboxPhoneNumberCommand extends command<CreateSMSSandboxPhoneNumberCommandInput, CreateSMSSandboxPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "CreateSMSSandboxPhoneNumber",
  CreateSMSSandboxPhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSMSSandboxPhoneNumberInput;
      output: {};
    };
    sdk: {
      input: CreateSMSSandboxPhoneNumberCommandInput;
      output: CreateSMSSandboxPhoneNumberCommandOutput;
    };
  };
}
