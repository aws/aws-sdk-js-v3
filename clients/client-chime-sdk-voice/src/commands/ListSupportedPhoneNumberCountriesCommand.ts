// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListSupportedPhoneNumberCountriesRequest,
  ListSupportedPhoneNumberCountriesResponse,
} from "../models/models_0";
import { ListSupportedPhoneNumberCountries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSupportedPhoneNumberCountriesCommand}.
 */
export interface ListSupportedPhoneNumberCountriesCommandInput extends ListSupportedPhoneNumberCountriesRequest {}
/**
 * @public
 *
 * The output of {@link ListSupportedPhoneNumberCountriesCommand}.
 */
export interface ListSupportedPhoneNumberCountriesCommandOutput extends ListSupportedPhoneNumberCountriesResponse, __MetadataBearer {}

/**
 * Lists the countries that you can order phone numbers from.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListSupportedPhoneNumberCountriesCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListSupportedPhoneNumberCountriesCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListSupportedPhoneNumberCountriesRequest
 *   ProductType: "VoiceConnector" || "SipMediaApplicationDialIn", // required
 * };
 * const command = new ListSupportedPhoneNumberCountriesCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportedPhoneNumberCountriesResponse
 * //   PhoneNumberCountries: [ // PhoneNumberCountriesList
 * //     { // PhoneNumberCountry
 * //       CountryCode: "STRING_VALUE",
 * //       SupportedPhoneNumberTypes: [ // PhoneNumberTypeList
 * //         "Local" || "TollFree",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSupportedPhoneNumberCountriesCommandInput - {@link ListSupportedPhoneNumberCountriesCommandInput}
 * @returns {@link ListSupportedPhoneNumberCountriesCommandOutput}
 * @see {@link ListSupportedPhoneNumberCountriesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedPhoneNumberCountriesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class ListSupportedPhoneNumberCountriesCommand extends command<ListSupportedPhoneNumberCountriesCommandInput, ListSupportedPhoneNumberCountriesCommandOutput>(
  _ep0,
  _mw0,
  "ListSupportedPhoneNumberCountries",
  ListSupportedPhoneNumberCountries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupportedPhoneNumberCountriesRequest;
      output: ListSupportedPhoneNumberCountriesResponse;
    };
    sdk: {
      input: ListSupportedPhoneNumberCountriesCommandInput;
      output: ListSupportedPhoneNumberCountriesCommandOutput;
    };
  };
}
