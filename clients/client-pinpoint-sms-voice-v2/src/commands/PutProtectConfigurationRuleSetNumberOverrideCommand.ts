// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutProtectConfigurationRuleSetNumberOverrideRequest,
  PutProtectConfigurationRuleSetNumberOverrideResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { PutProtectConfigurationRuleSetNumberOverride } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface PutProtectConfigurationRuleSetNumberOverrideCommandInput
  extends PutProtectConfigurationRuleSetNumberOverrideRequest {}
/**
 * @public
 *
 * The output of {@link PutProtectConfigurationRuleSetNumberOverrideCommand}.
 */
export interface PutProtectConfigurationRuleSetNumberOverrideCommandOutput
  extends PutProtectConfigurationRuleSetNumberOverrideResult,
    __MetadataBearer {}

/**
 * <p>Create or update a phone number rule override and associate it with a protect configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, PutProtectConfigurationRuleSetNumberOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, PutProtectConfigurationRuleSetNumberOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // PutProtectConfigurationRuleSetNumberOverrideRequest
 *   ClientToken: "STRING_VALUE",
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   DestinationPhoneNumber: "STRING_VALUE", // required
 *   Action: "STRING_VALUE", // required
 *   ExpirationTimestamp: new Date("TIMESTAMP"),
 * };
 * const command = new PutProtectConfigurationRuleSetNumberOverrideCommand(input);
 * const response = await client.send(command);
 * // { // PutProtectConfigurationRuleSetNumberOverrideResult
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
 * @param PutProtectConfigurationRuleSetNumberOverrideCommandInput - {@link PutProtectConfigurationRuleSetNumberOverrideCommandInput}
 * @returns {@link PutProtectConfigurationRuleSetNumberOverrideCommandOutput}
 * @see {@link PutProtectConfigurationRuleSetNumberOverrideCommandInput} for command's `input` shape.
 * @see {@link PutProtectConfigurationRuleSetNumberOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
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
export class PutProtectConfigurationRuleSetNumberOverrideCommand extends $Command
  .classBuilder<
    PutProtectConfigurationRuleSetNumberOverrideCommandInput,
    PutProtectConfigurationRuleSetNumberOverrideCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "PutProtectConfigurationRuleSetNumberOverride", {})
  .n("PinpointSMSVoiceV2Client", "PutProtectConfigurationRuleSetNumberOverrideCommand")
  .sc(PutProtectConfigurationRuleSetNumberOverride)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutProtectConfigurationRuleSetNumberOverrideRequest;
      output: PutProtectConfigurationRuleSetNumberOverrideResult;
    };
    sdk: {
      input: PutProtectConfigurationRuleSetNumberOverrideCommandInput;
      output: PutProtectConfigurationRuleSetNumberOverrideCommandOutput;
    };
  };
}
