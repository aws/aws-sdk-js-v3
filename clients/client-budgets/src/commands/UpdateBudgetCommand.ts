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
 *             <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
