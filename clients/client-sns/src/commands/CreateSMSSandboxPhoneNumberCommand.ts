// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSMSSandboxPhoneNumberInput,
  CreateSMSSandboxPhoneNumberInputFilterSensitiveLog,
  CreateSMSSandboxPhoneNumberResult,
} from "../models/models_0";
import { de_CreateSMSSandboxPhoneNumberCommand, se_CreateSMSSandboxPhoneNumberCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a
 *             one-time password (OTP) to that phone number.</p>
 *          <p>When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
 *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 *                 Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 *                 SMS messages only to verified destination phone numbers. For more information, including how to
 *                 move out of the sandbox to send messages without restrictions,
 *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
 *                 the <i>Amazon SNS Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateSMSSandboxPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
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
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link OptedOutException} (client fault)
 *  <p>Indicates that the specified phone number opted out of receiving SMS messages from
 *             your Amazon Web Services account. You can't send SMS messages to phone numbers that opt out.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link UserErrorException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class CreateSMSSandboxPhoneNumberCommand extends $Command
  .classBuilder<
    CreateSMSSandboxPhoneNumberCommandInput,
    CreateSMSSandboxPhoneNumberCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "CreateSMSSandboxPhoneNumber", {})
  .n("SNSClient", "CreateSMSSandboxPhoneNumberCommand")
  .f(CreateSMSSandboxPhoneNumberInputFilterSensitiveLog, void 0)
  .ser(se_CreateSMSSandboxPhoneNumberCommand)
  .de(de_CreateSMSSandboxPhoneNumberCommand)
  .build() {
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
