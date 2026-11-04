// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateNotificationRequest, CreateNotificationResponse } from "../models/models_0";
import { CreateNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateNotificationCommand}.
 */
export interface CreateNotificationCommandInput extends CreateNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationCommand}.
 */
export interface CreateNotificationCommandOutput extends CreateNotificationResponse, __MetadataBearer {}

/**
 * Creates a notification. You must create the budget before you create the associated notification.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // CreateNotificationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   Notification: { // Notification
 *     NotificationType: "ACTUAL" || "FORECASTED", // required
 *     ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *     NotificationState: "OK" || "ALARM",
 *   },
 *   Subscribers: [ // Subscribers // required
 *     { // Subscriber
 *       SubscriptionType: "SNS" || "EMAIL", // required
 *       Address: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateNotificationCommandInput - {@link CreateNotificationCommandInput}
 * @returns {@link CreateNotificationCommandOutput}
 * @see {@link CreateNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to use this operation with the given parameters.
 *
 * @throws {@link CreationLimitExceededException} (client fault)
 *
 * You've exceeded the notification or subscriber limit.
 *
 * @throws {@link DuplicateRecordException} (client fault)
 *
 * The budget name already exists. Budget names must be unique within an account.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
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
export class CreateNotificationCommand extends command<CreateNotificationCommandInput, CreateNotificationCommandOutput>(
  _ep0,
  _mw0,
  "CreateNotification",
  CreateNotification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationRequest;
      output: {};
    };
    sdk: {
      input: CreateNotificationCommandInput;
      output: CreateNotificationCommandOutput;
    };
  };
}
