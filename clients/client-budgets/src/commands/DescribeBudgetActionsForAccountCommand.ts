// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBudgetActionsForAccountRequest, DescribeBudgetActionsForAccountResponse } from "../models/models_0";
import { DescribeBudgetActionsForAccount } from "../schemas/schemas_2_Budget";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandInput extends DescribeBudgetActionsForAccountRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionsForAccountCommand}.
 */
export interface DescribeBudgetActionsForAccountCommandOutput
  extends DescribeBudgetActionsForAccountResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionsForAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionsForAccountCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionsForAccountResponse
 * //   Actions: [ // Actions // required
 * //     { // Action
 * //       ActionId: "STRING_VALUE", // required
 * //       BudgetName: "STRING_VALUE", // required
 * //       NotificationType: "ACTUAL" || "FORECASTED", // required
 * //       ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //       ActionThreshold: { // ActionThreshold
 * //         ActionThresholdValue: Number("double"), // required
 * //         ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //       },
 * //       Definition: { // Definition
 * //         IamActionDefinition: { // IamActionDefinition
 * //           PolicyArn: "STRING_VALUE", // required
 * //           Roles: [ // Roles
 * //             "STRING_VALUE",
 * //           ],
 * //           Groups: [ // Groups
 * //             "STRING_VALUE",
 * //           ],
 * //           Users: [ // Users
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ScpActionDefinition: { // ScpActionDefinition
 * //           PolicyId: "STRING_VALUE", // required
 * //           TargetIds: [ // TargetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         SsmActionDefinition: { // SsmActionDefinition
 * //           ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //           Region: "STRING_VALUE", // required
 * //           InstanceIds: [ // InstanceIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ExecutionRoleArn: "STRING_VALUE", // required
 * //       ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //       Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //       Subscribers: [ // Subscribers // required
 * //         { // Subscriber
 * //           SubscriptionType: "SNS" || "EMAIL", // required
 * //           Address: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetActionsForAccountCommandInput - {@link DescribeBudgetActionsForAccountCommandInput}
 * @returns {@link DescribeBudgetActionsForAccountCommandOutput}
 * @see {@link DescribeBudgetActionsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForAccountCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for BudgetsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
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
export class DescribeBudgetActionsForAccountCommand extends $Command
  .classBuilder<
    DescribeBudgetActionsForAccountCommandInput,
    DescribeBudgetActionsForAccountCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "DescribeBudgetActionsForAccount", {})
  .n("BudgetsClient", "DescribeBudgetActionsForAccountCommand")
  .sc(DescribeBudgetActionsForAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBudgetActionsForAccountRequest;
      output: DescribeBudgetActionsForAccountResponse;
    };
    sdk: {
      input: DescribeBudgetActionsForAccountCommandInput;
      output: DescribeBudgetActionsForAccountCommandOutput;
    };
  };
}
