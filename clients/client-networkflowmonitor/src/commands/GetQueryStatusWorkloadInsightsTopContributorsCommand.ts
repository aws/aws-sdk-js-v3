// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQueryStatusWorkloadInsightsTopContributorsInput,
  GetQueryStatusWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import { GetQueryStatusWorkloadInsightsTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryStatusWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsCommandInput extends GetQueryStatusWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsCommandOutput extends GetQueryStatusWorkloadInsightsTopContributorsOutput, __MetadataBearer {}

/**
 * Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for workload insights.
 *
 * When you start a query, use this call to check the status of the query to make sure that it has has `SUCCEEDED` before you review the results. Use the same query ID that you used for the corresponding API call to start the query, `StartQueryWorkloadInsightsTopContributors`.
 *
 * Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryStatusWorkloadInsightsTopContributorsInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusWorkloadInsightsTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusWorkloadInsightsTopContributorsOutput
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELED", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusWorkloadInsightsTopContributorsCommandInput - {@link GetQueryStatusWorkloadInsightsTopContributorsCommandInput}
 * @returns {@link GetQueryStatusWorkloadInsightsTopContributorsCommandOutput}
 * @see {@link GetQueryStatusWorkloadInsightsTopContributorsCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusWorkloadInsightsTopContributorsCommandOutput} for command's `response` shape.
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
export class GetQueryStatusWorkloadInsightsTopContributorsCommand extends command<GetQueryStatusWorkloadInsightsTopContributorsCommandInput, GetQueryStatusWorkloadInsightsTopContributorsCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryStatusWorkloadInsightsTopContributors",
  GetQueryStatusWorkloadInsightsTopContributors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatusWorkloadInsightsTopContributorsInput;
      output: GetQueryStatusWorkloadInsightsTopContributorsOutput;
    };
    sdk: {
      input: GetQueryStatusWorkloadInsightsTopContributorsCommandInput;
      output: GetQueryStatusWorkloadInsightsTopContributorsCommandOutput;
    };
  };
}
