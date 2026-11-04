// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBudgetActionHistoriesRequest, DescribeBudgetActionHistoriesResponse } from "../models/models_0";
import { DescribeBudgetActionHistories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBudgetActionHistoriesCommand}.
 */
export interface DescribeBudgetActionHistoriesCommandInput extends DescribeBudgetActionHistoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBudgetActionHistoriesCommand}.
 */
export interface DescribeBudgetActionHistoriesCommandOutput extends DescribeBudgetActionHistoriesResponse, __MetadataBearer {}

/**
 * Describes a budget action history detail.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionHistoriesCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionHistoriesCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // DescribeBudgetActionHistoriesRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   ActionId: "STRING_VALUE", // required
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"),
 *     End: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBudgetActionHistoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBudgetActionHistoriesResponse
 * //   ActionHistories: [ // ActionHistories // required
 * //     { // ActionHistory
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //       EventType: "SYSTEM" || "CREATE_ACTION" || "DELETE_ACTION" || "UPDATE_ACTION" || "EXECUTE_ACTION", // required
 * //       ActionHistoryDetails: { // ActionHistoryDetails
 * //         Message: "STRING_VALUE", // required
 * //         Action: { // Action
 * //           ActionId: "STRING_VALUE", // required
 * //           BudgetName: "STRING_VALUE", // required
 * //           NotificationType: "ACTUAL" || "FORECASTED", // required
 * //           ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
 * //           ActionThreshold: { // ActionThreshold
 * //             ActionThresholdValue: Number("double"), // required
 * //             ActionThresholdType: "PERCENTAGE" || "ABSOLUTE_VALUE", // required
 * //           },
 * //           Definition: { // Definition
 * //             IamActionDefinition: { // IamActionDefinition
 * //               PolicyArn: "STRING_VALUE", // required
 * //               Roles: [ // Roles
 * //                 "STRING_VALUE",
 * //               ],
 * //               Groups: [ // Groups
 * //                 "STRING_VALUE",
 * //               ],
 * //               Users: [ // Users
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             ScpActionDefinition: { // ScpActionDefinition
 * //               PolicyId: "STRING_VALUE", // required
 * //               TargetIds: [ // TargetIds // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             SsmActionDefinition: { // SsmActionDefinition
 * //               ActionSubType: "STOP_EC2_INSTANCES" || "STOP_RDS_INSTANCES", // required
 * //               Region: "STRING_VALUE", // required
 * //               InstanceIds: [ // InstanceIds // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           ExecutionRoleArn: "STRING_VALUE", // required
 * //           ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 * //           Status: "STANDBY" || "PENDING" || "EXECUTION_IN_PROGRESS" || "EXECUTION_SUCCESS" || "EXECUTION_FAILURE" || "REVERSE_IN_PROGRESS" || "REVERSE_SUCCESS" || "REVERSE_FAILURE" || "RESET_IN_PROGRESS" || "RESET_FAILURE", // required
 * //           Subscribers: [ // Subscribers // required
 * //             { // Subscriber
 * //               SubscriptionType: "SNS" || "EMAIL", // required
 * //               Address: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBudgetActionHistoriesCommandInput - {@link DescribeBudgetActionHistoriesCommandInput}
 * @returns {@link DescribeBudgetActionHistoriesCommandOutput}
 * @see {@link DescribeBudgetActionHistoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionHistoriesCommandOutput} for command's `response` shape.
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
export class DescribeBudgetActionHistoriesCommand extends command<DescribeBudgetActionHistoriesCommandInput, DescribeBudgetActionHistoriesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBudgetActionHistories",
  DescribeBudgetActionHistories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBudgetActionHistoriesRequest;
      output: DescribeBudgetActionHistoriesResponse;
    };
    sdk: {
      input: DescribeBudgetActionHistoriesCommandInput;
      output: DescribeBudgetActionHistoriesCommandOutput;
    };
  };
}
