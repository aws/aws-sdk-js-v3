// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationResponse,
} from "../models/models_0";
import { DescribeSubscribersForNotification } from "../schemas/schemas_2_Budget";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubscribersForNotificationCommand}.
 */
export interface DescribeSubscribersForNotificationCommandInput extends DescribeSubscribersForNotificationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscribersForNotificationCommand}.
 */
export interface DescribeSubscribersForNotificationCommandOutput
  extends DescribeSubscribersForNotificationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the subscribers that are associated with a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeSubscribersForNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeSubscribersForNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DescribeSubscribersForNotificationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   Notification: { // Notification
 *     NotificationType: "ACTUAL" || "FORECASTED", // required
 *     ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *     NotificationState: "OK" || "ALARM",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSubscribersForNotificationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubscribersForNotificationResponse
 * //   Subscribers: [ // Subscribers
 * //     { // Subscriber
 * //       SubscriptionType: "SNS" || "EMAIL", // required
 * //       Address: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSubscribersForNotificationCommandInput - {@link DescribeSubscribersForNotificationCommandInput}
 * @returns {@link DescribeSubscribersForNotificationCommandOutput}
 * @see {@link DescribeSubscribersForNotificationCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribersForNotificationCommandOutput} for command's `response` shape.
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
export class DescribeSubscribersForNotificationCommand extends $Command
  .classBuilder<
    DescribeSubscribersForNotificationCommandInput,
    DescribeSubscribersForNotificationCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "DescribeSubscribersForNotification", {})
  .n("BudgetsClient", "DescribeSubscribersForNotificationCommand")
  .sc(DescribeSubscribersForNotification)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSubscribersForNotificationRequest;
      output: DescribeSubscribersForNotificationResponse;
    };
    sdk: {
      input: DescribeSubscribersForNotificationCommandInput;
      output: DescribeSubscribersForNotificationCommandOutput;
    };
  };
}
