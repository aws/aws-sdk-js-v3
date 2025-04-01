// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProtectConfigurationCountryRuleSetRequest,
  UpdateProtectConfigurationCountryRuleSetResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_UpdateProtectConfigurationCountryRuleSetCommand,
  se_UpdateProtectConfigurationCountryRuleSetCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProtectConfigurationCountryRuleSetCommand}.
 */
export interface UpdateProtectConfigurationCountryRuleSetCommandInput
  extends UpdateProtectConfigurationCountryRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProtectConfigurationCountryRuleSetCommand}.
 */
export interface UpdateProtectConfigurationCountryRuleSetCommandOutput
  extends UpdateProtectConfigurationCountryRuleSetResult,
    __MetadataBearer {}

/**
 * <p>Update a country rule set to <code>ALLOW</code> or <code>BLOCK</code> messages to be sent to the specified destination counties. You can update one or multiple countries at a time. The updates are only applied to the specified NumberCapability type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateProtectConfigurationCountryRuleSetCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateProtectConfigurationCountryRuleSetCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateProtectConfigurationCountryRuleSetRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   NumberCapability: "STRING_VALUE", // required
 *   CountryRuleSetUpdates: { // ProtectConfigurationCountryRuleSet // required
 *     "<keys>": { // ProtectConfigurationCountryRuleSetInformation
 *       ProtectStatus: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateProtectConfigurationCountryRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProtectConfigurationCountryRuleSetResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   NumberCapability: "STRING_VALUE", // required
 * //   CountryRuleSet: { // ProtectConfigurationCountryRuleSet // required
 * //     "<keys>": { // ProtectConfigurationCountryRuleSetInformation
 * //       ProtectStatus: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProtectConfigurationCountryRuleSetCommandInput - {@link UpdateProtectConfigurationCountryRuleSetCommandInput}
 * @returns {@link UpdateProtectConfigurationCountryRuleSetCommandOutput}
 * @see {@link UpdateProtectConfigurationCountryRuleSetCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectConfigurationCountryRuleSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class UpdateProtectConfigurationCountryRuleSetCommand extends $Command
  .classBuilder<
    UpdateProtectConfigurationCountryRuleSetCommandInput,
    UpdateProtectConfigurationCountryRuleSetCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "UpdateProtectConfigurationCountryRuleSet", {})
  .n("PinpointSMSVoiceV2Client", "UpdateProtectConfigurationCountryRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProtectConfigurationCountryRuleSetCommand)
  .de(de_UpdateProtectConfigurationCountryRuleSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProtectConfigurationCountryRuleSetRequest;
      output: UpdateProtectConfigurationCountryRuleSetResult;
    };
    sdk: {
      input: UpdateProtectConfigurationCountryRuleSetCommandInput;
      output: UpdateProtectConfigurationCountryRuleSetCommandOutput;
    };
  };
}
