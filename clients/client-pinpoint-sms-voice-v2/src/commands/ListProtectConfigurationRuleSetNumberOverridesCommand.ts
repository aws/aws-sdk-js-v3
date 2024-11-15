// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProtectConfigurationRuleSetNumberOverridesRequest,
  ListProtectConfigurationRuleSetNumberOverridesResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_ListProtectConfigurationRuleSetNumberOverridesCommand,
  se_ListProtectConfigurationRuleSetNumberOverridesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProtectConfigurationRuleSetNumberOverridesCommand}.
 */
export interface ListProtectConfigurationRuleSetNumberOverridesCommandInput
  extends ListProtectConfigurationRuleSetNumberOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectConfigurationRuleSetNumberOverridesCommand}.
 */
export interface ListProtectConfigurationRuleSetNumberOverridesCommandOutput
  extends ListProtectConfigurationRuleSetNumberOverridesResult,
    __MetadataBearer {}

/**
 * <p>Retrieve all of the protect configuration rule set number overrides that match the filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListProtectConfigurationRuleSetNumberOverridesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListProtectConfigurationRuleSetNumberOverridesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ListProtectConfigurationRuleSetNumberOverridesRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   Filters: [ // ListProtectConfigurationRuleSetNumberOverrideFilter
 *     { // ProtectConfigurationRuleSetNumberOverrideFilterItem
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProtectConfigurationRuleSetNumberOverridesCommand(input);
 * const response = await client.send(command);
 * // { // ListProtectConfigurationRuleSetNumberOverridesResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   RuleSetNumberOverrides: [ // ProtectConfigurationRuleSetNumberOverrideList
 * //     { // ProtectConfigurationRuleSetNumberOverride
 * //       DestinationPhoneNumber: "STRING_VALUE", // required
 * //       CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //       Action: "STRING_VALUE", // required
 * //       IsoCountryCode: "STRING_VALUE",
 * //       ExpirationTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProtectConfigurationRuleSetNumberOverridesCommandInput - {@link ListProtectConfigurationRuleSetNumberOverridesCommandInput}
 * @returns {@link ListProtectConfigurationRuleSetNumberOverridesCommandOutput}
 * @see {@link ListProtectConfigurationRuleSetNumberOverridesCommandInput} for command's `input` shape.
 * @see {@link ListProtectConfigurationRuleSetNumberOverridesCommandOutput} for command's `response` shape.
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
export class ListProtectConfigurationRuleSetNumberOverridesCommand extends $Command
  .classBuilder<
    ListProtectConfigurationRuleSetNumberOverridesCommandInput,
    ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
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
  .s("PinpointSMSVoiceV2", "ListProtectConfigurationRuleSetNumberOverrides", {})
  .n("PinpointSMSVoiceV2Client", "ListProtectConfigurationRuleSetNumberOverridesCommand")
  .f(void 0, void 0)
  .ser(se_ListProtectConfigurationRuleSetNumberOverridesCommand)
  .de(de_ListProtectConfigurationRuleSetNumberOverridesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProtectConfigurationRuleSetNumberOverridesRequest;
      output: ListProtectConfigurationRuleSetNumberOverridesResult;
    };
    sdk: {
      input: ListProtectConfigurationRuleSetNumberOverridesCommandInput;
      output: ListProtectConfigurationRuleSetNumberOverridesCommandOutput;
    };
  };
}
