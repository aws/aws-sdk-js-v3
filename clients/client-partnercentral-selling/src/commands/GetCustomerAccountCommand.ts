// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomerAccountRequest, GetCustomerAccountResponse } from "../models/models_0";
import { GetCustomerAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomerAccountCommand}.
 */
export interface GetCustomerAccountCommandInput extends GetCustomerAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomerAccountCommand}.
 */
export interface GetCustomerAccountCommandOutput extends GetCustomerAccountResponse, __MetadataBearer {}

/**
 * <p>Use <code>GetCustomerAccount</code> to retrieve the details of a customer account, including the customer information that you provided, the enrichment status, and the enrichment information that AWS provides when the status is <code>ENRICHED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetCustomerAccountCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetCustomerAccountCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetCustomerAccountRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetCustomerAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomerAccountResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Catalog: "STRING_VALUE", // required
 * //   EnrichmentStatus: "PENDING" || "ENRICHED" || "NO_MATCH_FOUND" || "ACTION_REQUIRED", // required
 * //   PartnerAccountIdentifier: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"), // required
 * //   LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   Issues: [ // IssueList
 * //     { // Issue
 * //       Severity: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AwsEnrichment: { // AwsEnrichment
 * //     Customer: { // AwsEnrichmentCustomer
 * //       AccountName: "STRING_VALUE",
 * //       Industry: "STRING_VALUE",
 * //       SubIndustry: "STRING_VALUE",
 * //       Sector: "STRING_VALUE",
 * //       Segment: "STRING_VALUE",
 * //       CompanySize: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       SubRegion: "STRING_VALUE",
 * //       Geo: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       CustomerAccountPlanningQualification: "STRING_VALUE",
 * //       EligiblePrograms: [ // EligibleProgramList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Insights: { // AwsEnrichmentInsights
 * //       MarketplaceEngagementScore: "STRING_VALUE",
 * //       SolutionCategory: "STRING_VALUE",
 * //       SolutionScore: "STRING_VALUE",
 * //       SolutionSubCategory: "STRING_VALUE",
 * //     },
 * //   },
 * //   ReasonCode: "DUPLICATE_CUSTOMER_MATCH" || "PROCESSING_ERROR",
 * //   Message: "STRING_VALUE",
 * //   ExistingCustomerAccountArn: "STRING_VALUE",
 * //   Account: { // CustomerAccountData
 * //     CompanyName: "STRING_VALUE", // required
 * //     WebsiteUrl: "STRING_VALUE",
 * //     Duns: "STRING_VALUE",
 * //     Address: { // Address
 * //       City: "STRING_VALUE",
 * //       PostalCode: "STRING_VALUE",
 * //       StateOrRegion: "STRING_VALUE",
 * //       CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //       StreetAddress: "STRING_VALUE",
 * //     },
 * //     Industry: "STRING_VALUE",
 * //     OtherIndustry: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     ParentCompanyName: "STRING_VALUE",
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCustomerAccountCommandInput - {@link GetCustomerAccountCommandInput}
 * @returns {@link GetCustomerAccountCommandOutput}
 * @see {@link GetCustomerAccountCommandInput} for command's `input` shape.
 * @see {@link GetCustomerAccountCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class GetCustomerAccountCommand extends command<GetCustomerAccountCommandInput, GetCustomerAccountCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomerAccount",
  GetCustomerAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomerAccountRequest;
      output: GetCustomerAccountResponse;
    };
    sdk: {
      input: GetCustomerAccountCommandInput;
      output: GetCustomerAccountCommandOutput;
    };
  };
}
