// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBudgetActionRequest, CreateBudgetActionResponse } from "../models/models_0";
import { CreateBudgetAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBudgetActionCommand}.
 */
export interface CreateBudgetActionCommandInput extends CreateBudgetActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateBudgetActionCommand}.
 */
export interface CreateBudgetActionCommandOutput extends CreateBudgetActionResponse, __MetadataBearer {}

/**
 * <p>
 *          Creates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * // import type { BudgetsClientConfig } from "@aws-sdk/client-budgets";
 * const config = {}; // type is BudgetsClientConfig
 * const client = new BudgetsClient(config);
 * const input = { // CreateBudgetActionRequest
 *   AccountId: "STRING_VALUE", // required
 *   BudgetName: "STRING_VALUE", // required
 *   NotificationType: "ACTUAL" || "FORECASTED", // required
 *   ActionType: "APPLY_IAM_POLICY" || "APPLY_SCP_POLICY" || "RUN_SSM_DOCUMENTS", // required
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
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   ApprovalModel: "AUTOMATIC" || "MANUAL", // required
 *   Subscribers: [ // Subscribers // required
 *     { // Subscriber
 *       SubscriptionType: "SNS" || "EMAIL", // required
 *       Address: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResourceTags: [ // ResourceTagList
 *     { // ResourceTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBudgetActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBudgetActionResponse
 * //   AccountId: "STRING_VALUE", // required
 * //   BudgetName: "STRING_VALUE", // required
 * //   ActionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBudgetActionCommandInput - {@link CreateBudgetActionCommandInput}
 * @returns {@link CreateBudgetActionCommandOutput}
 * @see {@link CreateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetActionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've reached a Service Quota limit on this resource.</p>
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
export class CreateBudgetActionCommand extends $Command
  .classBuilder<
    CreateBudgetActionCommandInput,
    CreateBudgetActionCommandOutput,
    BudgetsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BudgetsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBudgetServiceGateway", "CreateBudgetAction", {})
  .n("BudgetsClient", "CreateBudgetActionCommand")
  .sc(CreateBudgetAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBudgetActionRequest;
      output: CreateBudgetActionResponse;
    };
    sdk: {
      input: CreateBudgetActionCommandInput;
      output: CreateBudgetActionCommandOutput;
    };
  };
}
