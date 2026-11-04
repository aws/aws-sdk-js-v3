// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQueryResultsWorkloadInsightsTopContributorsInput,
  GetQueryResultsWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import { GetQueryResultsWorkloadInsightsTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandInput extends GetQueryResultsWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsWorkloadInsightsTopContributorsCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsCommandOutput extends GetQueryResultsWorkloadInsightsTopContributorsOutput, __MetadataBearer {}

/**
 * Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name.
 *
 * This query returns the top contributors for a scope for workload insights. Workload insights provide a high level view of network flow performance data collected by agents. To return the data for the top contributors, see `GetQueryResultsWorkloadInsightsTopContributorsData`.
 *
 * Create a query ID for this call by calling the corresponding API call to start the query, `StartQueryWorkloadInsightsTopContributors`. Use the scope ID that was returned for your account by `CreateScope`.
 *
 * Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that doesn't exist.
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
export class GetQueryResultsWorkloadInsightsTopContributorsCommand extends command<GetQueryResultsWorkloadInsightsTopContributorsCommandInput, GetQueryResultsWorkloadInsightsTopContributorsCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryResultsWorkloadInsightsTopContributors",
  GetQueryResultsWorkloadInsightsTopContributors$
) {
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
