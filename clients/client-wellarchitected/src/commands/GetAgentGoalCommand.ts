// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetAgentGoalRequest, GetAgentGoalResponse } from "../models/models_0";
import { GetAgentGoal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentGoalCommand}.
 */
export interface GetAgentGoalCommandInput extends GetAgentGoalRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentGoalCommand}.
 */
export interface GetAgentGoalCommandOutput extends GetAgentGoalResponse, __MetadataBearer {}

/**
 * Retrieves detailed information about a specific optimization goal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentGoalCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentGoalCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentGoalRequest
 *   profileArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetAgentGoalCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentGoalResponse
 * //   goal: { // GoalSummary
 * //     id: "STRING_VALUE", // required
 * //     profileArn: "STRING_VALUE", // required
 * //     pillars: [ // Pillars // required
 * //       "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //     ],
 * //     title: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE",
 * //     lastModifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentGoalCommandInput - {@link GetAgentGoalCommandInput}
 * @returns {@link GetAgentGoalCommandOutput}
 * @see {@link GetAgentGoalCommandInput} for command's `input` shape.
 * @see {@link GetAgentGoalCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class GetAgentGoalCommand extends command<GetAgentGoalCommandInput, GetAgentGoalCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentGoal",
  GetAgentGoal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentGoalRequest;
      output: GetAgentGoalResponse;
    };
    sdk: {
      input: GetAgentGoalCommandInput;
      output: GetAgentGoalCommandOutput;
    };
  };
}
