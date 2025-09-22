// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBudgetRequest, CreateBudgetResponse } from "../models/models_0";
import { CreateBudget } from "../schemas/schemas_12_Budget";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandInput extends CreateBudgetRequest {}
/**
 * @public
 *
 * The output of {@link CreateBudgetCommand}.
 */
export interface CreateBudgetCommandOutput extends CreateBudgetResponse, __MetadataBearer {}

/**
 * <p>Creates a budget to set spending thresholds for your rendering activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateBudgetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateBudgetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // CreateBudgetRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   usageTrackingResource: { // UsageTrackingResource Union: only one key present
 *     queueId: "STRING_VALUE",
 *   },
 *   displayName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   approximateDollarLimit: Number("float"), // required
 *   actions: [ // BudgetActionsToAdd // required
 *     { // BudgetActionToAdd
 *       type: "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 *       thresholdPercentage: Number("float"), // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   schedule: { // BudgetSchedule Union: only one key present
 *     fixed: { // FixedBudgetSchedule
 *       startTime: new Date("TIMESTAMP"), // required
 *       endTime: new Date("TIMESTAMP"), // required
 *     },
 *   },
 * };
 * const command = new CreateBudgetCommand(input);
 * const response = await client.send(command);
 * // { // CreateBudgetResponse
 * //   budgetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBudgetCommandInput - {@link CreateBudgetCommandInput}
 * @returns {@link CreateBudgetCommandOutput}
 * @see {@link CreateBudgetCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CreateBudgetCommand extends $Command
  .classBuilder<
    CreateBudgetCommandInput,
    CreateBudgetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "CreateBudget", {})
  .n("DeadlineClient", "CreateBudgetCommand")
  .sc(CreateBudget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBudgetRequest;
      output: CreateBudgetResponse;
    };
    sdk: {
      input: CreateBudgetCommandInput;
      output: CreateBudgetCommandOutput;
    };
  };
}
