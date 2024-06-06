// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/models_0";
import { de_DeleteNotificationCommand, se_DeleteNotificationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a notification.</p>
 *          <important>
 *             <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
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
export class DeleteNotificationCommand extends $Command
  .classBuilder<
    DeleteNotificationCommandInput,
    DeleteNotificationCommandOutput,
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
  .s("AWSBudgetServiceGateway", "DeleteNotification", {})
  .n("BudgetsClient", "DeleteNotificationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNotificationCommand)
  .de(de_DeleteNotificationCommand)
  .build() {}
