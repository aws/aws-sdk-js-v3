// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/models_0";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainContactCommand}.
 */
export interface UpdateDomainContactCommandInput extends UpdateDomainContactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainContactCommand}.
 */
export interface UpdateDomainContactCommandOutput extends UpdateDomainContactResponse, __MetadataBearer {}

/**
 * <p>This operation updates the contact information for a particular domain. You must
 * 			specify information for at least one contact: registrant, administrator, or
 * 			technical.</p>
 *          <p>If the update is successful, this method returns an operation ID that you can use to
 * 			track the progress and completion of the operation. If the request is not completed
 * 			successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateDomainContactCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateDomainContactCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // UpdateDomainContactRequest
 *   DomainName: "STRING_VALUE", // required
 *   AdminContact: { // ContactDetail
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 *     OrganizationName: "STRING_VALUE",
 *     AddressLine1: "STRING_VALUE",
 *     AddressLine2: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 *     ZipCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     Fax: "STRING_VALUE",
 *     ExtraParams: [ // ExtraParamList
 *       { // ExtraParam
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN" || "AU_ELIGIBILITY_TYPE" || "AU_POLICY_REASON" || "AU_REGISTRANT_NAME", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   RegistrantContact: {
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 *     OrganizationName: "STRING_VALUE",
 *     AddressLine1: "STRING_VALUE",
 *     AddressLine2: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 *     ZipCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     Fax: "STRING_VALUE",
 *     ExtraParams: [
 *       {
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN" || "AU_ELIGIBILITY_TYPE" || "AU_POLICY_REASON" || "AU_REGISTRANT_NAME", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   TechContact: {
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 *     OrganizationName: "STRING_VALUE",
 *     AddressLine1: "STRING_VALUE",
 *     AddressLine2: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 *     ZipCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     Fax: "STRING_VALUE",
 *     ExtraParams: [
 *       {
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN" || "AU_ELIGIBILITY_TYPE" || "AU_POLICY_REASON" || "AU_REGISTRANT_NAME", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Consent: { // Consent
 *     MaxPrice: Number("double"), // required
 *     Currency: "STRING_VALUE", // required
 *   },
 *   BillingContact: {
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 *     OrganizationName: "STRING_VALUE",
 *     AddressLine1: "STRING_VALUE",
 *     AddressLine2: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 *     ZipCode: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     Fax: "STRING_VALUE",
 *     ExtraParams: [
 *       {
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN" || "AU_ELIGIBILITY_TYPE" || "AU_POLICY_REASON" || "AU_REGISTRANT_NAME", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateDomainContactCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainContactResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainContactCommandInput - {@link UpdateDomainContactCommandInput}
 * @returns {@link UpdateDomainContactCommandOutput}
 * @see {@link UpdateDomainContactCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainContactCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The request is already in progress for the domain.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *  <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 *
 * @throws {@link TLDRulesViolation} (client fault)
 *  <p>The top-level domain does not support this operation.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 *
 * @public
 */
export class UpdateDomainContactCommand extends $Command
  .classBuilder<
    UpdateDomainContactCommandInput,
    UpdateDomainContactCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Domains_v20140515", "UpdateDomainContact", {})
  .n("Route53DomainsClient", "UpdateDomainContactCommand")
  .sc(UpdateDomainContact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainContactRequest;
      output: UpdateDomainContactResponse;
    };
    sdk: {
      input: UpdateDomainContactCommandInput;
      output: UpdateDomainContactCommandOutput;
    };
  };
}
