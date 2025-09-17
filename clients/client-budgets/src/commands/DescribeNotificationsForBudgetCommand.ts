// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNotificationsForBudgetRequest, DescribeNotificationsForBudgetResponse } from "../models/models_0";
import {
  de_DescribeNotificationsForBudgetCommand,
  se_DescribeNotificationsForBudgetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationsForBudgetCommand}.
 */
export interface DescribeNotificationsForBudgetCommandInput extends DescribeNotificationsForBudgetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationsForBudgetCommand}.
 */
export interface DescribeNotificationsForBudgetCommandOutput
  extends DescribeNotificationsForBudgetResponse,
    __MetadataBearer {}

/**
 * <p>Lists the notifications that are associated with a budget.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeNotificationsForBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeNotificationsForBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DescribeNotificationsForBudgetRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNotificationsForBudgetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationsForBudgetResponse
 * //   Notifications: [ // Notifications
 * //     { // Notification
 * //       NotificationType: "ACTUAL" || "FORECASTED", // required
 * //       ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 * //       Threshold: Number("double"), // required
 * //       ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 * //       NotificationState: "OK" || "ALARM",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotificationsForBudgetCommandInput - {@link DescribeNotificationsForBudgetCommandInput}
 * @returns {@link DescribeNotificationsForBudgetCommandOutput}
 * @see {@link DescribeNotificationsForBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationsForBudgetCommandOutput} for command's `response` shape.
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
export class DescribeNotificationsForBudgetCommand extends $Command
  .classBuilder<
    DescribeNotificationsForBudgetCommandInput,
    DescribeNotificationsForBudgetCommandOutput,
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
  .s("AWSBudgetServiceGateway", "DescribeNotificationsForBudget", {})
  .n("BudgetsClient", "DescribeNotificationsForBudgetCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNotificationsForBudgetCommand)
  .de(de_DescribeNotificationsForBudgetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotificationsForBudgetRequest;
      output: DescribeNotificationsForBudgetResponse;
    };
    sdk: {
      input: DescribeNotificationsForBudgetCommandInput;
      output: DescribeNotificationsForBudgetCommandOutput;
    };
  };
}
