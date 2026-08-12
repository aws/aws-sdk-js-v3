// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentGoalsRequest, ListAgentGoalsResponse } from "../models/models_0";
import { ListAgentGoals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentGoalsCommand}.
 */
export interface ListAgentGoalsCommandInput extends ListAgentGoalsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentGoalsCommand}.
 */
export interface ListAgentGoalsCommandOutput extends ListAgentGoalsResponse, __MetadataBearer {}

/**
 * <p>Lists optimization goals associated with a specified profile. Goals define specific targets and objectives for the optimization process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentGoalsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentGoalsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentGoalsRequest
 *   profileArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentGoalsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentGoalsResponse
 * //   items: [ // GoalSummaries // required
 * //     { // GoalSummary
 * //       id: "STRING_VALUE", // required
 * //       profileArn: "STRING_VALUE", // required
 * //       pillars: [ // Pillars // required
 * //         "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //       ],
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedBy: "STRING_VALUE",
 * //       lastModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentGoalsCommandInput - {@link ListAgentGoalsCommandInput}
 * @returns {@link ListAgentGoalsCommandOutput}
 * @see {@link ListAgentGoalsCommandInput} for command's `input` shape.
 * @see {@link ListAgentGoalsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
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
export class ListAgentGoalsCommand extends command<ListAgentGoalsCommandInput, ListAgentGoalsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentGoals",
  ListAgentGoals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentGoalsRequest;
      output: ListAgentGoalsResponse;
    };
    sdk: {
      input: ListAgentGoalsCommandInput;
      output: ListAgentGoalsCommandOutput;
    };
  };
}
