// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBudgetRequest, CreateBudgetRequestFilterSensitiveLog, CreateBudgetResponse } from "../models/models_0";
import { de_CreateBudgetCommand, se_CreateBudgetCommand } from "../protocols/Aws_json1_1";

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
 *             <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY", // required
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached the limit on the number of tags you can associate with a resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 *
 * @throws {@link BudgetsServiceException}
 * <p>Base exception class for all service exceptions from Budgets service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBudgetServiceGateway", "CreateBudget", {})
  .n("BudgetsClient", "CreateBudgetCommand")
  .f(CreateBudgetRequestFilterSensitiveLog, void 0)
  .ser(se_CreateBudgetCommand)
  .de(de_CreateBudgetCommand)
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
