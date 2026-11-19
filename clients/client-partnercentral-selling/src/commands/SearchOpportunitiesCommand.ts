// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchOpportunitiesRequest, SearchOpportunitiesResponse } from "../models/models_0";
import { SearchOpportunities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchOpportunitiesCommand}.
 */
export interface SearchOpportunitiesCommandInput extends SearchOpportunitiesRequest {}
/**
 * @public
 *
 * The output of {@link SearchOpportunitiesCommand}.
 */
export interface SearchOpportunitiesCommandOutput extends SearchOpportunitiesResponse, __MetadataBearer {}

/**
 * <p>The <code>SearchOpportunities</code> operation in the AWS Partner Central Selling API searches and filters the opportunities available to you in AWS Partner Central.</p> <p>You can optionally provide a free-text <code>Keyword</code>, a structured <code>Filter</code> tree, and <code>Sort</code> options. The operation returns a curated summary view of each matching opportunity. If you supply both <code>Keyword</code> and <code>Filter</code>, the operation combines them with a logical AND, so each one narrows the result set.</p> <p>Results are paginated. Use the <code>NextToken</code> parameter to retrieve additional pages of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, SearchOpportunitiesCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, SearchOpportunitiesCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // SearchOpportunitiesRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Keyword: "STRING_VALUE",
 *   Filter: { // OpportunitySearchFilter
 *     AndAllFilters: [ // OpportunitySearchFilterList
 *       {
 *         AndAllFilters: [
 *           "<OpportunitySearchFilter>",
 *         ],
 *         OrAllFilters: [
 *           "<OpportunitySearchFilter>",
 *         ],
 *         NotFilter: "<OpportunitySearchFilter>",
 *         EqualsTo: { // OpportunitySearchPredicate
 *           Key: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "ApnPrograms" || "Origin" || "Tags" || "NextStep" || "OfferId" || "OfferSetId" || "AwsMarketplaceSolution" || "CosellMotion" || "OpportunityOwner" || "EstimatedMrr" || "EngagementScore", // required
 *           Value: { // OpportunitySearchFilterValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [ // OpportunitySearchFilterValues
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DoubleValue: Number("double"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAny: {
 *           Key: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "ApnPrograms" || "Origin" || "Tags" || "NextStep" || "OfferId" || "OfferSetId" || "AwsMarketplaceSolution" || "CosellMotion" || "OpportunityOwner" || "EstimatedMrr" || "EngagementScore", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DoubleValue: Number("double"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAll: {
 *           Key: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "ApnPrograms" || "Origin" || "Tags" || "NextStep" || "OfferId" || "OfferSetId" || "AwsMarketplaceSolution" || "CosellMotion" || "OpportunityOwner" || "EstimatedMrr" || "EngagementScore", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DoubleValue: Number("double"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThan: {
 *           Key: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "ApnPrograms" || "Origin" || "Tags" || "NextStep" || "OfferId" || "OfferSetId" || "AwsMarketplaceSolution" || "CosellMotion" || "OpportunityOwner" || "EstimatedMrr" || "EngagementScore", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DoubleValue: Number("double"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThanOrEquals: {
 *           Key: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "ApnPrograms" || "Origin" || "Tags" || "NextStep" || "OfferId" || "OfferSetId" || "AwsMarketplaceSolution" || "CosellMotion" || "OpportunityOwner" || "EstimatedMrr" || "EngagementScore", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DoubleValue: Number("double"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         LessThan: "<OpportunitySearchPredicate>",
 *         LessThanOrEquals: "<OpportunitySearchPredicate>",
 *       },
 *     ],
 *     OrAllFilters: [
 *       "<OpportunitySearchFilter>",
 *     ],
 *     NotFilter: "<OpportunitySearchFilter>",
 *     EqualsTo: "<OpportunitySearchPredicate>",
 *     ContainsAny: "<OpportunitySearchPredicate>",
 *     ContainsAll: "<OpportunitySearchPredicate>",
 *     GreaterThan: "<OpportunitySearchPredicate>",
 *     GreaterThanOrEquals: "<OpportunitySearchPredicate>",
 *     LessThan: "<OpportunitySearchPredicate>",
 *     LessThanOrEquals: "<OpportunitySearchPredicate>",
 *   },
 *   Sort: { // OpportunitySearchSort
 *     SortBy: "OpportunityId" || "Stage" || "ReviewStatus" || "CustomerCompanyName" || "LastModifiedDate" || "TargetCloseDate" || "CreatedDate" || "CountryCode" || "PartnerProjectTitle" || "OpportunityType" || "PartnerOpportunityIdentifier" || "Industry" || "AwsAccountId" || "Origin" || "NextStep" || "CosellMotion" || "OpportunityOwner" || "EngagementScore" || "EstimatedMrr" || "Tags" || "OfferId" || "OfferSetId" || "ApnPrograms", // required
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *   },
 * };
 * const command = new SearchOpportunitiesCommand(input);
 * const response = await client.send(command);
 * // { // SearchOpportunitiesResponse
 * //   OpportunitySearchSummaries: [ // OpportunitySearchSummaries // required
 * //     { // OpportunitySearchSummary
 * //       Id: "STRING_VALUE", // required
 * //       LastModifiedDate: new Date("TIMESTAMP"), // required
 * //       CreatedDate: new Date("TIMESTAMP"), // required
 * //       OpportunityType: "Net New Business" || "Flat Renewal" || "Expansion",
 * //       PartnerOpportunityIdentifier: "STRING_VALUE",
 * //       LifeCycle: { // OpportunitySearchLifeCycle
 * //         ReviewStatus: "Pending Submission" || "Submitted" || "In review" || "Approved" || "Rejected" || "Action Required",
 * //         Stage: "Prospect" || "Qualified" || "Technical Validation" || "Business Validation" || "Committed" || "Launched" || "Closed Lost",
 * //         NextSteps: "STRING_VALUE",
 * //         TargetCloseDate: "STRING_VALUE",
 * //       },
 * //       Customer: { // OpportunitySearchCustomer
 * //         Account: { // OpportunitySearchAccount
 * //           CompanyName: "STRING_VALUE",
 * //           Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other",
 * //           AwsAccountId: "STRING_VALUE",
 * //           Address: { // OpportunitySearchAddress
 * //             CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //           },
 * //         },
 * //       },
 * //       Project: { // OpportunitySearchProject
 * //         Title: "STRING_VALUE",
 * //         ApnPrograms: [ // ApnPrograms
 * //           "STRING_VALUE",
 * //         ],
 * //         ExpectedCustomerSpend: [ // OpportunitySearchExpectedCustomerSpendList
 * //           { // OpportunitySearchExpectedCustomerSpend
 * //             Amount: "STRING_VALUE",
 * //             CurrencyCode: "USD" || "EUR" || "GBP" || "AUD" || "CAD" || "CNY" || "NZD" || "INR" || "JPY" || "CHF" || "SEK" || "AED" || "AFN" || "ALL" || "AMD" || "ANG" || "AOA" || "ARS" || "AWG" || "AZN" || "BAM" || "BBD" || "BDT" || "BGN" || "BHD" || "BIF" || "BMD" || "BND" || "BOB" || "BOV" || "BRL" || "BSD" || "BTN" || "BWP" || "BYN" || "BZD" || "CDF" || "CHE" || "CHW" || "CLF" || "CLP" || "COP" || "COU" || "CRC" || "CUC" || "CUP" || "CVE" || "CZK" || "DJF" || "DKK" || "DOP" || "DZD" || "EGP" || "ERN" || "ETB" || "FJD" || "FKP" || "GEL" || "GHS" || "GIP" || "GMD" || "GNF" || "GTQ" || "GYD" || "HKD" || "HNL" || "HRK" || "HTG" || "HUF" || "IDR" || "ILS" || "IQD" || "IRR" || "ISK" || "JMD" || "JOD" || "KES" || "KGS" || "KHR" || "KMF" || "KPW" || "KRW" || "KWD" || "KYD" || "KZT" || "LAK" || "LBP" || "LKR" || "LRD" || "LSL" || "LYD" || "MAD" || "MDL" || "MGA" || "MKD" || "MMK" || "MNT" || "MOP" || "MRU" || "MUR" || "MVR" || "MWK" || "MXN" || "MXV" || "MYR" || "MZN" || "NAD" || "NGN" || "NIO" || "NOK" || "NPR" || "OMR" || "PAB" || "PEN" || "PGK" || "PHP" || "PKR" || "PLN" || "PYG" || "QAR" || "RON" || "RSD" || "RUB" || "RWF" || "SAR" || "SBD" || "SCR" || "SDG" || "SGD" || "SHP" || "SLL" || "SOS" || "SRD" || "SSP" || "STN" || "SVC" || "SYP" || "SZL" || "THB" || "TJS" || "TMT" || "TND" || "TOP" || "TRY" || "TTD" || "TWD" || "TZS" || "UAH" || "UGX" || "USN" || "UYI" || "UYU" || "UZS" || "VEF" || "VND" || "VUV" || "WST" || "XAF" || "XCD" || "XDR" || "XOF" || "XPF" || "XSU" || "XUA" || "YER" || "ZAR" || "ZMW" || "ZWL", // required
 * //           },
 * //         ],
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       RelatedEntityIdentifiers: { // OpportunitySearchRelatedEntityIdentifiers
 * //         AwsMarketplaceOffers: [ // AwsMarketplaceOfferIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         AwsMarketplaceOfferSets: [ // AwsMarketplaceOfferSetIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         AwsMarketplaceSolutions: [ // AwsMarketplaceSolutionIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //         Solutions: [ // SolutionIdentifiers
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       OpportunityTeam: [ // OpportunitySearchTeamMembersList
 * //         { // OpportunitySearchTeamMember
 * //           FirstName: "STRING_VALUE",
 * //           LastName: "STRING_VALUE",
 * //           BusinessTitle: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AwsOpportunitySummary: { // OpportunitySearchAwsSummary
 * //         Origin: "AWS Referral" || "Partner Referral",
 * //         CosellMotion: "STRING_VALUE",
 * //         Insights: { // OpportunitySearchInsights
 * //           EngagementScore: "High" || "Medium" || "Low",
 * //           OpportunityQuality: { // OpportunitySearchOpportunityQuality
 * //             Score: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchOpportunitiesCommandInput - {@link SearchOpportunitiesCommandInput}
 * @returns {@link SearchOpportunitiesCommandOutput}
 * @see {@link SearchOpportunitiesCommandInput} for command's `input` shape.
 * @see {@link SearchOpportunitiesCommandOutput} for command's `response` shape.
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
export class SearchOpportunitiesCommand extends command<SearchOpportunitiesCommandInput, SearchOpportunitiesCommandOutput>(
  _ep0,
  _mw0,
  "SearchOpportunities",
  SearchOpportunities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchOpportunitiesRequest;
      output: SearchOpportunitiesResponse;
    };
    sdk: {
      input: SearchOpportunitiesCommandInput;
      output: SearchOpportunitiesCommandOutput;
    };
  };
}
