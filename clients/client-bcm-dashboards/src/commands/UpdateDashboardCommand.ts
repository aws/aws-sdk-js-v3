// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BCMDashboardsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDashboardsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_0";
import { UpdateDashboard } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {}

/**
 * <p>Updates an existing dashboard's properties, including its name, description, and widget configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDashboardsClient, UpdateDashboardCommand } from "@aws-sdk/client-bcm-dashboards"; // ES Modules import
 * // const { BCMDashboardsClient, UpdateDashboardCommand } = require("@aws-sdk/client-bcm-dashboards"); // CommonJS import
 * // import type { BCMDashboardsClientConfig } from "@aws-sdk/client-bcm-dashboards";
 * const config = {}; // type is BCMDashboardsClientConfig
 * const client = new BCMDashboardsClient(config);
 * const input = { // UpdateDashboardRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   widgets: [ // WidgetList
 *     { // Widget
 *       title: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       width: Number("int"),
 *       height: Number("int"),
 *       horizontalOffset: Number("int"),
 *       configs: [ // WidgetConfigList // required
 *         { // WidgetConfig
 *           queryParameters: { // QueryParameters Union: only one key present
 *             costAndUsage: { // CostAndUsageQuery
 *               metrics: [ // MetricNames // required
 *                 "AmortizedCost" || "BlendedCost" || "NetAmortizedCost" || "NetUnblendedCost" || "NormalizedUsageAmount" || "UnblendedCost" || "UsageQuantity" || "SpendCoveredBySavingsPlans" || "Hour" || "Unit" || "Cost",
 *               ],
 *               timeRange: { // DateTimeRange
 *                 startTime: { // DateTimeValue
 *                   type: "ABSOLUTE" || "RELATIVE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 endTime: {
 *                   type: "ABSOLUTE" || "RELATIVE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *               },
 *               granularity: "HOURLY" || "DAILY" || "MONTHLY", // required
 *               groupBy: [ // GroupDefinitions
 *                 { // GroupDefinition
 *                   key: "STRING_VALUE", // required
 *                   type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *                 },
 *               ],
 *               filter: { // Expression
 *                 or: [ // Expressions
 *                   {
 *                     or: [
 *                       "<Expression>",
 *                     ],
 *                     and: [
 *                       "<Expression>",
 *                     ],
 *                     not: "<Expression>",
 *                     dimensions: { // DimensionValues
 *                       key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "RESOURCE_ID" || "SUBSCRIPTION_ID" || "TAG_KEY" || "OPERATING_SYSTEM" || "TENANCY" || "BILLING_ENTITY" || "RESERVATION_ID" || "COST_CATEGORY_NAME" || "DATABASE_ENGINE" || "LEGAL_ENTITY_NAME" || "SAVINGS_PLANS_TYPE" || "INSTANCE_TYPE_FAMILY" || "CACHE_ENGINE" || "DEPLOYMENT_OPTION" || "SCOPE" || "PLATFORM", // required
 *                       values: [ // StringList // required
 *                         "STRING_VALUE",
 *                       ],
 *                       matchOptions: [ // MatchOptions
 *                         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *                       ],
 *                     },
 *                     tags: { // TagValues
 *                       key: "STRING_VALUE",
 *                       values: [
 *                         "STRING_VALUE",
 *                       ],
 *                       matchOptions: [
 *                         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *                       ],
 *                     },
 *                     costCategories: { // CostCategoryValues
 *                       key: "STRING_VALUE",
 *                       values: [
 *                         "STRING_VALUE",
 *                       ],
 *                       matchOptions: [
 *                         "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *                       ],
 *                     },
 *                   },
 *                 ],
 *                 and: [
 *                   "<Expression>",
 *                 ],
 *                 not: "<Expression>",
 *                 dimensions: {
 *                   key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "RESOURCE_ID" || "SUBSCRIPTION_ID" || "TAG_KEY" || "OPERATING_SYSTEM" || "TENANCY" || "BILLING_ENTITY" || "RESERVATION_ID" || "COST_CATEGORY_NAME" || "DATABASE_ENGINE" || "LEGAL_ENTITY_NAME" || "SAVINGS_PLANS_TYPE" || "INSTANCE_TYPE_FAMILY" || "CACHE_ENGINE" || "DEPLOYMENT_OPTION" || "SCOPE" || "PLATFORM", // required
 *                   values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                   matchOptions: [
 *                     "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *                   ],
 *                 },
 *                 tags: {
 *                   key: "STRING_VALUE",
 *                   values: [
 *                     "STRING_VALUE",
 *                   ],
 *                   matchOptions: [
 *                     "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *                   ],
 *                 },
 *                 costCategories: {
 *                   key: "STRING_VALUE",
 *                   values: "<StringList>",
 *                   matchOptions: "<MatchOptions>",
 *                 },
 *               },
 *             },
 *             savingsPlansCoverage: { // SavingsPlansCoverageQuery
 *               timeRange: {
 *                 startTime: {
 *                   type: "ABSOLUTE" || "RELATIVE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 endTime: {
 *                   type: "ABSOLUTE" || "RELATIVE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *               },
 *               metrics: [
 *                 "AmortizedCost" || "BlendedCost" || "NetAmortizedCost" || "NetUnblendedCost" || "NormalizedUsageAmount" || "UnblendedCost" || "UsageQuantity" || "SpendCoveredBySavingsPlans" || "Hour" || "Unit" || "Cost",
 *               ],
 *               granularity: "HOURLY" || "DAILY" || "MONTHLY",
 *               groupBy: [
 *                 {
 *                   key: "STRING_VALUE", // required
 *                   type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *                 },
 *               ],
 *               filter: "<Expression>",
 *             },
 *             savingsPlansUtilization: { // SavingsPlansUtilizationQuery
 *               timeRange: {
 *                 startTime: {
 *                   type: "ABSOLUTE" || "RELATIVE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *                 endTime: "<DateTimeValue>", // required
 *               },
 *               granularity: "HOURLY" || "DAILY" || "MONTHLY",
 *               filter: "<Expression>",
 *             },
 *             reservationCoverage: { // ReservationCoverageQuery
 *               timeRange: {
 *                 startTime: "<DateTimeValue>", // required
 *                 endTime: "<DateTimeValue>", // required
 *               },
 *               groupBy: [
 *                 {
 *                   key: "STRING_VALUE", // required
 *                   type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *                 },
 *               ],
 *               granularity: "HOURLY" || "DAILY" || "MONTHLY",
 *               filter: "<Expression>",
 *               metrics: [
 *                 "AmortizedCost" || "BlendedCost" || "NetAmortizedCost" || "NetUnblendedCost" || "NormalizedUsageAmount" || "UnblendedCost" || "UsageQuantity" || "SpendCoveredBySavingsPlans" || "Hour" || "Unit" || "Cost",
 *               ],
 *             },
 *             reservationUtilization: { // ReservationUtilizationQuery
 *               timeRange: {
 *                 startTime: "<DateTimeValue>", // required
 *                 endTime: "<DateTimeValue>", // required
 *               },
 *               groupBy: [
 *                 {
 *                   key: "STRING_VALUE", // required
 *                   type: "DIMENSION" || "TAG" || "COST_CATEGORY",
 *                 },
 *               ],
 *               granularity: "HOURLY" || "DAILY" || "MONTHLY",
 *               filter: "<Expression>",
 *             },
 *           },
 *           displayConfig: { // DisplayConfig Union: only one key present
 *             graph: { // GraphDisplayConfigMap
 *               "<keys>": { // GraphDisplayConfig
 *                 visualType: "LINE" || "BAR" || "STACK", // required
 *               },
 *             },
 *             table: {},
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateDashboardCommandInput - {@link UpdateDashboardCommandInput}
 * @returns {@link UpdateDashboardCommandOutput}
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link BCMDashboardsClientResolvedConfig | config} for BCMDashboardsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Verify your IAM permissions and any resource policies.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred while processing the request. Retry your request. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource (dashboard, policy, or widget) was not found. Verify the ARN and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and use exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters do not satisfy the requirements. Check the error message for specific validation details.</p>
 *
 * @throws {@link BCMDashboardsServiceException}
 * <p>Base exception class for all service exceptions from BCMDashboards service.</p>
 *
 *
 * @example Updating a dashboard
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:bcm-dashboards::123456789012:dashboard/abcd1234-ab12-12ab-1ab2-abcd1234efgh",
 *   description: "Dashboard for tracking costs version 2",
 *   name: "cost-dashboards-updated",
 *   widgets: [
 *     {
 *       configs: [
 *         {
 *           displayConfig: {
 *             graph: {
 *               costTrend: {
 *                 visualType: "LINE"
 *               }
 *             }
 *           },
 *           queryParameters: {
 *             costAndUsage: {
 *               granularity: "MONTHLY",
 *               groupBy: [
 *                 {
 *                   key: "SERVICE",
 *                   type: "DIMENSION"
 *                 }
 *               ],
 *               metrics: [
 *                 "UnblendedCost"
 *               ],
 *               timeRange: {
 *                 endTime: {
 *                   type: "RELATIVE",
 *                   value: "now"
 *                 },
 *                 startTime: {
 *                   type: "RELATIVE",
 *                   value: "-3M"
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       ],
 *       height: 7,
 *       horizontalOffset: 2,
 *       title: "Monthly Cost Trend",
 *       width: 4
 *     }
 *   ]
 * };
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDashboardCommand extends $Command
  .classBuilder<
    UpdateDashboardCommandInput,
    UpdateDashboardCommandOutput,
    BCMDashboardsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDashboardsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBCMDashboardsService", "UpdateDashboard", {})
  .n("BCMDashboardsClient", "UpdateDashboardCommand")
  .sc(UpdateDashboard)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardRequest;
      output: UpdateDashboardResponse;
    };
    sdk: {
      input: UpdateDashboardCommandInput;
      output: UpdateDashboardCommandOutput;
    };
  };
}
