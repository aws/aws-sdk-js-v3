// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryResultsWorkloadInsightsTopContributorsInput,
  GetQueryResultsWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { GetQueryResultsWorkloadInsightsTopContributors } from "../schemas/schemas_7_Scope";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandInput
  extends GetQueryResultsWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandOutput
  extends GetQueryResultsWorkloadInsightsTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name.</p> <p>This query returns the top contributors for a scope for workload insights. Workload insights provide a high level view of network flow performance data collected by agents. To return the data for the top contributors, see <code>GetQueryResultsWorkloadInsightsTopContributorsData</code>.</p> <p>Create a query ID for this call by calling the corresponding API call to start the query, <code>StartQueryWorkloadInsightsTopContributors</code>. Use the scope ID that was returned for your account by <code>CreateScope</code>.</p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryResultsWorkloadInsightsTopContributorsInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetQueryResultsWorkloadInsightsTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsWorkloadInsightsTopContributorsOutput
 * //   topContributors: [ // WorkloadInsightsTopContributorsRowList
 * //     { // WorkloadInsightsTopContributorsRow
 * //       accountId: "STRING_VALUE",
 * //       localSubnetId: "STRING_VALUE",
 * //       localAz: "STRING_VALUE",
 * //       localVpcId: "STRING_VALUE",
 * //       localRegion: "STRING_VALUE",
 * //       remoteIdentifier: "STRING_VALUE",
 * //       value: Number("long"),
 * //       localSubnetArn: "STRING_VALUE",
 * //       localVpcArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsWorkloadInsightsTopContributorsCommandInput - {@link GetQueryResultsWorkloadInsightsTopContributorsCommandInput}
 * @returns {@link GetQueryResultsWorkloadInsightsTopContributorsCommandOutput}
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
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
export class GetQueryResultsWorkloadInsightsTopContributorsCommand extends $Command
  .classBuilder<
    GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
    GetQueryResultsWorkloadInsightsTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "GetQueryResultsWorkloadInsightsTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryResultsWorkloadInsightsTopContributorsCommand")
  .sc(GetQueryResultsWorkloadInsightsTopContributors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsWorkloadInsightsTopContributorsInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsOutput;
    };
    sdk: {
      input: GetQueryResultsWorkloadInsightsTopContributorsCommandInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsCommandOutput;
    };
  };
}
