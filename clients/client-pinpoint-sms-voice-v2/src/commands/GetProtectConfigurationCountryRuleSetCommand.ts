// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetProtectConfigurationCountryRuleSetRequest,
  GetProtectConfigurationCountryRuleSetResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { GetProtectConfigurationCountryRuleSet } from "../schemas/schemas_14_Phone";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProtectConfigurationCountryRuleSetCommand}.
 */
export interface GetProtectConfigurationCountryRuleSetCommandInput
  extends GetProtectConfigurationCountryRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link GetProtectConfigurationCountryRuleSetCommand}.
 */
export interface GetProtectConfigurationCountryRuleSetCommandOutput
  extends GetProtectConfigurationCountryRuleSetResult,
    __MetadataBearer {}

/**
 * <p>Retrieve the CountryRuleSet for the specified NumberCapability from a protect configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, GetProtectConfigurationCountryRuleSetCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, GetProtectConfigurationCountryRuleSetCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // GetProtectConfigurationCountryRuleSetRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   NumberCapability: "STRING_VALUE", // required
 * };
 * const command = new GetProtectConfigurationCountryRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // GetProtectConfigurationCountryRuleSetResult
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
 * @param GetProtectConfigurationCountryRuleSetCommandInput - {@link GetProtectConfigurationCountryRuleSetCommandInput}
 * @returns {@link GetProtectConfigurationCountryRuleSetCommandOutput}
 * @see {@link GetProtectConfigurationCountryRuleSetCommandInput} for command's `input` shape.
 * @see {@link GetProtectConfigurationCountryRuleSetCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
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
export class GetProtectConfigurationCountryRuleSetCommand extends $Command
  .classBuilder<
    GetProtectConfigurationCountryRuleSetCommandInput,
    GetProtectConfigurationCountryRuleSetCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "GetProtectConfigurationCountryRuleSet", {})
  .n("PinpointSMSVoiceV2Client", "GetProtectConfigurationCountryRuleSetCommand")
  .sc(GetProtectConfigurationCountryRuleSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProtectConfigurationCountryRuleSetRequest;
      output: GetProtectConfigurationCountryRuleSetResult;
    };
    sdk: {
      input: GetProtectConfigurationCountryRuleSetCommandInput;
      output: GetProtectConfigurationCountryRuleSetCommandOutput;
    };
  };
}
