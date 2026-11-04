// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationResponse,
} from "../models/models_0";
import { DescribeSubscribersForNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeSubscribersForNotificationCommandOutput extends DescribeSubscribersForNotificationResponse, __MetadataBearer {}

/**
 * Lists the subscribers that are associated with a notification.
 *
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
 *
 * You are not authorized to use this operation with the given parameters.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *
 * The pagination token expired.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The pagination token is invalid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * We can’t locate the resource that you specified.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of API requests has exceeded the maximum allowed API request throttling limit for the account.
 *
 * @throws {@link BudgetsServiceException}
 *
 * Base exception class for all service exceptions from Budgets service.
 *
 * @public
 */
export class DescribeSubscribersForNotificationCommand extends command<DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSubscribersForNotification",
  DescribeSubscribersForNotification$
) {
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
