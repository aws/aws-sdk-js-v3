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
 * Lists supported phone number countries.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSupportedPhoneNumberCountriesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSupportedPhoneNumberCountriesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListSupportedPhoneNumberCountriesRequest
 *   ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn", // required
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation.
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
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
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
