// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryStatusWorkloadInsightsTopContributorsInput,
  GetQueryStatusWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { GetQueryStatusWorkloadInsightsTopContributors } from "../schemas/schemas_5_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStatusWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsCommandInput
  extends GetQueryStatusWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsCommandOutput
  extends GetQueryStatusWorkloadInsightsTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for workload insights.</p> <p>When you start a query, use this call to check the status of the query to make sure that it has has <code>SUCCEEDED</code> before you review the results. Use the same query ID that you used for the corresponding API call to start the query, <code>StartQueryWorkloadInsightsTopContributors</code>.</p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p>
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 *
 * @public
 */
export class GetQueryStatusWorkloadInsightsTopContributorsCommand extends $Command
  .classBuilder<
    GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
    GetQueryStatusWorkloadInsightsTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "GetQueryStatusWorkloadInsightsTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryStatusWorkloadInsightsTopContributorsCommand")
  .sc(GetQueryStatusWorkloadInsightsTopContributors)
  .build() {
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
