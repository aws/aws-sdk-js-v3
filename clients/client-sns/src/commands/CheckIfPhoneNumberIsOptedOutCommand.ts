// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/models_0";
import { CheckIfPhoneNumberIsOptedOut } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckIfPhoneNumberIsOptedOutCommand}.
 */
export interface CheckIfPhoneNumberIsOptedOutCommandInput extends CheckIfPhoneNumberIsOptedOutInput {}
/**
 * @public
 *
 * The output of {@link CheckIfPhoneNumberIsOptedOutCommand}.
 */
export interface CheckIfPhoneNumberIsOptedOutCommandOutput
  extends CheckIfPhoneNumberIsOptedOutResponse,
    __MetadataBearer {}

/**
 * <p>Accepts a phone number and indicates whether the phone holder has opted out of
 *             receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number
 *             that is opted out.</p>
 *          <p>To resume sending messages, you can opt in the number by using the
 *                 <code>OptInPhoneNumber</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CheckIfPhoneNumberIsOptedOutInput
 *   phoneNumber: "STRING_VALUE", // required
 * };
 * const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
 * const response = await client.send(command);
 * // { // CheckIfPhoneNumberIsOptedOutResponse
 * //   isOptedOut: true || false,
 * // };
 *
 * ```
 *
 * @param CheckIfPhoneNumberIsOptedOutCommandInput - {@link CheckIfPhoneNumberIsOptedOutCommandInput}
 * @returns {@link CheckIfPhoneNumberIsOptedOutCommandOutput}
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandInput} for command's `input` shape.
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class CheckIfPhoneNumberIsOptedOutCommand extends $Command
  .classBuilder<
    CheckIfPhoneNumberIsOptedOutCommandInput,
    CheckIfPhoneNumberIsOptedOutCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "CheckIfPhoneNumberIsOptedOut", {})
  .n("SNSClient", "CheckIfPhoneNumberIsOptedOutCommand")
  .sc(CheckIfPhoneNumberIsOptedOut)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckIfPhoneNumberIsOptedOutInput;
      output: CheckIfPhoneNumberIsOptedOutResponse;
    };
    sdk: {
      input: CheckIfPhoneNumberIsOptedOutCommandInput;
      output: CheckIfPhoneNumberIsOptedOutCommandOutput;
    };
  };
}
