// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetPlatformApplicationAttributesInput } from "../models/models_0";
import {
  de_SetPlatformApplicationAttributesCommand,
  se_SetPlatformApplicationAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetPlatformApplicationAttributesCommand}.
 */
export interface SetPlatformApplicationAttributesCommandInput extends SetPlatformApplicationAttributesInput {}
/**
 * @public
 *
 * The output of {@link SetPlatformApplicationAttributesCommand}.
 */
export interface SetPlatformApplicationAttributesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. For information on configuring
 *             attributes for message delivery status, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-msg-status.html">Using Amazon SNS Application Attributes for
 *                 Message Delivery Status</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetPlatformApplicationAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // SetPlatformApplicationAttributesInput
 *   PlatformApplicationArn: "STRING_VALUE", // required
 *   Attributes: { // MapStringToString // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetPlatformApplicationAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetPlatformApplicationAttributesCommandInput - {@link SetPlatformApplicationAttributesCommandInput}
 * @returns {@link SetPlatformApplicationAttributesCommandOutput}
 * @see {@link SetPlatformApplicationAttributesCommandInput} for command's `input` shape.
 * @see {@link SetPlatformApplicationAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class SetPlatformApplicationAttributesCommand extends $Command
  .classBuilder<
    SetPlatformApplicationAttributesCommandInput,
    SetPlatformApplicationAttributesCommandOutput,
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
  .s("AmazonSimpleNotificationService", "SetPlatformApplicationAttributes", {})
  .n("SNSClient", "SetPlatformApplicationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_SetPlatformApplicationAttributesCommand)
  .de(de_SetPlatformApplicationAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetPlatformApplicationAttributesInput;
      output: {};
    };
    sdk: {
      input: SetPlatformApplicationAttributesCommandInput;
      output: SetPlatformApplicationAttributesCommandOutput;
    };
  };
}
