// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBudgetRequest, CreateBudgetResponse } from "../models/models_0";
import { CreateBudget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandInput extends CreateBudgetRequest {}
/**
 * @public
 *
 * The output of {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandOutput extends CreateBudgetResponse, __MetadataBearer {}

/**
 * <p>Creates a budget and, if included, notifications and subscribers. </p>
 *          <important>
 *             <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in
 *             the syntax at one time. Use the syntax that matches your use case. The Request Syntax
 *             section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>,
 *             see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section.</p>
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
 * import { BudgetsClient, CreateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // CreateBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   Budget: { // Budget
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
 *   NotificationsWithSubscribers: [ // NotificationWithSubscribersList
 *     { // NotificationWithSubscribers
 *       Notification: { // Notification
 *         NotificationType: "ACTUAL" || "FORECASTED", // required
 *         ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *         Threshold: Number("double"), // required
 *         ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *         NotificationState: "OK" || "ALARM",
 *       },
 *       Subscribers: [ // Subscribers // required
 *         { // Subscriber
 *           SubscriptionType: "SNS" || "EMAIL", // required
 *           Address: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ResourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBudgetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBudgetCommandInput - {@link CreateBudgetCommandInput}
 * @returns {@link CreateBudgetCommandOutput}
 * @see {@link CreateBudgetCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link BillingViewHealthStatusException} (client fault)
 *  <p>
 *       The billing view status must be HEALTHY to perform this action. Try again when the status is HEALTHY.
 *     </p>
 *
 * @throws {@link CreationLimitExceededException} (client fault)
 *  <p>You've exceeded the notification or subscriber limit.</p>
 *
 * @throws {@link DuplicateRecordException} (client fault)
 *  <p>The budget name already exists. Budget names must be unique within an account.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached a Service Quota limit on this resource.</p>
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
export class CreateBudgetCommand extends $Command
  .classBuilder<
    CreateBudgetCommandInput,
    CreateBudgetCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "CreateBudget", {})
  .n("BudgetsClient", "CreateBudgetCommand")
  .sc(CreateBudget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBudgetRequest;
      output: {};
    };
    sdk: {
      input: CreateBudgetCommandInput;
      output: CreateBudgetCommandOutput;
    };
  };
}
