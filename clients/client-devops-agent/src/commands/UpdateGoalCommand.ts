// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateGoalRequest, UpdateGoalResponse } from "../models/models_0";
import { UpdateGoal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGoalCommand}.
 */
export interface UpdateGoalCommandInput extends UpdateGoalRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGoalCommand}.
 */
export interface UpdateGoalCommandOutput extends UpdateGoalResponse, __MetadataBearer {}

/**
 * Update an existing goal
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateGoalCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateGoalCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateGoalRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   goalId: "STRING_VALUE", // required
 *   evaluationSchedule: { // GoalScheduleInput
 *     state: "ENABLED" || "DISABLED", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateGoalCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGoalResponse
 * //   goal: { // Goal
 * //     agentSpaceArn: "STRING_VALUE", // required
 * //     goalId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     content: { // GoalContent
 * //       description: "STRING_VALUE", // required
 * //       objectives: "STRING_VALUE", // required
 * //     },
 * //     status: "ACTIVE" || "PAUSED" || "COMPLETE", // required
 * //     goalType: "CUSTOMER_DEFINED" || "ONCALL_REPORT", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     lastEvaluatedAt: new Date("TIMESTAMP"),
 * //     lastTaskId: "STRING_VALUE",
 * //     lastSuccessfulTaskId: "STRING_VALUE",
 * //     version: Number("int"), // required
 * //     evaluationSchedule: { // GoalSchedule
 * //       state: "ENABLED" || "DISABLED", // required
 * //       expression: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGoalCommandInput - {@link UpdateGoalCommandInput}
 * @returns {@link UpdateGoalCommandOutput}
 * @see {@link UpdateGoalCommandInput} for command's `input` shape.
 * @see {@link UpdateGoalCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class UpdateGoalCommand extends $Command
  .classBuilder<
    UpdateGoalCommandInput,
    UpdateGoalCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "UpdateGoal", {})
  .n("DevOpsAgentClient", "UpdateGoalCommand")
  .sc(UpdateGoal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGoalRequest;
      output: UpdateGoalResponse;
    };
    sdk: {
      input: UpdateGoalCommandInput;
      output: UpdateGoalCommandOutput;
    };
  };
}
