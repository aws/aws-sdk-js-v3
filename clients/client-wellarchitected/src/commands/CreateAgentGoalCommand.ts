// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
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
 * Creates an optimization goal associated with a profile. Goals define specific targets and objectives for the optimization process.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
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
export class CreateAgentGoalCommand extends command<CreateAgentGoalCommandInput, CreateAgentGoalCommandOutput>(
  _ep1,
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
