// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCostAndUsageWithResourcesRequest, GetCostAndUsageWithResourcesResponse } from "../models/models_0";
import {
  de_GetCostAndUsageWithResourcesCommand,
  se_GetCostAndUsageWithResourcesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCostAndUsageWithResourcesCommand}.
 */
export interface GetCostAndUsageWithResourcesCommandInput extends GetCostAndUsageWithResourcesRequest {}
/**
 * @public
 *
 * The output of {@link GetCostAndUsageWithResourcesCommand}.
 */
export interface GetCostAndUsageWithResourcesCommandOutput
  extends GetCostAndUsageWithResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which
 *       cost and usage-related metric, such as <code>BlendedCosts</code> or
 *       <code>UsageQuantity</code>, that you want the request to return. You can also filter and group
 *       your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a
 *       specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p>
 *          <p>Hourly granularity is only available for EC2-Instances (Elastic Compute Cloud)
 *       resource-level data. All other resource-level data is available at daily
 *       granularity.</p>
 *          <note>
 *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer
 *         Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling
 *           Access for Cost Explorer</a> in the <i>Billing and Cost Management User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageWithResourcesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageWithResourcesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // GetCostAndUsageWithResourcesRequest
 *   TimePeriod: { // DateInterval
 *     Start: "STRING_VALUE", // required
 *     End: "STRING_VALUE", // required
 *   },
 *   Granularity: "DAILY" || "MONTHLY" || "HOURLY", // required
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
 *   Metrics: [ // MetricNames
 *     "STRING_VALUE",
 *   ],
 *   GroupBy: [ // GroupDefinitions
 *     { // GroupDefinition
 *       Type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *       Key: "STRING_VALUE",
 *     },
 *   ],
 *   BillingViewArn: "STRING_VALUE",
 *   NextPageToken: "STRING_VALUE",
 * };
 * const command = new GetCostAndUsageWithResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetCostAndUsageWithResourcesResponse
 * //   NextPageToken: "STRING_VALUE",
 * //   GroupDefinitions: [ // GroupDefinitions
 * //     { // GroupDefinition
 * //       Type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 * //       Key: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ResultsByTime: [ // ResultsByTime
 * //     { // ResultByTime
 * //       TimePeriod: { // DateInterval
 * //         Start: "STRING_VALUE", // required
 * //         End: "STRING_VALUE", // required
 * //       },
 * //       Total: { // Metrics
 * //         "<keys>": { // MetricValue
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //       Groups: [ // Groups
 * //         { // Group
 * //           Keys: [ // Keys
 * //             "STRING_VALUE",
 * //           ],
 * //           Metrics: {
 * //             "<keys>": {
 * //               Amount: "STRING_VALUE",
 * //               Unit: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Estimated: true || false,
 * //     },
 * //   ],
 * //   DimensionValueAttributes: [ // DimensionValuesWithAttributesList
 * //     { // DimensionValuesWithAttributes
 * //       Value: "STRING_VALUE",
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCostAndUsageWithResourcesCommandInput - {@link GetCostAndUsageWithResourcesCommandInput}
 * @returns {@link GetCostAndUsageWithResourcesCommandOutput}
 * @see {@link GetCostAndUsageWithResourcesCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageWithResourcesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link BillExpirationException} (client fault)
 *  <p>The requested report expired. Update the date interval and try again.</p>
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
 * @throws {@link RequestChangedException} (client fault)
 *  <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
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
export class GetCostAndUsageWithResourcesCommand extends $Command
  .classBuilder<
    GetCostAndUsageWithResourcesCommandInput,
    GetCostAndUsageWithResourcesCommandOutput,
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
  .s("AWSInsightsIndexService", "GetCostAndUsageWithResources", {})
  .n("CostExplorerClient", "GetCostAndUsageWithResourcesCommand")
  .f(void 0, void 0)
  .ser(se_GetCostAndUsageWithResourcesCommand)
  .de(de_GetCostAndUsageWithResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCostAndUsageWithResourcesRequest;
      output: GetCostAndUsageWithResourcesResponse;
    };
    sdk: {
      input: GetCostAndUsageWithResourcesCommandInput;
      output: GetCostAndUsageWithResourcesCommandOutput;
    };
  };
}
