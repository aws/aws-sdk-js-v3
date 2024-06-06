// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBudgetRequest, UpdateBudgetRequestFilterSensitiveLog, UpdateBudgetResponse } from "../models/models_0";
import { de_UpdateBudgetCommand, se_UpdateBudgetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBudgetCommand}.
 */
export interface UpdateBudgetCommandInput extends UpdateBudgetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBudgetCommand}.
 */
export interface UpdateBudgetCommandOutput extends UpdateBudgetResponse, __MetadataBearer {}

/**
 * <p>Updates a budget that sets spending thresholds for rendering activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateBudgetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateBudgetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateBudgetRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   budgetId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   status: "ACTIVE" || "INACTIVE",
 *   approximateDollarLimit: Number("float"),
 *   actionsToAdd: [ // BudgetActionsToAdd
 *     { // BudgetActionToAdd
 *       type: "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 *       thresholdPercentage: Number("float"), // required
 *       description: "STRING_VALUE",
 *     },
 *   ],
 *   actionsToRemove: [ // BudgetActionsToRemove
 *     { // BudgetActionToRemove
 *       type: "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 *       thresholdPercentage: Number("float"), // required
 *     },
 *   ],
 *   schedule: { // BudgetSchedule Union: only one key present
 *     fixed: { // FixedBudgetSchedule
 *       startTime: new Date("TIMESTAMP"), // required
 *       endTime: new Date("TIMESTAMP"), // required
 *     },
 *   },
 * };
 * const command = new UpdateBudgetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBudgetCommandInput - {@link UpdateBudgetCommandInput}
 * @returns {@link UpdateBudgetCommandOutput}
 * @see {@link UpdateBudgetCommandInput} for command's `input` shape.
 * @see {@link UpdateBudgetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateBudgetCommand extends $Command
  .classBuilder<
    UpdateBudgetCommandInput,
    UpdateBudgetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateBudget", {})
  .n("DeadlineClient", "UpdateBudgetCommand")
  .f(UpdateBudgetRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateBudgetCommand)
  .de(de_UpdateBudgetCommand)
  .build() {}
