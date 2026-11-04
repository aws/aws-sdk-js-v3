// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/models_0";
import { DeleteNotification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotificationCommand}.
 */
export interface DeleteNotificationCommandInput extends DeleteNotificationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNotificationCommand}.
 */
export interface DeleteNotificationCommandOutput extends DeleteNotificationResponse, __MetadataBearer {}

/**
 * Deletes a notification.
 *
 * > **Important:** Deleting a notification also deletes the subscribers that are associated with the notification.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DeleteNotificationRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   Notification: { // Notification
 *     NotificationType: "ACTUAL" || "FORECASTED", // required
 *     ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *     NotificationState: "OK" || "ALARM",
 *   },
 * };
 * const command = new DeleteNotificationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotificationCommandInput - {@link DeleteNotificationCommandInput}
 * @returns {@link DeleteNotificationCommandOutput}
 * @see {@link DeleteNotificationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to use this operation with the given parameters.
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
export class DeleteNotificationCommand extends command<DeleteNotificationCommandInput, DeleteNotificationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotification",
  DeleteNotification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotificationRequest;
      output: {};
    };
    sdk: {
      input: DeleteNotificationCommandInput;
      output: DeleteNotificationCommandOutput;
    };
  };
}
