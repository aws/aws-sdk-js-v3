// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteSubscriberRequest,
  DeleteSubscriberRequestFilterSensitiveLog,
  DeleteSubscriberResponse,
} from "../models/models_0";
import { de_DeleteSubscriberCommand, se_DeleteSubscriberCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubscriberCommand}.
 */
export interface DeleteSubscriberCommandInput extends DeleteSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriberCommand}.
 */
export interface DeleteSubscriberCommandOutput extends DeleteSubscriberResponse, __MetadataBearer {}

/**
 * <p>Deletes a subscriber.</p>
 *          <important>
 *             <p>Deleting the last subscriber to a notification also deletes the notification.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const input = { // DeleteSubscriberRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   Notification: { // Notification
 *     NotificationType: "ACTUAL" || "FORECASTED", // required
 *     ComparisonOperator: "GREATER_THAN" || "LESS_THAN" || "EQUAL_TO", // required
 *     Threshold: Number("double"), // required
 *     ThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE",
 *     NotificationState: "OK" || "ALARM",
 *   },
 *   Subscriber: { // Subscriber
 *     SubscriptionType: "SNS" || "EMAIL", // required
 *     Address: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeleteSubscriberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriberCommandInput - {@link DeleteSubscriberCommandInput}
 * @returns {@link DeleteSubscriberCommandOutput}
 * @see {@link DeleteSubscriberCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriberCommandOutput} for command's `response` shape.
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
export class DeleteSubscriberCommand extends $Command
  .classBuilder<
    DeleteSubscriberCommandInput,
    DeleteSubscriberCommandOutput,
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
  .s("AWSBudgetServiceGateway", "DeleteSubscriber", {})
  .n("BudgetsClient", "DeleteSubscriberCommand")
  .f(DeleteSubscriberRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteSubscriberCommand)
  .de(de_DeleteSubscriberCommand)
  .build() {}
