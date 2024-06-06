// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterDomainRequest,
  RegisterDomainRequestFilterSensitiveLog,
  RegisterDomainResponse,
} from "../models/models_0";
import { de_RegisterDomainCommand, se_RegisterDomainCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterDomainCommand}.
 */
export interface RegisterDomainCommandInput extends RegisterDomainRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDomainCommand}.
 */
export interface RegisterDomainCommandOutput extends RegisterDomainResponse, __MetadataBearer {}

/**
 * <p>This operation registers a domain. For some top-level domains (TLDs), this operation
 * 			requires extra parameters.</p>
 *          <p>When you register a domain, Amazon Route 53 does the following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53
 * 					assigns four name servers to your hosted zone and automatically updates your
 * 					domain registration with the names of these name servers.</p>
 *             </li>
 *             <li>
 *                <p>Enables auto renew, so your domain registration will renew automatically each
 * 					year. We'll notify you in advance of the renewal date so you can choose whether
 * 					to renew the registration.</p>
 *             </li>
 *             <li>
 *                <p>Optionally enables privacy protection, so WHOIS queries return contact for the registrar
 * 					or the phrase "REDACTED FOR PRIVACY", or "On behalf of <domain name> owner."
 * 					If you don't enable privacy protection, WHOIS queries return the information
 * 					that you entered for the administrative, registrant, and technical
 * 					contacts.</p>
 *                <note>
 *                   <p>While some domains may allow different privacy settings per contact, we recommend
 * 						specifying the same privacy setting for all contacts.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>If registration is successful, returns an operation ID that you can use to
 * 					track the progress and completion of the action. If the request is not completed
 * 					successfully, the domain registrant is notified by email.</p>
 *             </li>
 *             <li>
 *                <p>Charges your Amazon Web Services account an amount based on the top-level
 * 					domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RegisterDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RegisterDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // RegisterDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   IdnLangCode: "STRING_VALUE",
 *   DurationInYears: Number("int"), // required
 *   AutoRenew: true || false,
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
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
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
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
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
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   PrivacyProtectAdminContact: true || false,
 *   PrivacyProtectRegistrantContact: true || false,
 *   PrivacyProtectTechContact: true || false,
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
 *         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   PrivacyProtectBillingContact: true || false,
 * };
 * const command = new RegisterDomainCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterDomainCommandInput - {@link RegisterDomainCommandInput}
 * @returns {@link RegisterDomainCommandOutput}
 * @see {@link RegisterDomainCommandInput} for command's `input` shape.
 * @see {@link RegisterDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link DomainLimitExceeded} (client fault)
 *  <p>The number of domains has exceeded the allowed threshold for the account.</p>
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
 * @public
 */
export class RegisterDomainCommand extends $Command
  .classBuilder<
    RegisterDomainCommandInput,
    RegisterDomainCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "RegisterDomain", {})
  .n("Route53DomainsClient", "RegisterDomainCommand")
  .f(RegisterDomainRequestFilterSensitiveLog, void 0)
  .ser(se_RegisterDomainCommand)
  .de(de_RegisterDomainCommand)
  .build() {}
