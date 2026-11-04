// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePhoneNumberRequest, DescribePhoneNumberResponse } from "../models/models_1";
import { DescribePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePhoneNumberCommand}.
 */
export interface DescribePhoneNumberCommandInput extends DescribePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link DescribePhoneNumberCommand}.
 */
export interface DescribePhoneNumberCommandOutput extends DescribePhoneNumberResponse, __MetadataBearer {}

/**
 * Gets details and status of a phone number that’s claimed to your Connect Customer instance or traffic distribution group.
 *
 * > **Important:** If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the `PhoneNumberId` URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you receive a `ResourceNotFoundException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 * };
 * const command = new DescribePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // DescribePhoneNumberResponse
 * //   ClaimedPhoneNumberSummary: { // ClaimedPhoneNumberSummary
 * //     PhoneNumberId: "STRING_VALUE",
 * //     PhoneNumberArn: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     PhoneNumberCountryCode: "AF" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BA" || "BW" || "BR" || "IO" || "VG" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CK" || "CR" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "TL" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "PF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "CI" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "KP" || "MP" || "NO" || "OM" || "PK" || "PW" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "CG" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "KR" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "VI" || "UG" || "UA" || "AE" || "GB" || "US" || "UY" || "UZ" || "VU" || "VA" || "VE" || "VN" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //     PhoneNumberType: "TOLL_FREE" || "DID" || "UIFN" || "SHARED" || "THIRD_PARTY_TF" || "THIRD_PARTY_DID" || "SHORT_CODE",
 * //     PhoneNumberDescription: "STRING_VALUE",
 * //     TargetArn: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     PhoneNumberStatus: { // PhoneNumberStatus
 * //       Status: "CLAIMED" || "IN_PROGRESS" || "FAILED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     SourcePhoneNumberArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePhoneNumberCommandInput - {@link DescribePhoneNumberCommandInput}
 * @returns {@link DescribePhoneNumberCommandOutput}
 * @see {@link DescribePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DescribePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribePhoneNumberCommand extends command<DescribePhoneNumberCommandInput, DescribePhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "DescribePhoneNumber",
  DescribePhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePhoneNumberRequest;
      output: DescribePhoneNumberResponse;
    };
    sdk: {
      input: DescribePhoneNumberCommandInput;
      output: DescribePhoneNumberCommandOutput;
    };
  };
}
