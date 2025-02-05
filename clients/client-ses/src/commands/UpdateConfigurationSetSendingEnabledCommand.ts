// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConfigurationSetSendingEnabledRequest } from "../models/models_0";
import {
  de_UpdateConfigurationSetSendingEnabledCommand,
  se_UpdateConfigurationSetSendingEnabledCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandInput extends UpdateConfigurationSetSendingEnabledRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables email sending for messages sent using a specific configuration set
 *             in a given Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms
 *             to temporarily pause email sending for a configuration set when the reputation metrics
 *             for that configuration set (such as your bounce on complaint rate) exceed certain
 *             thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetSendingEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   Enabled: true || false, // required
 * };
 * const command = new UpdateConfigurationSetSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetSendingEnabledCommandInput - {@link UpdateConfigurationSetSendingEnabledCommandInput}
 * @returns {@link UpdateConfigurationSetSendingEnabledCommandOutput}
 * @see {@link UpdateConfigurationSetSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example UpdateConfigurationSetReputationMetricsEnabled
 * ```javascript
 * // Set the sending enabled flag for a specific configuration set.
 * const input = {
 *   "ConfigurationSetName": "foo",
 *   "Enabled": true
 * };
 * const command = new UpdateConfigurationSetSendingEnabledCommand(input);
 * await client.send(command);
 * // example id: updateconfigurationsetsendingenabled-2362747741333
 * ```
 *
 */
export class UpdateConfigurationSetSendingEnabledCommand extends $Command
  .classBuilder<
    UpdateConfigurationSetSendingEnabledCommandInput,
    UpdateConfigurationSetSendingEnabledCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "UpdateConfigurationSetSendingEnabled", {})
  .n("SESClient", "UpdateConfigurationSetSendingEnabledCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfigurationSetSendingEnabledCommand)
  .de(de_UpdateConfigurationSetSendingEnabledCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationSetSendingEnabledRequest;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationSetSendingEnabledCommandInput;
      output: UpdateConfigurationSetSendingEnabledCommandOutput;
    };
  };
}
