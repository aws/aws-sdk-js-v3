// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteProtectConfigurationRuleSetNumberOverrideRequest,
  DeleteProtectConfigurationRuleSetNumberOverrideResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DeleteProtectConfigurationRuleSetNumberOverrideCommand,
  se_DeleteProtectConfigurationRuleSetNumberOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface DeleteProtectConfigurationRuleSetNumberOverrideCommandInput
  extends DeleteProtectConfigurationRuleSetNumberOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput
  extends DeleteProtectConfigurationRuleSetNumberOverrideResult,
    __MetadataBearer {}

/**
 * <p>Permanently delete the protect configuration rule set number override.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteProtectConfigurationRuleSetNumberOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteProtectConfigurationRuleSetNumberOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteProtectConfigurationRuleSetNumberOverrideRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 * };
 * const command = new DeleteProtectConfigurationRuleSetNumberOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProtectConfigurationRuleSetNumberOverrideResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   DestinationPhoneNumber: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   Action: "STRING_VALUE", // required
 * //   IsoCountryCode: "STRING_VALUE",
 * //   ExpirationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteProtectConfigurationRuleSetNumberOverrideCommandInput - {@link DeleteProtectConfigurationRuleSetNumberOverrideCommandInput}
 * @returns {@link DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput}
 * @see {@link DeleteProtectConfigurationRuleSetNumberOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteProtectConfigurationRuleSetNumberOverrideCommand extends $Command
  .classBuilder<
    DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
    DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DeleteProtectConfigurationRuleSetNumberOverride", {})
  .n("PinpointSMSVoiceV2Client", "DeleteProtectConfigurationRuleSetNumberOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProtectConfigurationRuleSetNumberOverrideCommand)
  .de(de_DeleteProtectConfigurationRuleSetNumberOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProtectConfigurationRuleSetNumberOverrideRequest;
      output: DeleteProtectConfigurationRuleSetNumberOverrideResult;
    };
    sdk: {
      input: DeleteProtectConfigurationRuleSetNumberOverrideCommandInput;
      output: DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput;
    };
  };
}
