// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartQueryMonitorTopContributorsInput, StartQueryMonitorTopContributorsOutput } from "../models/models_0";
import type {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { StartQueryMonitorTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQueryMonitorTopContributorsCommand}.
 */
export interface StartQueryMonitorTopContributorsCommandInput extends StartQueryMonitorTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link StartQueryMonitorTopContributorsCommand}.
 */
export interface StartQueryMonitorTopContributorsCommandOutput extends StartQueryMonitorTopContributorsOutput, __MetadataBearer {}

/**
 * <p>Create a query that you can use with the Network Flow Monitor query interface to return the top contributors for a monitor. Specify the monitor that you want to create the query for. </p> <p>The call returns a query ID that you can use with <a href="https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryResultsMonitorTopContributors.html"> GetQueryResultsMonitorTopContributors</a> to run the query and return the top contributors for a specific monitor.</p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable APIs for the top contributors that you want to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StartQueryMonitorTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StartQueryMonitorTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StartQueryMonitorTopContributorsInput
 *   monitorName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   metricName: "ROUND_TRIP_TIME" || "TIMEOUTS" || "RETRANSMISSIONS" || "DATA_TRANSFERRED", // required
 *   destinationCategory: "INTRA_AZ" || "INTER_AZ" || "INTER_VPC" || "UNCLASSIFIED" || "AMAZON_S3" || "AMAZON_DYNAMODB" || "INTER_REGION", // required
 *   limit: Number("int"),
 * };
 * const command = new StartQueryMonitorTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryMonitorTopContributorsOutput
 * //   queryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryMonitorTopContributorsCommandInput - {@link StartQueryMonitorTopContributorsCommandInput}
 * @returns {@link StartQueryMonitorTopContributorsCommandOutput}
 * @see {@link StartQueryMonitorTopContributorsCommandInput} for command's `input` shape.
 * @see {@link StartQueryMonitorTopContributorsCommandOutput} for command's `response` shape.
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
export class StartQueryMonitorTopContributorsCommand extends $Command
  .classBuilder<
    StartQueryMonitorTopContributorsCommandInput,
    StartQueryMonitorTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "StartQueryMonitorTopContributors", {})
  .n("NetworkFlowMonitorClient", "StartQueryMonitorTopContributorsCommand")
  .sc(StartQueryMonitorTopContributors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryMonitorTopContributorsInput;
      output: StartQueryMonitorTopContributorsOutput;
    };
    sdk: {
      input: StartQueryMonitorTopContributorsCommandInput;
      output: StartQueryMonitorTopContributorsCommandOutput;
    };
  };
}
