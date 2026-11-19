// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchEngagementsRequest, SearchEngagementsResponse } from "../models/models_0";
import { SearchEngagements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchEngagementsCommand}.
 */
export interface SearchEngagementsCommandInput extends SearchEngagementsRequest {}
/**
 * @public
 *
 * The output of {@link SearchEngagementsCommand}.
 */
export interface SearchEngagementsCommandOutput extends SearchEngagementsResponse, __MetadataBearer {}

/**
 * <p>Searches the engagements in AWS Partner Central that match your criteria, such as customer industry or geography. You can combine a free-text <code>Keyword</code>, a structured <code>Filter</code> tree, an engagement group (<code>GroupId</code>), and <code>Sort</code> options, and each search criterion that you specify narrows the results. Results are paginated, so use <code>NextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, SearchEngagementsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, SearchEngagementsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // SearchEngagementsRequest
 *   Catalog: "STRING_VALUE", // required
 *   Keyword: "STRING_VALUE",
 *   Filter: { // EngagementSearchFilter
 *     AndAllFilters: [ // EngagementSearchFilterList
 *       {
 *         AndAllFilters: [
 *           "<EngagementSearchFilter>",
 *         ],
 *         OrAllFilters: [
 *           "<EngagementSearchFilter>",
 *         ],
 *         NotFilter: "<EngagementSearchFilter>",
 *         EqualsTo: { // EngagementSearchPredicate
 *           Key: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadInteractionsSourceType" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsSourceName" || "LeadInteractionsContactBusinessTitle" || "ContextType", // required
 *           Value: { // EngagementSearchFilterValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [ // EngagementSearchFilterValues
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAny: {
 *           Key: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadInteractionsSourceType" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsSourceName" || "LeadInteractionsContactBusinessTitle" || "ContextType", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAll: {
 *           Key: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadInteractionsSourceType" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsSourceName" || "LeadInteractionsContactBusinessTitle" || "ContextType", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThan: {
 *           Key: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadInteractionsSourceType" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsSourceName" || "LeadInteractionsContactBusinessTitle" || "ContextType", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         GreaterThanOrEquals: {
 *           Key: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadInteractionsSourceType" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsSourceName" || "LeadInteractionsContactBusinessTitle" || "ContextType", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         LessThan: "<EngagementSearchPredicate>",
 *         LessThanOrEquals: "<EngagementSearchPredicate>",
 *       },
 *     ],
 *     OrAllFilters: [
 *       "<EngagementSearchFilter>",
 *     ],
 *     NotFilter: "<EngagementSearchFilter>",
 *     EqualsTo: "<EngagementSearchPredicate>",
 *     ContainsAny: "<EngagementSearchPredicate>",
 *     ContainsAll: "<EngagementSearchPredicate>",
 *     GreaterThan: "<EngagementSearchPredicate>",
 *     GreaterThanOrEquals: "<EngagementSearchPredicate>",
 *     LessThan: "<EngagementSearchPredicate>",
 *     LessThanOrEquals: "<EngagementSearchPredicate>",
 *   },
 *   GroupId: "STRING_VALUE",
 *   Sort: { // EngagementSearchSort
 *     SortBy: "EngagementId" || "Title" || "PartnerId" || "CreatedAt" || "LastModifiedAt" || "MemberCount" || "ProspectingCustomerGeo" || "ProspectingCustomerRegion" || "ProspectingCustomerIndustry" || "ProspectingCustomerSegment" || "ProspectingCustomerCountry" || "ProspectingCustomerCompanySize" || "ProspectingInsightsMarketplaceEngagementScore" || "ProspectingInsightsSolutionCategory" || "ProspectingInsightsSolutionSubCategory" || "LeadQualificationStatus" || "LeadReadinessScore" || "LeadCustomerIndustry" || "LeadCustomerCountryCode" || "LeadCustomerAwsMaturity" || "LeadCustomerMarketSegment" || "LeadCustomerCompanyName" || "LeadInteractionsContactFirstName" || "LeadInteractionsContactLastName" || "LeadInteractionsUsecase" || "LeadInteractionsContactBusinessTitle", // required
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchEngagementsCommand(input);
 * const response = await client.send(command);
 * // { // SearchEngagementsResponse
 * //   EngagementSearchSummaries: [ // EngagementSearchSummaryList
 * //     { // EngagementSearchSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       MemberCount: Number("int"),
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       ModifiedBy: "STRING_VALUE",
 * //       Contexts: [ // EngagementContexts
 * //         { // EngagementContextDetails
 * //           Id: "STRING_VALUE",
 * //           Type: "CustomerProject" || "Lead" || "ProspectingResult" || "CustomerAccount", // required
 * //           Payload: { // EngagementContextPayload Union: only one key present
 * //             CustomerProject: { // CustomerProjectsContext
 * //               Customer: { // EngagementCustomer
 * //                 Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other", // required
 * //                 CompanyName: "STRING_VALUE", // required
 * //                 WebsiteUrl: "STRING_VALUE", // required
 * //                 CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW", // required
 * //               },
 * //               Project: { // EngagementCustomerProjectDetails
 * //                 Title: "STRING_VALUE", // required
 * //                 BusinessProblem: "STRING_VALUE", // required
 * //                 TargetCompletionDate: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Lead: { // LeadContext
 * //               Insights: { // LeadInsights
 * //                 LeadReadinessScore: "STRING_VALUE",
 * //                 ChannelRecommendation: { // ChannelRecommendation
 * //                   RecommendedChannel: "STRING_VALUE", // required
 * //                   BestOutreachWindows: [ // BestOutreachWindowList
 * //                     { // BestOutreachWindow
 * //                       Day: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //                       StartTimeUtc: "STRING_VALUE", // required
 * //                       EndTimeUtc: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //               QualificationStatus: "STRING_VALUE",
 * //               Customer: { // LeadCustomer
 * //                 Industry: "STRING_VALUE",
 * //                 CompanyName: "STRING_VALUE", // required
 * //                 WebsiteUrl: "STRING_VALUE",
 * //                 Address: { // LeadAddress
 * //                   City: "STRING_VALUE",
 * //                   PostalCode: "STRING_VALUE",
 * //                   StateOrRegion: "STRING_VALUE",
 * //                   CountryCode: "STRING_VALUE",
 * //                 },
 * //                 AwsMaturity: "STRING_VALUE",
 * //                 MarketSegment: "STRING_VALUE",
 * //               },
 * //               Interactions: [ // LeadInteractionList // required
 * //                 { // LeadInteraction
 * //                   SourceType: "STRING_VALUE",
 * //                   SourceId: "STRING_VALUE",
 * //                   SourceName: "STRING_VALUE",
 * //                   Usecase: "STRING_VALUE",
 * //                   InteractionDate: new Date("TIMESTAMP"),
 * //                   CustomerAction: "STRING_VALUE",
 * //                   BusinessProblem: "STRING_VALUE",
 * //                   Contact: { // LeadContact
 * //                     BusinessTitle: "STRING_VALUE", // required
 * //                     Email: "STRING_VALUE", // required
 * //                     FirstName: "STRING_VALUE", // required
 * //                     LastName: "STRING_VALUE", // required
 * //                     Phone: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //             ProspectingResult: { // ProspectingResult
 * //               Aws: { // ProspectingResultAws
 * //                 Customer: { // ProspectingResultCustomer
 * //                   AccountName: "STRING_VALUE",
 * //                   Geo: "STRING_VALUE",
 * //                   Region: "STRING_VALUE",
 * //                   SubRegion: "STRING_VALUE",
 * //                   Country: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //                   Industry: "Aerospace" || "Agriculture" || "Automotive" || "Computers and Electronics" || "Consumer Goods" || "Education" || "Energy - Oil and Gas" || "Energy - Power and Utilities" || "Financial Services" || "Gaming" || "Government" || "Healthcare" || "Hospitality" || "Life Sciences" || "Manufacturing" || "Marketing and Advertising" || "Media and Entertainment" || "Mining" || "Non-Profit Organization" || "Professional Services" || "Real Estate and Construction" || "Retail" || "Software and Internet" || "Telecommunications" || "Transportation and Logistics" || "Travel" || "Wholesale and Distribution" || "Other",
 * //                   SubIndustry: "STRING_VALUE",
 * //                   Segment: "STRING_VALUE",
 * //                   CompanySize: "STRING_VALUE",
 * //                   EligiblePrograms: [ // EligibleProgramsList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   PublicProfileSummary: "STRING_VALUE",
 * //                 },
 * //                 Insights: { // ProspectingInsights
 * //                   MarketplaceEngagementScore: "STRING_VALUE",
 * //                   SolutionScore: "STRING_VALUE",
 * //                   SolutionCategory: "STRING_VALUE",
 * //                   SolutionSubCategory: "STRING_VALUE",
 * //                 },
 * //                 StartTime: new Date("TIMESTAMP"),
 * //                 EndTime: new Date("TIMESTAMP"),
 * //                 TaskId: "STRING_VALUE",
 * //                 TaskArn: "STRING_VALUE",
 * //                 TaskName: "STRING_VALUE",
 * //               },
 * //             },
 * //             CustomerAccount: { // CustomerAccountContext
 * //               AccountIdentifier: "STRING_VALUE",
 * //               Customer: { // AccountCustomer
 * //                 Industry: "STRING_VALUE",
 * //                 CompanyName: "STRING_VALUE", // required
 * //                 WebsiteUrl: "STRING_VALUE",
 * //                 CountryCode: "US" || "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "CD" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "AN" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchEngagementsCommandInput - {@link SearchEngagementsCommandInput}
 * @returns {@link SearchEngagementsCommandOutput}
 * @see {@link SearchEngagementsCommandInput} for command's `input` shape.
 * @see {@link SearchEngagementsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
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
 * @example Search engagements by keyword and customer country
 * ```javascript
 * // Returns AWS catalog engagements whose text matches the keyword and whose prospected customer is in the United States, newest first.
 * const input = {
 *   Catalog: "AWS",
 *   Filter: {
 *     EqualsTo: {
 *       Key: "ProspectingCustomerCountry",
 *       Value: {
 *         StringValue: "US"
 *       }
 *     }
 *   },
 *   Keyword: "data analytics",
 *   MaxResults: 20,
 *   Sort: {
 *     SortBy: "CreatedAt",
 *     SortOrder: "DESCENDING"
 *   }
 * };
 * const command = new SearchEngagementsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EngagementSearchSummaries: [
 *     {
 *       Arn: "arn:aws:partnercentral:us-east-1::catalog/AWS/engagement/eng-0a1b2c3d4e5f6g",
 *       CreatedAt: "2026-10-01T18:30:00Z",
 *       CreatedBy: "123456789012",
 *       Description: "Prospecting engagement for a retail customer evaluating a data analytics platform.",
 *       Id: "eng-0a1b2c3d4e5f6g",
 *       MemberCount: 1,
 *       Title: "Data analytics modernization"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchEngagementsCommand extends command<SearchEngagementsCommandInput, SearchEngagementsCommandOutput>(
  _ep0,
  _mw0,
  "SearchEngagements",
  SearchEngagements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchEngagementsRequest;
      output: SearchEngagementsResponse;
    };
    sdk: {
      input: SearchEngagementsCommandInput;
      output: SearchEngagementsCommandOutput;
    };
  };
}
