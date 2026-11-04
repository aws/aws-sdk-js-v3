// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopQueryMonitorTopContributorsInput, StopQueryMonitorTopContributorsOutput } from "../models/models_0";
import { StopQueryMonitorTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopQueryMonitorTopContributorsCommand}.
 */
export interface StopQueryMonitorTopContributorsCommandInput extends StopQueryMonitorTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link StopQueryMonitorTopContributorsCommand}.
 */
export interface StopQueryMonitorTopContributorsCommandOutput extends StopQueryMonitorTopContributorsOutput, __MetadataBearer {}

/**
 * Stop a top contributors query for a monitor. Specify the query that you want to stop by providing a query ID and a monitor name.
 *
 * Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryMonitorTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryMonitorTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryMonitorTopContributorsInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryMonitorTopContributorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryMonitorTopContributorsCommandInput - {@link StopQueryMonitorTopContributorsCommandInput}
 * @returns {@link StopQueryMonitorTopContributorsCommandOutput}
 * @see {@link StopQueryMonitorTopContributorsCommandInput} for command's `input` shape.
 * @see {@link StopQueryMonitorTopContributorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkFlowMonitor service.
 *
 * @public
 */
export class StopQueryMonitorTopContributorsCommand extends command<StopQueryMonitorTopContributorsCommandInput, StopQueryMonitorTopContributorsCommandOutput>(
  _ep0,
  _mw0,
  "StopQueryMonitorTopContributors",
  StopQueryMonitorTopContributors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryMonitorTopContributorsInput;
      output: {};
    };
    sdk: {
      input: StopQueryMonitorTopContributorsCommandInput;
      output: StopQueryMonitorTopContributorsCommandOutput;
    };
  };
}
