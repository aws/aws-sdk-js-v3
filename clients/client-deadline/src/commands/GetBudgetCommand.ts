// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBudgetRequest, GetBudgetResponse } from "../models/models_0";
import { GetBudget } from "../schemas/schemas_20_Fleet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBudgetCommand}.
 */
export interface GetBudgetCommandInput extends GetBudgetRequest {}
/**
 * @public
 *
 * The output of {@link GetBudgetCommand}.
 */
export interface GetBudgetCommandOutput extends GetBudgetResponse, __MetadataBearer {}

/**
 * <p>Get a budget.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetBudgetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetBudgetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetBudgetRequest
 *   farmId: "STRING_VALUE", // required
 *   budgetId: "STRING_VALUE", // required
 * };
 * const command = new GetBudgetCommand(input);
 * const response = await client.send(command);
 * // { // GetBudgetResponse
 * //   budgetId: "STRING_VALUE", // required
 * //   usageTrackingResource: { // UsageTrackingResource Union: only one key present
 * //     queueId: "STRING_VALUE",
 * //   },
 * //   status: "ACTIVE" || "INACTIVE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   approximateDollarLimit: Number("float"), // required
 * //   usages: { // ConsumedUsages
 * //     approximateDollarUsage: Number("float"), // required
 * //   },
 * //   actions: [ // ResponseBudgetActionList // required
 * //     { // ResponseBudgetAction
 * //       type: "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 * //       thresholdPercentage: Number("float"), // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   schedule: { // BudgetSchedule Union: only one key present
 * //     fixed: { // FixedBudgetSchedule
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   queueStoppedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetBudgetCommandInput - {@link GetBudgetCommandInput}
 * @returns {@link GetBudgetCommandOutput}
 * @see {@link GetBudgetCommandInput} for command's `input` shape.
 * @see {@link GetBudgetCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetBudgetCommand extends $Command
  .classBuilder<
    GetBudgetCommandInput,
    GetBudgetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetBudget", {})
  .n("DeadlineClient", "GetBudgetCommand")
  .sc(GetBudget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBudgetRequest;
      output: GetBudgetResponse;
    };
    sdk: {
      input: GetBudgetCommandInput;
      output: GetBudgetCommandOutput;
    };
  };
}
