// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomerAccountStatisticsRequest, GetCustomerAccountStatisticsResponse } from "../models/models_0";
import { GetCustomerAccountStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomerAccountStatisticsCommand}.
 */
export interface GetCustomerAccountStatisticsCommandInput extends GetCustomerAccountStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomerAccountStatisticsCommand}.
 */
export interface GetCustomerAccountStatisticsCommandOutput extends GetCustomerAccountStatisticsResponse, __MetadataBearer {}

/**
 * <p>Use <code>GetCustomerAccountStatistics</code> to count your customer accounts and group them by fields such as industry, geography, or enrichment status. You can use the same filters as <code>SearchCustomerAccounts</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetCustomerAccountStatisticsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetCustomerAccountStatisticsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetCustomerAccountStatisticsRequest
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
 *   Aggregations: [ // AggregationRequestList
 *     { // AggregationRequest
 *       GroupBy: [ // AggregatableFieldList // required
 *         "ENRICHMENT_STATUS" || "AWS_INDUSTRY" || "SEGMENT" || "REGION" || "SOLUTION_CATEGORY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "GEO" || "COUNTRY" || "SOLUTION_SCORE",
 *       ],
 *     },
 *   ],
 *   IncludeMissing: true || false,
 * };
 * const command = new GetCustomerAccountStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomerAccountStatisticsResponse
 * //   TotalCount: Number("int"), // required
 * //   Aggregations: [ // AggregationResultList
 * //     { // AggregationResult
 * //       GroupBy: [ // AggregatableFieldList // required
 * //         "ENRICHMENT_STATUS" || "AWS_INDUSTRY" || "SEGMENT" || "REGION" || "SOLUTION_CATEGORY" || "ACCOUNT_PLANNING_QUALIFICATION" || "PROGRAM_ELIGIBILITY" || "MARKETPLACE_ENGAGEMENT_SCORE" || "GEO" || "COUNTRY" || "SOLUTION_SCORE",
 * //       ],
 * //       Buckets: [ // BucketList // required
 * //         { // Bucket
 * //           Values: [ // BucketValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Count: Number("int"), // required
 * //         },
 * //       ],
 * //       OtherCount: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCustomerAccountStatisticsCommandInput - {@link GetCustomerAccountStatisticsCommandInput}
 * @returns {@link GetCustomerAccountStatisticsCommandOutput}
 * @see {@link GetCustomerAccountStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetCustomerAccountStatisticsCommandOutput} for command's `response` shape.
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
export class GetCustomerAccountStatisticsCommand extends command<GetCustomerAccountStatisticsCommandInput, GetCustomerAccountStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomerAccountStatistics",
  GetCustomerAccountStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomerAccountStatisticsRequest;
      output: GetCustomerAccountStatisticsResponse;
    };
    sdk: {
      input: GetCustomerAccountStatisticsCommandInput;
      output: GetCustomerAccountStatisticsCommandOutput;
    };
  };
}
