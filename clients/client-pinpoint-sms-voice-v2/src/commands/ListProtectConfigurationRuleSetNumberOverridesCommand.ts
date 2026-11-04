// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListProtectConfigurationRuleSetNumberOverridesRequest,
  ListProtectConfigurationRuleSetNumberOverridesResult,
} from "../models/models_0";
import { ListProtectConfigurationRuleSetNumberOverrides$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProtectConfigurationRuleSetNumberOverridesCommand}.
 */
export interface ListProtectConfigurationRuleSetNumberOverridesCommandInput extends ListProtectConfigurationRuleSetNumberOverridesRequest {}
/**
 * @public
 *
 * The output of {@link ListProtectConfigurationRuleSetNumberOverridesCommand}.
 */
export interface ListProtectConfigurationRuleSetNumberOverridesCommandOutput extends ListProtectConfigurationRuleSetNumberOverridesResult, __MetadataBearer {}

/**
 * Retrieve all of the protect configuration rule set number overrides that match the filters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListProtectConfigurationRuleSetNumberOverridesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListProtectConfigurationRuleSetNumberOverridesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
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
 *
 * The request was denied because you don't have sufficient permissions to access the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An error that occurred because too many requests were sent during a certain amount of time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation exception for a field.
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 *
 * Base exception class for all service exceptions from PinpointSMSVoiceV2 service.
 *
 * @public
 */
export class ListProtectConfigurationRuleSetNumberOverridesCommand extends command<ListProtectConfigurationRuleSetNumberOverridesCommandInput, ListProtectConfigurationRuleSetNumberOverridesCommandOutput>(
  _ep0,
  _mw0,
  "ListProtectConfigurationRuleSetNumberOverrides",
  ListProtectConfigurationRuleSetNumberOverrides$
) {
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
