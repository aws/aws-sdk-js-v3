// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  GetDomainDetailRequest,
  GetDomainDetailResponse,
  GetDomainDetailResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDomainDetailCommand, se_GetDomainDetailCommand } from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDomainDetailCommand}.
 */
export interface GetDomainDetailCommandInput extends GetDomainDetailRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainDetailCommand}.
 */
export interface GetDomainDetailCommandOutput extends GetDomainDetailResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns detailed information about a specified domain that is
 * 			associated with the current Amazon Web Services account. Contact information for the
 * 			domain is also returned as part of the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const input = { // GetDomainDetailRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainDetailCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainDetailResponse
 * //   DomainName: "STRING_VALUE",
 * //   Nameservers: [ // NameserverList
 * //     { // Nameserver
 * //       Name: "STRING_VALUE", // required
 * //       GlueIps: [ // GlueIpList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   AutoRenew: true || false,
 * //   AdminContact: { // ContactDetail
 * //     FirstName: "STRING_VALUE",
 * //     LastName: "STRING_VALUE",
 * //     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 * //     OrganizationName: "STRING_VALUE",
 * //     AddressLine1: "STRING_VALUE",
 * //     AddressLine2: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 * //     ZipCode: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     Email: "STRING_VALUE",
 * //     Fax: "STRING_VALUE",
 * //     ExtraParams: [ // ExtraParamList
 * //       { // ExtraParam
 * //         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   RegistrantContact: {
 * //     FirstName: "STRING_VALUE",
 * //     LastName: "STRING_VALUE",
 * //     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 * //     OrganizationName: "STRING_VALUE",
 * //     AddressLine1: "STRING_VALUE",
 * //     AddressLine2: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 * //     ZipCode: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     Email: "STRING_VALUE",
 * //     Fax: "STRING_VALUE",
 * //     ExtraParams: [
 * //       {
 * //         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   TechContact: {
 * //     FirstName: "STRING_VALUE",
 * //     LastName: "STRING_VALUE",
 * //     ContactType: "PERSON" || "COMPANY" || "ASSOCIATION" || "PUBLIC_BODY" || "RESELLER",
 * //     OrganizationName: "STRING_VALUE",
 * //     AddressLine1: "STRING_VALUE",
 * //     AddressLine2: "STRING_VALUE",
 * //     City: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     CountryCode: "AC" || "AD" || "AE" || "AF" || "AG" || "AI" || "AL" || "AM" || "AN" || "AO" || "AQ" || "AR" || "AS" || "AT" || "AU" || "AW" || "AX" || "AZ" || "BA" || "BB" || "BD" || "BE" || "BF" || "BG" || "BH" || "BI" || "BJ" || "BL" || "BM" || "BN" || "BO" || "BQ" || "BR" || "BS" || "BT" || "BV" || "BW" || "BY" || "BZ" || "CA" || "CC" || "CD" || "CF" || "CG" || "CH" || "CI" || "CK" || "CL" || "CM" || "CN" || "CO" || "CR" || "CU" || "CV" || "CW" || "CX" || "CY" || "CZ" || "DE" || "DJ" || "DK" || "DM" || "DO" || "DZ" || "EC" || "EE" || "EG" || "EH" || "ER" || "ES" || "ET" || "FI" || "FJ" || "FK" || "FM" || "FO" || "FR" || "GA" || "GB" || "GD" || "GE" || "GF" || "GG" || "GH" || "GI" || "GL" || "GM" || "GN" || "GP" || "GQ" || "GR" || "GS" || "GT" || "GU" || "GW" || "GY" || "HK" || "HM" || "HN" || "HR" || "HT" || "HU" || "ID" || "IE" || "IL" || "IM" || "IN" || "IO" || "IQ" || "IR" || "IS" || "IT" || "JE" || "JM" || "JO" || "JP" || "KE" || "KG" || "KH" || "KI" || "KM" || "KN" || "KP" || "KR" || "KW" || "KY" || "KZ" || "LA" || "LB" || "LC" || "LI" || "LK" || "LR" || "LS" || "LT" || "LU" || "LV" || "LY" || "MA" || "MC" || "MD" || "ME" || "MF" || "MG" || "MH" || "MK" || "ML" || "MM" || "MN" || "MO" || "MP" || "MQ" || "MR" || "MS" || "MT" || "MU" || "MV" || "MW" || "MX" || "MY" || "MZ" || "NA" || "NC" || "NE" || "NF" || "NG" || "NI" || "NL" || "NO" || "NP" || "NR" || "NU" || "NZ" || "OM" || "PA" || "PE" || "PF" || "PG" || "PH" || "PK" || "PL" || "PM" || "PN" || "PR" || "PS" || "PT" || "PW" || "PY" || "QA" || "RE" || "RO" || "RS" || "RU" || "RW" || "SA" || "SB" || "SC" || "SD" || "SE" || "SG" || "SH" || "SI" || "SJ" || "SK" || "SL" || "SM" || "SN" || "SO" || "SR" || "SS" || "ST" || "SV" || "SX" || "SY" || "SZ" || "TC" || "TD" || "TF" || "TG" || "TH" || "TJ" || "TK" || "TL" || "TM" || "TN" || "TO" || "TP" || "TR" || "TT" || "TV" || "TW" || "TZ" || "UA" || "UG" || "US" || "UY" || "UZ" || "VA" || "VC" || "VE" || "VG" || "VI" || "VN" || "VU" || "WF" || "WS" || "YE" || "YT" || "ZA" || "ZM" || "ZW",
 * //     ZipCode: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     Email: "STRING_VALUE",
 * //     Fax: "STRING_VALUE",
 * //     ExtraParams: [
 * //       {
 * //         Name: "DUNS_NUMBER" || "BRAND_NUMBER" || "BIRTH_DEPARTMENT" || "BIRTH_DATE_IN_YYYY_MM_DD" || "BIRTH_COUNTRY" || "BIRTH_CITY" || "DOCUMENT_NUMBER" || "AU_ID_NUMBER" || "AU_ID_TYPE" || "CA_LEGAL_TYPE" || "CA_BUSINESS_ENTITY_TYPE" || "CA_LEGAL_REPRESENTATIVE" || "CA_LEGAL_REPRESENTATIVE_CAPACITY" || "ES_IDENTIFICATION" || "ES_IDENTIFICATION_TYPE" || "ES_LEGAL_FORM" || "FI_BUSINESS_NUMBER" || "FI_ID_NUMBER" || "FI_NATIONALITY" || "FI_ORGANIZATION_TYPE" || "IT_NATIONALITY" || "IT_PIN" || "IT_REGISTRANT_ENTITY_TYPE" || "RU_PASSPORT_DATA" || "SE_ID_NUMBER" || "SG_ID_NUMBER" || "VAT_NUMBER" || "UK_CONTACT_TYPE" || "UK_COMPANY_NUMBER" || "EU_COUNTRY_OF_CITIZENSHIP" || "AU_PRIORITY_TOKEN", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   AdminPrivacy: true || false,
 * //   RegistrantPrivacy: true || false,
 * //   TechPrivacy: true || false,
 * //   RegistrarName: "STRING_VALUE",
 * //   WhoIsServer: "STRING_VALUE",
 * //   RegistrarUrl: "STRING_VALUE",
 * //   AbuseContactEmail: "STRING_VALUE",
 * //   AbuseContactPhone: "STRING_VALUE",
 * //   RegistryDomainId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   UpdatedDate: new Date("TIMESTAMP"),
 * //   ExpirationDate: new Date("TIMESTAMP"),
 * //   Reseller: "STRING_VALUE",
 * //   DnsSec: "STRING_VALUE",
 * //   StatusList: [ // DomainStatusList
 * //     "STRING_VALUE",
 * //   ],
 * //   DnssecKeys: [ // DnssecKeyList
 * //     { // DnssecKey
 * //       Algorithm: Number("int"),
 * //       Flags: Number("int"),
 * //       PublicKey: "STRING_VALUE",
 * //       DigestType: Number("int"),
 * //       Digest: "STRING_VALUE",
 * //       KeyTag: Number("int"),
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDomainDetailCommandInput - {@link GetDomainDetailCommandInput}
 * @returns {@link GetDomainDetailCommandOutput}
 * @see {@link GetDomainDetailCommandInput} for command's `input` shape.
 * @see {@link GetDomainDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 */
export class GetDomainDetailCommand extends $Command<
  GetDomainDetailCommandInput,
  GetDomainDetailCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetDomainDetailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainDetailCommandInput, GetDomainDetailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainDetailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "GetDomainDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDomainDetailResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Route53Domains_v20140515",
        operation: "GetDomainDetail",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetDomainDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDomainDetailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainDetailCommandOutput> {
    return de_GetDomainDetailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
