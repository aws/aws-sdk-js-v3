// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopQueryWorkloadInsightsTopContributorsInput,
  StopQueryWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import { StopQueryWorkloadInsightsTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopQueryWorkloadInsightsTopContributorsCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsCommandInput extends StopQueryWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link StopQueryWorkloadInsightsTopContributorsCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsCommandOutput extends StopQueryWorkloadInsightsTopContributorsOutput, __MetadataBearer {}

/**
 * Stop a top contributors query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID.
 *
 * Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryWorkloadInsightsTopContributorsInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryWorkloadInsightsTopContributorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryWorkloadInsightsTopContributorsCommandInput - {@link StopQueryWorkloadInsightsTopContributorsCommandInput}
 * @returns {@link StopQueryWorkloadInsightsTopContributorsCommandOutput}
 * @see {@link StopQueryWorkloadInsightsTopContributorsCommandInput} for command's `input` shape.
 * @see {@link StopQueryWorkloadInsightsTopContributorsCommandOutput} for command's `response` shape.
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
export class StopQueryWorkloadInsightsTopContributorsCommand extends command<StopQueryWorkloadInsightsTopContributorsCommandInput, StopQueryWorkloadInsightsTopContributorsCommandOutput>(
  _ep0,
  _mw0,
  "StopQueryWorkloadInsightsTopContributors",
  StopQueryWorkloadInsightsTopContributors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryWorkloadInsightsTopContributorsInput;
      output: {};
    };
    sdk: {
      input: StopQueryWorkloadInsightsTopContributorsCommandInput;
      output: StopQueryWorkloadInsightsTopContributorsCommandOutput;
    };
  };
}
