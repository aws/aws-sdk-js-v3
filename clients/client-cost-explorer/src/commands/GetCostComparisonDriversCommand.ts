// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCostComparisonDriversRequest, GetCostComparisonDriversResponse } from "../models/models_0";
import { de_GetCostComparisonDriversCommand, se_GetCostComparisonDriversCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCostComparisonDriversCommand}.
 */
export interface GetCostComparisonDriversCommandInput extends GetCostComparisonDriversRequest {}
/**
 * @public
 *
 * The output of {@link GetCostComparisonDriversCommand}.
 */
export interface GetCostComparisonDriversCommandOutput extends GetCostComparisonDriversResponse, __MetadataBearer {}

/**
 * <p>Retrieves key factors driving cost changes between two time periods within the last 13
 *       months, such as usage changes, discount changes, and commitment-based savings. If you have
 *       enabled multi-year data at monthly granularity, you can go back up to 38 months.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostComparisonDriversCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostComparisonDriversCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetCostComparisonDriversRequest
 *   BillingViewArn: "STRING_VALUE",
 *   BaselineTimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   ComparisonTimePeriod: {
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   MetricForComparison: "STRING_VALUE", // required
 *   Filter: { // Expression
 *     Or: [ // Expressions
 *       {
 *         Or: [
 *           "<Expression>",
 *         ],
 *         And: [
 *           "<Expression>",
 *         ],
 *         Not: "<Expression>",
 *         Dimensions: { // DimensionValues
 *           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *           Values: [ // Values
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [ // MatchOptions
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         Tags: { // TagValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *         CostCategories: { // CostCategoryValues
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *           MatchOptions: [
 *             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *           ],
 *         },
 *       },
 *     ],
 *     And: [
 *       "<Expression>",
 *     ],
 *     Not: "<Expression>",
 *     Dimensions: {
 *       Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     Tags: {
 *       Key: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *       MatchOptions: [
 *         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 *       ],
 *     },
 *     CostCategories: {
 *       Key: "STRING_VALUE",
 *       Values: "<Values>",
 *       MatchOptions: "<MatchOptions>",
 *     },
 *   },
 *   GroupBy: [ // GroupDefinitions
 *     { // GroupDefinition
 *       Type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *       Key: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetCostComparisonDriversCommand(input);
 * const response = await client.send(command);
 * // { // GetCostComparisonDriversResponse
 * //   CostComparisonDrivers: [ // CostComparisonDrivers
 * //     { // CostComparisonDriver
 * //       CostSelector: { // Expression
 * //         Or: [ // Expressions
 * //           {
 * //             Or: [
 * //               "<Expression>",
 * //             ],
 * //             And: [
 * //               "<Expression>",
 * //             ],
 * //             Not: "<Expression>",
 * //             Dimensions: { // DimensionValues
 * //               Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //               Values: [ // Values
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [ // MatchOptions
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //             Tags: { // TagValues
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //             CostCategories: { // CostCategoryValues
 * //               Key: "STRING_VALUE",
 * //               Values: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               MatchOptions: [
 * //                 "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         And: [
 * //           "<Expression>",
 * //         ],
 * //         Not: "<Expression>",
 * //         Dimensions: {
 * //           Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "PAYER_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "AGREEMENT_END_DATE_TIME_AFTER" || "AGREEMENT_END_DATE_TIME_BEFORE" || "INVOICING_ENTITY" || "ANOMALY_TOTAL_IMPACT_ABSOLUTE" || "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
 * //           Values: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MatchOptions: [
 * //             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //           ],
 * //         },
 * //         Tags: {
 * //           Key: "STRING_VALUE",
 * //           Values: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MatchOptions: [
 * //             "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CASE_SENSITIVE" || "CASE_INSENSITIVE" || "GREATER_THAN_OR_EQUAL",
 * //           ],
 * //         },
 * //         CostCategories: {
 * //           Key: "STRING_VALUE",
 * //           Values: "<Values>",
 * //           MatchOptions: "<MatchOptions>",
 * //         },
 * //       },
 * //       Metrics: { // ComparisonMetrics
 * //         "<keys>": { // ComparisonMetricValue
 * //           BaselineTimePeriodAmount: "STRING_VALUE",
 * //           ComparisonTimePeriodAmount: "STRING_VALUE",
 * //           Difference: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //       CostDrivers: [ // CostDrivers
 * //         { // CostDriver
 * //           Type: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Metrics: {
 * //             "<keys>": {
 * //               BaselineTimePeriodAmount: "STRING_VALUE",
 * //               ComparisonTimePeriodAmount: "STRING_VALUE",
 * //               Difference: "STRING_VALUE",
 * //               Unit: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCostComparisonDriversCommandInput - {@link GetCostComparisonDriversCommandInput}
 * @returns {@link GetCostComparisonDriversCommandOutput}
 * @see {@link GetCostComparisonDriversCommandInput} for command's `input` shape.
 * @see {@link GetCostComparisonDriversCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link BillingViewHealthStatusException} (client fault)
 *  <p>
 *             The billing view status must be <code>HEALTHY</code> to perform this action. Try again when the status is <code>HEALTHY</code>.
 *         </p>
 *
 * @throws {@link DataUnavailableException} (client fault)
 *  <p>The requested data is unavailable.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class GetCostComparisonDriversCommand extends $Command
  .classBuilder<
    GetCostComparisonDriversCommandInput,
    GetCostComparisonDriversCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "GetCostComparisonDrivers", {})
  .n("CostExplorerClient", "GetCostComparisonDriversCommand")
  .f(void 0, void 0)
  .ser(se_GetCostComparisonDriversCommand)
  .de(de_GetCostComparisonDriversCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCostComparisonDriversRequest;
      output: GetCostComparisonDriversResponse;
    };
    sdk: {
      input: GetCostComparisonDriversCommandInput;
      output: GetCostComparisonDriversCommandOutput;
    };
  };
}
