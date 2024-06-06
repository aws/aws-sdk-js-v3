// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBudgetsRequest, DescribeBudgetsResponse } from "../models/models_0";
import { de_DescribeBudgetsCommand, se_DescribeBudgetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetsCommand}.
 */
export interface DescribeBudgetsCommandInput extends DescribeBudgetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetsCommand}.
 */
export interface DescribeBudgetsCommandOutput extends DescribeBudgetsResponse, __MetadataBearer {}

/**
 * <p>Lists the budgets that are associated with an account.</p>
 *          <important>
 *             <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetsCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetsCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetsRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetsResponse
 * //   Budgets: [ // Budgets
 * //     { // Budget
 * //       BudgetName: "STRING_VALUE", // required
 * //       BudgetLimit: { // Spend
 * //         Amount: "STRING_VALUE", // required
 * //         Unit: "STRING_VALUE", // required
 * //       },
 * //       PlannedBudgetLimits: { // PlannedBudgetLimits
 * //         "<keys>": {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       CostFilters: { // CostFilters
 * //         "<keys>": [ // DimensionValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CostTypes: { // CostTypes
 * //         IncludeTax: true || false,
 * //         IncludeSubscription: true || false,
 * //         UseBlended: true || false,
 * //         IncludeRefund: true || false,
 * //         IncludeCredit: true || false,
 * //         IncludeUpfront: true || false,
 * //         IncludeRecurring: true || false,
 * //         IncludeOtherSubscription: true || false,
 * //         IncludeSupport: true || false,
 * //         IncludeDiscount: true || false,
 * //         UseAmortized: true || false,
 * //       },
 * //       TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY", // required
 * //       TimePeriod: { // TimePeriod
 * //         Start: new Date("TIMESTAMP"),
 * //         End: new Date("TIMESTAMP"),
 * //       },
 * //       CalculatedSpend: { // CalculatedSpend
 * //         ActualSpend: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         ForecastedSpend: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE", // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       AutoAdjustData: { // AutoAdjustData
 * //         AutoAdjustType: "HISTORICAL" || "FORECAST", // required
 * //         HistoricalOptions: { // HistoricalOptions
 * //           BudgetAdjustmentPeriod: Number("int"), // required
 * //           LookBackAvailablePeriods: Number("int"),
 * //         },
 * //         LastAutoAdjustTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetsCommandInput - {@link DescribeBudgetsCommandInput}
 * @returns {@link DescribeBudgetsCommandOutput}
 * @see {@link DescribeBudgetsCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetsCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *  <p>The pagination token expired.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid.</p>
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
export class DescribeBudgetsCommand extends $Command
  .classBuilder<
    DescribeBudgetsCommandInput,
    DescribeBudgetsCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBudgetServiceGateway", "DescribeBudgets", {})
  .n("BudgetsClient", "DescribeBudgetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBudgetsCommand)
  .de(de_DescribeBudgetsCommand)
  .build() {}
