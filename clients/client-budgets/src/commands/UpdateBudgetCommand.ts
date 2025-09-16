// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBudgetRequest, UpdateBudgetResponse } from "../models/models_0";
import { de_UpdateBudgetCommand, se_UpdateBudgetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBudgetCommand}.
 */
export interface UpdateBudgetCommandInput extends UpdateBudgetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBudgetCommand}.
 */
export interface UpdateBudgetCommandOutput extends UpdateBudgetResponse, __MetadataBearer {}

/**
 * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p>
 *          <important>
 *             <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in
 *             the syntax at one time. Use the syntax that matches your case. The Request Syntax
 *             section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>,
 *             see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section.</p>
 *             <p>Similarly, only one set of filter and metric selections can be present in the syntax
 *             at one time. Either <code>FilterExpression</code> and <code>Metrics</code> or
 *                <code>CostFilters</code> and <code>CostTypes</code>, not both or a different
 *             combination. We recommend using <code>FilterExpression</code> and <code>Metrics</code>
 *             as they provide more flexible and powerful filtering capabilities. The Request Syntax
 *             section shows the <code>FilterExpression</code>/<code>Metrics</code> syntax.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // UpdateBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   NewBudget: { // Budget
 *     BudgetName: "STRING_VALUE", // required
 *     BudgetLimit: { // Spend
 *       Amount: "STRING_VALUE", // required
 *       Unit: "STRING_VALUE", // required
 *     },
 *     PlannedBudgetLimits: { // PlannedBudgetLimits
 *       "<keys>": {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *     },
 *     CostFilters: { // CostFilters
 *       "<keys>": [ // DimensionValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CostTypes: { // CostTypes
 *       IncludeTax: true || false,
 *       IncludeSubscription: true || false,
 *       UseBlended: true || false,
 *       IncludeRefund: true || false,
 *       IncludeCredit: true || false,
 *       IncludeUpfront: true || false,
 *       IncludeRecurring: true || false,
 *       IncludeOtherSubscription: true || false,
 *       IncludeSupport: true || false,
 *       IncludeDiscount: true || false,
 *       UseAmortized: true || false,
 *     },
 *     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY" || "CUSTOM", // required
 *     TimePeriod: { // TimePeriod
 *       Start: new Date("TIMESTAMP"),
 *       End: new Date("TIMESTAMP"),
 *     },
 *     CalculatedSpend: { // CalculatedSpend
 *       ActualSpend: {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *       ForecastedSpend: {
 *         Amount: "STRING_VALUE", // required
 *         Unit: "STRING_VALUE", // required
 *       },
 *     },
 *     BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE", // required
 *     LastUpdatedTime: new Date("TIMESTAMP"),
 *     AutoAdjustData: { // AutoAdjustData
 *       AutoAdjustType: "HISTORICAL" || "FORECAST", // required
 *       HistoricalOptions: { // HistoricalOptions
 *         BudgetAdjustmentPeriod: Number("int"), // required
 *         LookBackAvailablePeriods: Number("int"),
 *       },
 *       LastAutoAdjustTime: new Date("TIMESTAMP"),
 *     },
 *     FilterExpression: { // Expression
 *       Or: [ // Expressions
 *         {
 *           Or: [
 *             "<Expression>",
 *           ],
 *           And: [
 *             "<Expression>",
 *           ],
 *           Not: "<Expression>",
 *           Dimensions: { // ExpressionDimensionValues
 *             Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "INVOICING_ENTITY" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "RESERVATION_MODIFIED" || "TAG_KEY" || "COST_CATEGORY_NAME", // required
 *             Values: [ // Values // required
 *               "STRING_VALUE",
 *             ],
 *             MatchOptions: [ // MatchOptions
 *               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *             ],
 *           },
 *           Tags: { // TagValues
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *             MatchOptions: [
 *               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *             ],
 *           },
 *           CostCategories: { // CostCategoryValues
 *             Key: "STRING_VALUE",
 *             Values: [
 *               "STRING_VALUE",
 *             ],
 *             MatchOptions: [
 *               "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *             ],
 *           },
 *         },
 *       ],
 *       And: [
 *         "<Expression>",
 *       ],
 *       Not: "<Expression>",
 *       Dimensions: {
 *         Key: "AZ" || "INSTANCE_TYPE" || "LINKED_ACCOUNT" || "LINKED_ACCOUNT_NAME" || "OPERATION" || "PURCHASE_TYPE" || "REGION" || "SERVICE" || "SERVICE_CODE" || "USAGE_TYPE" || "USAGE_TYPE_GROUP" || "RECORD_TYPE" || "OPERATING_SYSTEM" || "TENANCY" || "SCOPE" || "PLATFORM" || "SUBSCRIPTION_ID" || "LEGAL_ENTITY_NAME" || "INVOICING_ENTITY" || "DEPLOYMENT_OPTION" || "DATABASE_ENGINE" || "CACHE_ENGINE" || "INSTANCE_TYPE_FAMILY" || "BILLING_ENTITY" || "RESERVATION_ID" || "RESOURCE_ID" || "RIGHTSIZING_TYPE" || "SAVINGS_PLANS_TYPE" || "SAVINGS_PLAN_ARN" || "PAYMENT_OPTION" || "RESERVATION_MODIFIED" || "TAG_KEY" || "COST_CATEGORY_NAME", // required
 *         Values: [ // required
 *           "STRING_VALUE",
 *         ],
 *         MatchOptions: [
 *           "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *         ],
 *       },
 *       Tags: {
 *         Key: "STRING_VALUE",
 *         Values: [
 *           "STRING_VALUE",
 *         ],
 *         MatchOptions: [
 *           "EQUALS" || "ABSENT" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "GREATER_THAN_OR_EQUAL" || "CASE_SENSITIVE" || "CASE_INSENSITIVE",
 *         ],
 *       },
 *       CostCategories: {
 *         Key: "STRING_VALUE",
 *         Values: "<Values>",
 *         MatchOptions: "<MatchOptions>",
 *       },
 *     },
 *     Metrics: [ // Metrics
 *       "BlendedCost" || "UnblendedCost" || "AmortizedCost" || "NetUnblendedCost" || "NetAmortizedCost" || "UsageQuantity" || "NormalizedUsageAmount" || "Hours",
 *     ],
 *     BillingViewArn: "STRING_VALUE",
 *     HealthStatus: { // HealthStatus
 *       Status: "HEALTHY" || "UNHEALTHY",
 *       StatusReason: "BILLING_VIEW_NO_ACCESS" || "BILLING_VIEW_UNHEALTHY" || "FILTER_INVALID" || "MULTI_YEAR_HISTORICAL_DATA_DISABLED",
 *       LastUpdatedTime: new Date("TIMESTAMP"),
 *     },
 *   },
 * };
 * const command = new UpdateBudgetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBudgetCommandInput - {@link UpdateBudgetCommandInput}
 * @returns {@link UpdateBudgetCommandOutput}
 * @see {@link UpdateBudgetCommandInput} for command's `input` shape.
 * @see {@link UpdateBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can’t locate the resource that you specified.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
 *
 *
 * @public
 */
export class UpdateBudgetCommand extends $Command
  .classBuilder<
    UpdateBudgetCommandInput,
    UpdateBudgetCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBudgetServiceGateway", "UpdateBudget", {})
  .n("BudgetsClient", "UpdateBudgetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBudgetCommand)
  .de(de_UpdateBudgetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBudgetRequest;
      output: {};
    };
    sdk: {
      input: UpdateBudgetCommandInput;
      output: UpdateBudgetCommandOutput;
    };
  };
}
