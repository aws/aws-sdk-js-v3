// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  OptInPhoneNumberInput,
  OptInPhoneNumberInputFilterSensitiveLog,
  OptInPhoneNumberResponse,
} from "../models/models_0";
import { de_OptInPhoneNumberCommand, se_OptInPhoneNumberCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OptInPhoneNumberCommand}.
 */
export interface OptInPhoneNumberCommandInput extends OptInPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link OptInPhoneNumberCommand}.
 */
export interface OptInPhoneNumberCommandOutput extends OptInPhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Use this request to opt in a phone number that is opted out, which enables you to
 *             resume sending SMS messages to the number.</p>
 *          <p>You can opt in a phone number only once every 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, OptInPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, OptInPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // OptInPhoneNumberInput
 *   phoneNumber: "STRING_VALUE", // required
 * };
 * const command = new OptInPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OptInPhoneNumberCommandInput - {@link OptInPhoneNumberCommandInput}
 * @returns {@link OptInPhoneNumberCommandOutput}
 * @see {@link OptInPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link OptInPhoneNumberCommandOutput} for command's `response` shape.
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
 * @public
 */
export class OptInPhoneNumberCommand extends $Command
  .classBuilder<
    OptInPhoneNumberCommandInput,
    OptInPhoneNumberCommandOutput,
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
  .s("AmazonSimpleNotificationService", "OptInPhoneNumber", {})
  .n("SNSClient", "OptInPhoneNumberCommand")
  .f(OptInPhoneNumberInputFilterSensitiveLog, void 0)
  .ser(se_OptInPhoneNumberCommand)
  .de(de_OptInPhoneNumberCommand)
  .build() {}
