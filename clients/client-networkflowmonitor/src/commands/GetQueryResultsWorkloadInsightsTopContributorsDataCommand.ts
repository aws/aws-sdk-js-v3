// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryResultsWorkloadInsightsTopContributorsDataInput,
  GetQueryResultsWorkloadInsightsTopContributorsDataOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
  se_GetQueryResultsWorkloadInsightsTopContributorsDataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput
  extends GetQueryResultsWorkloadInsightsTopContributorsDataInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommand}.
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput
  extends GetQueryResultsWorkloadInsightsTopContributorsDataOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface. Specify the query that you want to return results for by providing a query ID and a scope ID.</p> <p>This query returns the data for top contributors for workload insights for a specific scope. Workload insights provide a high level view of network flow performance data collected by agents for a scope. To return just the top contributors, see <code>GetQueryResultsWorkloadInsightsTopContributors</code>.</p> <p>Create a query ID for this call by calling the corresponding API call to start the query, <code>StartQueryWorkloadInsightsTopContributorsData</code>. Use the scope ID that was returned for your account by <code>CreateScope</code>.</p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p> <p>The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsDataCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryResultsWorkloadInsightsTopContributorsDataCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryResultsWorkloadInsightsTopContributorsDataInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetQueryResultsWorkloadInsightsTopContributorsDataCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsWorkloadInsightsTopContributorsDataOutput
 * //   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None", // required
 * //   datapoints: [ // WorkloadInsightsTopContributorsDataPoints // required
 * //     { // WorkloadInsightsTopContributorsDataPoint
 * //       timestamps: [ // WorkloadInsightsTopContributorsTimestampsList // required
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       values: [ // WorkloadInsightsTopContributorsValuesList // required
 * //         Number("double"),
 * //       ],
 * //       label: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput - {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput}
 * @returns {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput}
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput} for command's `response` shape.
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
export class GetQueryResultsWorkloadInsightsTopContributorsDataCommand extends $Command
  .classBuilder<
    GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
    GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "GetQueryResultsWorkloadInsightsTopContributorsData", {})
  .n("NetworkFlowMonitorClient", "GetQueryResultsWorkloadInsightsTopContributorsDataCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryResultsWorkloadInsightsTopContributorsDataCommand)
  .de(de_GetQueryResultsWorkloadInsightsTopContributorsDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsWorkloadInsightsTopContributorsDataInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsDataOutput;
    };
    sdk: {
      input: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput;
      output: GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput;
    };
  };
}
