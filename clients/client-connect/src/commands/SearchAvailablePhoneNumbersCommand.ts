// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_2";
import { SearchAvailablePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandInput extends SearchAvailablePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandOutput extends SearchAvailablePhoneNumbersResponse, __MetadataBearer {}

/**
 * <p>Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the
 *    provided <code>TargetArn</code> is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with
 *    the traffic distribution group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchAvailablePhoneNumbersRequest
 *   TargetArn: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   PhoneNumberCountryCode: "AF" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BA" || "BW" || "BR" || "IO" || "VG" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CK" || "CR" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "TL" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "PF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "CI" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "KP" || "MP" || "NO" || "OM" || "PK" || "PW" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "CG" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "KR" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "VI" || "UG" || "UA" || "AE" || "GB" || "US" || "UY" || "UZ" || "VU" || "VA" || "VE" || "VN" || "WF" || "EH" || "YE" || "ZM" || "ZW", // required
 *   PhoneNumberType: "TOLL_FREE" || "DID" || "UIFN" || "SHARED" || "THIRD_PARTY_TF" || "THIRD_PARTY_DID" || "SHORT_CODE", // required
 *   PhoneNumberPrefix: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // SearchAvailablePhoneNumbersResponse
 * //   NextToken: "STRING_VALUE",
 * //   AvailableNumbersList: [ // AvailableNumbersList
 * //     { // AvailableNumberSummary
 * //       PhoneNumber: "STRING_VALUE",
 * //       PhoneNumberCountryCode: "AF" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BA" || "BW" || "BR" || "IO" || "VG" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CK" || "CR" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "TL" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "PF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "CI" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "KP" || "MP" || "NO" || "OM" || "PK" || "PW" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "CG" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "KR" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "VI" || "UG" || "UA" || "AE" || "GB" || "US" || "UY" || "UZ" || "VU" || "VA" || "VE" || "VN" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //       PhoneNumberType: "TOLL_FREE" || "DID" || "UIFN" || "SHARED" || "THIRD_PARTY_TF" || "THIRD_PARTY_DID" || "SHORT_CODE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchAvailablePhoneNumbersCommandInput - {@link SearchAvailablePhoneNumbersCommandInput}
 * @returns {@link SearchAvailablePhoneNumbersCommandOutput}
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchAvailablePhoneNumbersCommand extends $Command
  .classBuilder<
    SearchAvailablePhoneNumbersCommandInput,
    SearchAvailablePhoneNumbersCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchAvailablePhoneNumbers", {})
  .n("ConnectClient", "SearchAvailablePhoneNumbersCommand")
  .sc(SearchAvailablePhoneNumbers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAvailablePhoneNumbersRequest;
      output: SearchAvailablePhoneNumbersResponse;
    };
    sdk: {
      input: SearchAvailablePhoneNumbersCommandInput;
      output: SearchAvailablePhoneNumbersCommandOutput;
    };
  };
}
