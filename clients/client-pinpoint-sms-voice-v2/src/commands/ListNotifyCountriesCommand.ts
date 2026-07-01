// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNotifyCountriesRequest, ListNotifyCountriesResult } from "../models/models_0";
import { ListNotifyCountries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNotifyCountriesCommand}.
 */
export interface ListNotifyCountriesCommandInput extends ListNotifyCountriesRequest {}
/**
 * @public
 *
 * The output of {@link ListNotifyCountriesCommand}.
 */
export interface ListNotifyCountriesCommandOutput extends ListNotifyCountriesResult, __MetadataBearer {}

/**
 * <p>Lists countries that support notify messaging. You can optionally filter by channel, use case, or tier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListNotifyCountriesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListNotifyCountriesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // ListNotifyCountriesRequest
 *   Channels: [ // NotifyEnabledChannelsList
 *     "STRING_VALUE",
 *   ],
 *   UseCases: [ // NotifyUseCaseList
 *     "STRING_VALUE",
 *   ],
 *   Tier: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListNotifyCountriesCommand(input);
 * const response = await client.send(command);
 * // { // ListNotifyCountriesResult
 * //   NotifyCountries: [ // NotifyCountryInformationList
 * //     { // NotifyCountryInformation
 * //       IsoCountryCode: "STRING_VALUE", // required
 * //       CountryName: "STRING_VALUE", // required
 * //       SupportedChannels: [ // NotifyEnabledChannelsList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedUseCases: [ // NotifyUseCaseList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedTiers: [ // NotifyTierList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomerOwnedIdentityRequired: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotifyCountriesCommandInput - {@link ListNotifyCountriesCommandInput}
 * @returns {@link ListNotifyCountriesCommandOutput}
 * @see {@link ListNotifyCountriesCommandInput} for command's `input` shape.
 * @see {@link ListNotifyCountriesCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
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
 * @example ListNotifyCountries
 * ```javascript
 * // List countries that support notify messaging over SMS.
 * const input = {
 *   Channels: [
 *     "SMS"
 *   ],
 *   MaxResults: 10
 * };
 * const command = new ListNotifyCountriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NotifyCountries: [
 *     {
 *       CountryName: "United States",
 *       CustomerOwnedIdentityRequired: false,
 *       IsoCountryCode: "US",
 *       SupportedChannels: [
 *         "SMS",
 *         "VOICE"
 *       ],
 *       SupportedTiers: [
 *         "BASIC",
 *         "ADVANCED"
 *       ],
 *       SupportedUseCases: [
 *         "CODE_VERIFICATION"
 *       ]
 *     },
 *     {
 *       CountryName: "Canada",
 *       CustomerOwnedIdentityRequired: false,
 *       IsoCountryCode: "CA",
 *       SupportedChannels: [
 *         "SMS"
 *       ],
 *       SupportedTiers: [
 *         "BASIC"
 *       ],
 *       SupportedUseCases: [
 *         "CODE_VERIFICATION"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNotifyCountriesCommand extends command<ListNotifyCountriesCommandInput, ListNotifyCountriesCommandOutput>(
  _ep0,
  _mw0,
  "ListNotifyCountries",
  ListNotifyCountries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNotifyCountriesRequest;
      output: ListNotifyCountriesResult;
    };
    sdk: {
      input: ListNotifyCountriesCommandInput;
      output: ListNotifyCountriesCommandOutput;
    };
  };
}
