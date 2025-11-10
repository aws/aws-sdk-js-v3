// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBudgetActionRequest, UpdateBudgetActionResponse } from "../models/models_0";
import { UpdateBudgetAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBudgetActionCommand}.
 */
export interface UpdateBudgetActionCommandInput extends UpdateBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBudgetActionCommand}.
 */
export interface UpdateBudgetActionCommandOutput extends UpdateBudgetActionResponse, __MetadataBearer {}

/**
 * <p>
 *          Updates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // UpdateBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   NotificationType: "ACTUAL" || "FORECASTED",
 *   ActionThreshold: { // ActionThreshold
 *     ActionThresholdValue: Number("double"), // required
 *     ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 *   },
 *   Definition: { // Definition
 *     IamActionDefinition: { // IamActionDefinition
 *       PolicyArn: "STRING_VALUE", // required
 *       Roles: [ // Roles
 *         "STRING_VALUE",
 *       ],
 *       Groups: [ // Groups
 *         "STRING_VALUE",
 *       ],
 *       Users: [ // Users
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ScpActionDefinition: { // ScpActionDefinition
 *       PolicyId: "STRING_VALUE", // required
 *       TargetIds: [ // TargetIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     SsmActionDefinition: { // SsmActionDefinition
 *       ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 *       Region: "STRING_VALUE", // required
 *       InstanceIds: [ // InstanceIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   ApprovalModel: "AUTOMATIC" || "MANUAL",
 *   Subscribers: [ // Subscribers
 *     { // Subscriber
 *       SubscriptionType: "SNS" || "EMAIL", // required
 *       Address: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   OldAction: { // Action
 * //     ActionId: "STRING_VALUE", // required
 * //     BudgetName: "STRING_VALUE", // required
 * //     NotificationType: "ACTUAL" || "FORECASTED", // required
 * //     ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //     ActionThreshold: { // ActionThreshold
 * //       ActionThresholdValue: Number("double"), // required
 * //       ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //     },
 * //     Definition: { // Definition
 * //       IamActionDefinition: { // IamActionDefinition
 * //         PolicyArn: "STRING_VALUE", // required
 * //         Roles: [ // Roles
 * //           "STRING_VALUE",
 * //         ],
 * //         Groups: [ // Groups
 * //           "STRING_VALUE",
 * //         ],
 * //         Users: [ // Users
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ScpActionDefinition: { // ScpActionDefinition
 * //         PolicyId: "STRING_VALUE", // required
 * //         TargetIds: [ // TargetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SsmActionDefinition: { // SsmActionDefinition
 * //         ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //         Region: "STRING_VALUE", // required
 * //         InstanceIds: [ // InstanceIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE", // required
 * //     ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //     Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //     Subscribers: [ // Subscribers // required
 * //       { // Subscriber
 * //         SubscriptionType: "SNS" || "EMAIL", // required
 * //         Address: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   NewAction: {
 * //     ActionId: "STRING_VALUE", // required
 * //     BudgetName: "STRING_VALUE", // required
 * //     NotificationType: "ACTUAL" || "FORECASTED", // required
 * //     ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //     ActionThreshold: {
 * //       ActionThresholdValue: Number("double"), // required
 * //       ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //     },
 * //     Definition: {
 * //       IamActionDefinition: {
 * //         PolicyArn: "STRING_VALUE", // required
 * //         Roles: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Groups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Users: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ScpActionDefinition: {
 * //         PolicyId: "STRING_VALUE", // required
 * //         TargetIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SsmActionDefinition: {
 * //         ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //         Region: "STRING_VALUE", // required
 * //         InstanceIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE", // required
 * //     ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //     Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //     Subscribers: [ // required
 * //       {
 * //         SubscriptionType: "SNS" || "EMAIL", // required
 * //         Address: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBudgetActionCommandInput - {@link UpdateBudgetActionCommandInput}
 * @returns {@link UpdateBudgetActionCommandOutput}
 * @see {@link UpdateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link UpdateBudgetActionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLockedException} (client fault)
 *  <p>The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource.</p>
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
export class UpdateBudgetActionCommand extends $Command
  .classBuilder<
    UpdateBudgetActionCommandInput,
    UpdateBudgetActionCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "UpdateBudgetAction", {})
  .n("BudgetsClient", "UpdateBudgetActionCommand")
  .sc(UpdateBudgetAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBudgetActionRequest;
      output: UpdateBudgetActionResponse;
    };
    sdk: {
      input: UpdateBudgetActionCommandInput;
      output: UpdateBudgetActionCommandOutput;
    };
  };
}
