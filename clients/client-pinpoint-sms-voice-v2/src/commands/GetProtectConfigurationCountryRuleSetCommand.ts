// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetProtectConfigurationCountryRuleSetRequest,
  GetProtectConfigurationCountryRuleSetResult,
} from "../models/models_0";
import { GetProtectConfigurationCountryRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProtectConfigurationCountryRuleSetCommand}.
 */
export interface GetProtectConfigurationCountryRuleSetCommandInput extends GetProtectConfigurationCountryRuleSetRequest {}
/**
 * @public
 *
 * The output of {@link GetProtectConfigurationCountryRuleSetCommand}.
 */
export interface GetProtectConfigurationCountryRuleSetCommandOutput extends GetProtectConfigurationCountryRuleSetResult, __MetadataBearer {}

/**
 * Retrieve the CountryRuleSet for the specified NumberCapability from a protect configuration.
 *
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
export class GetProtectConfigurationCountryRuleSetCommand extends command<GetProtectConfigurationCountryRuleSetCommandInput, GetProtectConfigurationCountryRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "GetProtectConfigurationCountryRuleSet",
  GetProtectConfigurationCountryRuleSet$
) {
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
