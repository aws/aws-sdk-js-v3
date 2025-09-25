// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse } from "../models/models_0";
import { DescribeBudgetPerformanceHistory } from "../schemas/schemas_2_Budget";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetPerformanceHistoryCommand}.
 */
export interface DescribeBudgetPerformanceHistoryCommandInput extends DescribeBudgetPerformanceHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetPerformanceHistoryCommand}.
 */
export interface DescribeBudgetPerformanceHistoryCommandOutput
  extends DescribeBudgetPerformanceHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetPerformanceHistoryRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"),
 *     End: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetPerformanceHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetPerformanceHistoryResponse
 * //   BudgetPerformanceHistory: { // BudgetPerformanceHistory
 * //     BudgetName: "STRING_VALUE",
 * //     BudgetType: "USAGE" || "COST" || "RI_UTILIZATION" || "RI_COVERAGE" || "SAVINGS_PLANS_UTILIZATION" || "SAVINGS_PLANS_COVERAGE",
 * //     CostFilters: { // CostFilters
 * //       "<keys>": [ // DimensionValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CostTypes: { // CostTypes
 * //       IncludeTax: true || false,
 * //       IncludeSubscription: true || false,
 * //       UseBlended: true || false,
 * //       IncludeRefund: true || false,
 * //       IncludeCredit: true || false,
 * //       IncludeUpfront: true || false,
 * //       IncludeRecurring: true || false,
 * //       IncludeOtherSubscription: true || false,
 * //       IncludeSupport: true || false,
 * //       IncludeDiscount: true || false,
 * //       UseAmortized: true || false,
 * //     },
 * //     TimeUnit: "DAILY" || "MONTHLY" || "QUARTERLY" || "ANNUALLY" || "CUSTOM",
 * //     BillingViewArn: "STRING_VALUE",
 * //     BudgetedAndActualAmountsList: [ // BudgetedAndActualAmountsList
 * //       { // BudgetedAndActualAmounts
 * //         BudgetedAmount: { // Spend
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         ActualAmount: {
 * //           Amount: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //         TimePeriod: { // TimePeriod
 * //           Start: new Date("TIMESTAMP"),
 * //           End: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetPerformanceHistoryCommandInput - {@link DescribeBudgetPerformanceHistoryCommandInput}
 * @returns {@link DescribeBudgetPerformanceHistoryCommandOutput}
 * @see {@link DescribeBudgetPerformanceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetPerformanceHistoryCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeBudgetPerformanceHistoryCommand extends $Command
  .classBuilder<
    DescribeBudgetPerformanceHistoryCommandInput,
    DescribeBudgetPerformanceHistoryCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "DescribeBudgetPerformanceHistory", {})
  .n("BudgetsClient", "DescribeBudgetPerformanceHistoryCommand")
  .sc(DescribeBudgetPerformanceHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBudgetPerformanceHistoryRequest;
      output: DescribeBudgetPerformanceHistoryResponse;
    };
    sdk: {
      input: DescribeBudgetPerformanceHistoryCommandInput;
      output: DescribeBudgetPerformanceHistoryCommandOutput;
    };
  };
}
