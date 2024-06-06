// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteSMSSandboxPhoneNumberInput,
  DeleteSMSSandboxPhoneNumberInputFilterSensitiveLog,
  DeleteSMSSandboxPhoneNumberResult,
} from "../models/models_0";
import { de_DeleteSMSSandboxPhoneNumberCommand, se_DeleteSMSSandboxPhoneNumberCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSMSSandboxPhoneNumberCommand}.
 */
export interface DeleteSMSSandboxPhoneNumberCommandInput extends DeleteSMSSandboxPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link DeleteSMSSandboxPhoneNumberCommand}.
 */
export interface DeleteSMSSandboxPhoneNumberCommandOutput extends DeleteSMSSandboxPhoneNumberResult, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Web Services account's verified or pending phone number from the SMS
 *             sandbox.</p>
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
 * import { SNSClient, DeleteSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteSMSSandboxPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // DeleteSMSSandboxPhoneNumberInput
 *   PhoneNumber: "STRING_VALUE", // required
 * };
 * const command = new DeleteSMSSandboxPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSMSSandboxPhoneNumberCommandInput - {@link DeleteSMSSandboxPhoneNumberCommandInput}
 * @returns {@link DeleteSMSSandboxPhoneNumberCommandOutput}
 * @see {@link DeleteSMSSandboxPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteSMSSandboxPhoneNumberCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Can’t perform the action on the specified resource. Make sure that the resource
 *             exists.</p>
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
 * @public
 */
export class DeleteSMSSandboxPhoneNumberCommand extends $Command
  .classBuilder<
    DeleteSMSSandboxPhoneNumberCommandInput,
    DeleteSMSSandboxPhoneNumberCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "DeleteSMSSandboxPhoneNumber", {})
  .n("SNSClient", "DeleteSMSSandboxPhoneNumberCommand")
  .f(DeleteSMSSandboxPhoneNumberInputFilterSensitiveLog, void 0)
  .ser(se_DeleteSMSSandboxPhoneNumberCommand)
  .de(de_DeleteSMSSandboxPhoneNumberCommand)
  .build() {}
