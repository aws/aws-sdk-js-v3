// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  TransferDomainRequest,
  TransferDomainRequestFilterSensitiveLog,
  TransferDomainResponse,
} from "../models/models_0";
import { de_TransferDomainCommand, se_TransferDomainCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TransferDomainCommand}.
 */
export interface TransferDomainCommandInput extends TransferDomainRequest {}
/**
 * @public
 *
 * The output of {@link TransferDomainCommand}.
 */
export interface TransferDomainCommandOutput extends TransferDomainResponse, __MetadataBearer {}

/**
 * <p>Transfers a domain from another registrar to Amazon Route 53. </p>
 *          <p>For more information about transferring domains, see the following topics:</p>
 *          <ul>
 *             <li>
 *                <p>For transfer requirements, a detailed procedure, and information about viewing
 * 					the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the
 * 						<i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p>
 *             </li>
 *             <li>
 *                <p>For information about how to transfer a domain to another domain registrar,
 * 					see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in
 * 					the <i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>During the transfer of any country code top-level domains (ccTLDs) to Route 53, except for .cc and .tv,
 * 			updates to the owner contact are ignored and the owner contact data from the registry is used.
 * 			You can
 * 			update the owner contact after the transfer is complete. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html">UpdateDomainContact</a>.</p>
 *          </important>
 *          <p>If the registrar for your domain is also the DNS service provider for the domain, we
 * 			highly recommend that you transfer your DNS service to Route 53 or to another DNS
 * 			service provider before you transfer your registration. Some registrars provide free DNS
 * 			service when you purchase a domain registration. When you transfer the registration, the
 * 			previous registrar will not renew your domain registration and could end your DNS
 * 			service at any time.</p>
 *          <important>
 *             <p>If the registrar for your domain is also the DNS service provider for the domain
 * 				and you don't transfer DNS service to another provider, your website, email, and the
 * 				web applications associated with the domain might become unavailable.</p>
 *          </important>
 *          <p>If the transfer is successful, this method returns an operation ID that you can use to
 * 			track the progress and completion of the action. If the transfer doesn't complete
 * 			successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, TransferDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, TransferDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // TransferDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   IdnLangCode: "STRING_VALUE",
 *   DurationInYears: Number("int"), // required
 *   Nameservers: [ // NameserverList
 *     { // Nameserver
 *       Name: "STRING_VALUE", // required
 *       GlueIps: [ // GlueIpList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AuthCode: "STRING_VALUE",
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
 * const command = new TransferDomainCommand(input);
 * const response = await client.send(command);
 * // { // TransferDomainResponse
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TransferDomainCommandInput - {@link TransferDomainCommandInput}
 * @returns {@link TransferDomainCommandOutput}
 * @see {@link TransferDomainCommandInput} for command's `input` shape.
 * @see {@link TransferDomainCommandOutput} for command's `response` shape.
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
export class TransferDomainCommand extends $Command
  .classBuilder<
    TransferDomainCommandInput,
    TransferDomainCommandOutput,
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
  .s("Route53Domains_v20140515", "TransferDomain", {})
  .n("Route53DomainsClient", "TransferDomainCommand")
  .f(TransferDomainRequestFilterSensitiveLog, void 0)
  .ser(se_TransferDomainCommand)
  .de(de_TransferDomainCommand)
  .build() {}
