// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListGoalsRequest, ListGoalsResponse } from "../models/models_0";
import { ListGoals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGoalsCommand}.
 */
export interface ListGoalsCommandInput extends ListGoalsRequest {}
/**
 * @public
 *
 * The output of {@link ListGoalsCommand}.
 */
export interface ListGoalsCommandOutput extends ListGoalsResponse, __MetadataBearer {}

/**
 * Lists goals in the specified agent space with optional filtering
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListGoalsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListGoalsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListGoalsRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "PAUSED" || "COMPLETE",
 *   goalType: "CUSTOMER_DEFINED" || "ONCALL_REPORT",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListGoalsCommand(input);
 * const response = await client.send(command);
 * // { // ListGoalsResponse
 * //   goals: [ // GoalList // required
 * //     { // Goal
 * //       agentSpaceArn: "STRING_VALUE", // required
 * //       goalId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       content: { // GoalContent
 * //         description: "STRING_VALUE", // required
 * //         objectives: "STRING_VALUE", // required
 * //       },
 * //       status: "ACTIVE" || "PAUSED" || "COMPLETE", // required
 * //       goalType: "CUSTOMER_DEFINED" || "ONCALL_REPORT", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       lastEvaluatedAt: new Date("TIMESTAMP"),
 * //       lastTaskId: "STRING_VALUE",
 * //       lastSuccessfulTaskId: "STRING_VALUE",
 * //       version: Number("int"), // required
 * //       evaluationSchedule: { // GoalSchedule
 * //         state: "ENABLED" || "DISABLED", // required
 * //         expression: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGoalsCommandInput - {@link ListGoalsCommandInput}
 * @returns {@link ListGoalsCommandOutput}
 * @see {@link ListGoalsCommandInput} for command's `input` shape.
 * @see {@link ListGoalsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
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
export class ListGoalsCommand extends $Command
  .classBuilder<
    ListGoalsCommandInput,
    ListGoalsCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListGoals", {})
  .n("DevOpsAgentClient", "ListGoalsCommand")
  .sc(ListGoals$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGoalsRequest;
      output: ListGoalsResponse;
    };
    sdk: {
      input: ListGoalsCommandInput;
      output: ListGoalsCommandOutput;
    };
  };
}
