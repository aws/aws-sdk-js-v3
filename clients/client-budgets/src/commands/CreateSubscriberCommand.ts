// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSubscriberRequest, CreateSubscriberResponse } from "../models/models_0";
import { CreateSubscriber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandInput extends CreateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandOutput extends CreateSubscriberResponse, __MetadataBearer {}

/**
 * <p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // CreateSubscriberRequest
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
 * const command = new CreateSubscriberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSubscriberCommandInput - {@link CreateSubscriberCommandInput}
 * @returns {@link CreateSubscriberCommandOutput}
 * @see {@link CreateSubscriberCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link CreationLimitExceededException} (client fault)
 *  <p>You've exceeded the notification or subscriber limit.</p>
 *
 * @throws {@link DuplicateRecordException} (client fault)
 *  <p>The budget name already exists. Budget names must be unique within an account.</p>
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
 *
 * @public
 */
export class CreateSubscriberCommand extends $Command
  .classBuilder<
    CreateSubscriberCommandInput,
    CreateSubscriberCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "CreateSubscriber", {})
  .n("BudgetsClient", "CreateSubscriberCommand")
  .sc(CreateSubscriber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriberRequest;
      output: {};
    };
    sdk: {
      input: CreateSubscriberCommandInput;
      output: CreateSubscriberCommandOutput;
    };
  };
}
