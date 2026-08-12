// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentGoalRequest, CreateAgentGoalResponse } from "../models/models_0";
import { CreateAgentGoal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentGoalCommand}.
 */
export interface CreateAgentGoalCommandInput extends CreateAgentGoalRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentGoalCommand}.
 */
export interface CreateAgentGoalCommandOutput extends CreateAgentGoalResponse, __MetadataBearer {}

/**
 * <p>Creates an optimization goal associated with a profile. Goals define specific targets and objectives for the optimization process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentGoalCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentGoalCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentGoalRequest
 *   clientToken: "STRING_VALUE",
 *   profileArn: "STRING_VALUE", // required
 *   pillars: [ // Pillars // required
 *     "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *   ],
 *   title: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateAgentGoalCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentGoalResponse
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
 * @param CreateAgentGoalCommandInput - {@link CreateAgentGoalCommandInput}
 * @returns {@link CreateAgentGoalCommandOutput}
 * @see {@link CreateAgentGoalCommandInput} for command's `input` shape.
 * @see {@link CreateAgentGoalCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class CreateAgentGoalCommand extends command<CreateAgentGoalCommandInput, CreateAgentGoalCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentGoal",
  CreateAgentGoal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentGoalRequest;
      output: CreateAgentGoalResponse;
    };
    sdk: {
      input: CreateAgentGoalCommandInput;
      output: CreateAgentGoalCommandOutput;
    };
  };
}
