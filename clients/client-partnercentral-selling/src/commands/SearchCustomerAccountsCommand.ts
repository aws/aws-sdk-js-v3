// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchCustomerAccountsRequest, SearchCustomerAccountsResponse } from "../models/models_0";
import { SearchCustomerAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchCustomerAccountsCommand}.
 */
export interface SearchCustomerAccountsCommandInput extends SearchCustomerAccountsRequest {}
/**
 * @public
 *
 * The output of {@link SearchCustomerAccountsCommand}.
 */
export interface SearchCustomerAccountsCommandOutput extends SearchCustomerAccountsResponse, __MetadataBearer {}

/**
 * <p>Use <code>SearchCustomerAccounts</code> to find customer accounts in the specified catalog. You can filter the results by fields such as enrichment status, industry, geography, and creation date, and sort them by company name, date, or score.</p> <p>Results are paginated. Use <code>NextToken</code> to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, SearchCustomerAccountsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, SearchCustomerAccountsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // SearchCustomerAccountsRequest
 *   Catalog: "STRING_VALUE", // required
 *   Filter: { // Filter
 *     AndAllFilters: [ // FilterList
 *       {
 *         AndAllFilters: [
 *           "<Filter>",
 *         ],
 *         OrAllFilters: [
 *           "<Filter>",
 *         ],
 *         NotFilter: "<Filter>",
 *         EqualsTo: { // FilterCondition
 *           Key: "ENRICHMENT_STATUS" || "COMPANY_NAME" || "AWS_INDUSTRY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "IMPORT_ID" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "GEO" || "COUNTRY" || "SEGMENT" || "SOLUTION_CATEGORY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
 *           Value: { // FilterValue Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [ // AccountFilterStringList
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         ContainsAny: {
 *           Key: "ENRICHMENT_STATUS" || "COMPANY_NAME" || "AWS_INDUSTRY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "IMPORT_ID" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "GEO" || "COUNTRY" || "SEGMENT" || "SOLUTION_CATEGORY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
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
 *           Key: "ENRICHMENT_STATUS" || "COMPANY_NAME" || "AWS_INDUSTRY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "IMPORT_ID" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "GEO" || "COUNTRY" || "SEGMENT" || "SOLUTION_CATEGORY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
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
 *           Key: "ENRICHMENT_STATUS" || "COMPANY_NAME" || "AWS_INDUSTRY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "IMPORT_ID" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "GEO" || "COUNTRY" || "SEGMENT" || "SOLUTION_CATEGORY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
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
 *           Key: "ENRICHMENT_STATUS" || "COMPANY_NAME" || "AWS_INDUSTRY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "IMPORT_ID" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "GEO" || "COUNTRY" || "SEGMENT" || "SOLUTION_CATEGORY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
 *           Value: {//  Union: only one key present
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         LessThan: "<FilterCondition>",
 *         LessThanOrEquals: "<FilterCondition>",
 *       },
 *     ],
 *     OrAllFilters: [
 *       "<Filter>",
 *     ],
 *     NotFilter: "<Filter>",
 *     EqualsTo: "<FilterCondition>",
 *     ContainsAny: "<FilterCondition>",
 *     ContainsAll: "<FilterCondition>",
 *     GreaterThan: "<FilterCondition>",
 *     GreaterThanOrEquals: "<FilterCondition>",
 *     LessThan: "<FilterCondition>",
 *     LessThanOrEquals: "<FilterCondition>",
 *   },
 *   Sort: { // CustomerAccountSort
 *     SortBy: "COMPANY_NAME" || "CREATED_DATE" || "LAST_MODIFIED_DATE" || "MARKETPLACE_ENGAGEMENT_SCORE" || "SOLUTION_SCORE", // required
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchCustomerAccountsCommand(input);
 * const response = await client.send(command);
 * // { // SearchCustomerAccountsResponse
 * //   CustomerAccountSummaries: [ // CustomerAccountSummaryList // required
 * //     { // CustomerAccountSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Catalog: "STRING_VALUE", // required
 * //       EnrichmentStatus: "PENDING" || "ENRICHED" || "NO_MATCH_FOUND" || "ACTION_REQUIRED", // required
 * //       PartnerAccountIdentifier: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"), // required
 * //       LastModifiedDate: new Date("TIMESTAMP"), // required
 * //       CustomerAccount: { // CustomerAccountDetailsSummary
 * //         CompanyName: "STRING_VALUE", // required
 * //       },
 * //       AwsEnrichment: { // AwsEnrichmentSummary
 * //         Customer: { // AwsEnrichmentCustomerSummary
 * //           Industry: "STRING_VALUE",
 * //           AccountPlanningQualification: "STRING_VALUE",
 * //           EligiblePrograms: [ // EligibleProgramList
 * //             "STRING_VALUE",
 * //           ],
 * //           Geo: "STRING_VALUE",
 * //           Country: "STRING_VALUE",
 * //           Segment: "STRING_VALUE",
 * //         },
 * //         Insights: { // AwsEnrichmentInsightsSummary
 * //           MarketplaceEngagementScore: "STRING_VALUE",
 * //           SolutionCategory: "STRING_VALUE",
 * //           SolutionScore: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchCustomerAccountsCommandInput - {@link SearchCustomerAccountsCommandInput}
 * @returns {@link SearchCustomerAccountsCommandOutput}
 * @see {@link SearchCustomerAccountsCommandInput} for command's `input` shape.
 * @see {@link SearchCustomerAccountsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SearchCustomerAccountsCommand extends command<SearchCustomerAccountsCommandInput, SearchCustomerAccountsCommandOutput>(
  _ep0,
  _mw0,
  "SearchCustomerAccounts",
  SearchCustomerAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchCustomerAccountsRequest;
      output: SearchCustomerAccountsResponse;
    };
    sdk: {
      input: SearchCustomerAccountsCommandInput;
      output: SearchCustomerAccountsCommandOutput;
    };
  };
}
