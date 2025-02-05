// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartQueryWorkloadInsightsTopContributorsDataInput,
  StartQueryWorkloadInsightsTopContributorsDataOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_StartQueryWorkloadInsightsTopContributorsDataCommand,
  se_StartQueryWorkloadInsightsTopContributorsDataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StartQueryWorkloadInsightsTopContributorsDataCommandInput
  extends StartQueryWorkloadInsightsTopContributorsDataInput {}
/**
 * @public
 *
 * The output of {@link StartQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StartQueryWorkloadInsightsTopContributorsDataCommandOutput
  extends StartQueryWorkloadInsightsTopContributorsDataOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface.
 *    		Specify the query that you want to return results for by providing a query ID
 *    		and a scope ID. This query returns data for the top contributors for workload insights.
 *    		Workload insights provide a high level view of network flow performance data collected by agents
 *    		for a scope.</p>
 *          <p>A query ID is returned from an API call to start a query of a specific type; for
 *    		example </p>
 *          <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific
 *    		metric type, related to a scope (for workload insights) or a monitor.</p>
 *          <p>The top contributor network flows overall for a specific metric type, for example, the
 *    		number of retransmissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StartQueryWorkloadInsightsTopContributorsDataCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StartQueryWorkloadInsightsTopContributorsDataCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StartQueryWorkloadInsightsTopContributorsDataInput
 *   scopeId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   metricName: "TIMEOUTS" || "RETRANSMISSIONS" || "DATA_TRANSFERRED", // required
 *   destinationCategory: "INTRA_AZ" || "INTER_AZ" || "INTER_VPC" || "UNCLASSIFIED" || "AMAZON_S3" || "AMAZON_DYNAMODB", // required
 * };
 * const command = new StartQueryWorkloadInsightsTopContributorsDataCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryWorkloadInsightsTopContributorsDataOutput
 * //   queryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryWorkloadInsightsTopContributorsDataCommandInput - {@link StartQueryWorkloadInsightsTopContributorsDataCommandInput}
 * @returns {@link StartQueryWorkloadInsightsTopContributorsDataCommandOutput}
 * @see {@link StartQueryWorkloadInsightsTopContributorsDataCommandInput} for command's `input` shape.
 * @see {@link StartQueryWorkloadInsightsTopContributorsDataCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartQueryWorkloadInsightsTopContributorsDataCommand extends $Command
  .classBuilder<
    StartQueryWorkloadInsightsTopContributorsDataCommandInput,
    StartQueryWorkloadInsightsTopContributorsDataCommandOutput,
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
  .s("NetworkFlowMonitor", "StartQueryWorkloadInsightsTopContributorsData", {})
  .n("NetworkFlowMonitorClient", "StartQueryWorkloadInsightsTopContributorsDataCommand")
  .f(void 0, void 0)
  .ser(se_StartQueryWorkloadInsightsTopContributorsDataCommand)
  .de(de_StartQueryWorkloadInsightsTopContributorsDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryWorkloadInsightsTopContributorsDataInput;
      output: StartQueryWorkloadInsightsTopContributorsDataOutput;
    };
    sdk: {
      input: StartQueryWorkloadInsightsTopContributorsDataCommandInput;
      output: StartQueryWorkloadInsightsTopContributorsDataCommandOutput;
    };
  };
}
