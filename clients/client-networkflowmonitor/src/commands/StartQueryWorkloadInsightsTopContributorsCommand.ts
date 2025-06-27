// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartQueryWorkloadInsightsTopContributorsInput,
  StartQueryWorkloadInsightsTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_StartQueryWorkloadInsightsTopContributorsCommand,
  se_StartQueryWorkloadInsightsTopContributorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQueryWorkloadInsightsTopContributorsCommand}.
 */
export interface StartQueryWorkloadInsightsTopContributorsCommandInput
  extends StartQueryWorkloadInsightsTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link StartQueryWorkloadInsightsTopContributorsCommand}.
 */
export interface StartQueryWorkloadInsightsTopContributorsCommandOutput
  extends StartQueryWorkloadInsightsTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Start a query to return the data with the Network Flow Monitor query interface.
 *    		Specify the query that you want to start by providing a query ID
 *    		and a monitor name. This query returns the top contributors for a specific monitor.</p>
 *          <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific
 *    		metric type, related to a scope (for workload insights) or a monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StartQueryWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StartQueryWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StartQueryWorkloadInsightsTopContributorsInput
 *   scopeId: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   metricName: "TIMEOUTS" || "RETRANSMISSIONS" || "DATA_TRANSFERRED", // required
 *   destinationCategory: "INTRA_AZ" || "INTER_AZ" || "INTER_VPC" || "UNCLASSIFIED" || "AMAZON_S3" || "AMAZON_DYNAMODB", // required
 *   limit: Number("int"),
 * };
 * const command = new StartQueryWorkloadInsightsTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryWorkloadInsightsTopContributorsOutput
 * //   queryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryWorkloadInsightsTopContributorsCommandInput - {@link StartQueryWorkloadInsightsTopContributorsCommandInput}
 * @returns {@link StartQueryWorkloadInsightsTopContributorsCommandOutput}
 * @see {@link StartQueryWorkloadInsightsTopContributorsCommandInput} for command's `input` shape.
 * @see {@link StartQueryWorkloadInsightsTopContributorsCommandOutput} for command's `response` shape.
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
export class StartQueryWorkloadInsightsTopContributorsCommand extends $Command
  .classBuilder<
    StartQueryWorkloadInsightsTopContributorsCommandInput,
    StartQueryWorkloadInsightsTopContributorsCommandOutput,
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
  .s("NetworkFlowMonitor", "StartQueryWorkloadInsightsTopContributors", {})
  .n("NetworkFlowMonitorClient", "StartQueryWorkloadInsightsTopContributorsCommand")
  .f(void 0, void 0)
  .ser(se_StartQueryWorkloadInsightsTopContributorsCommand)
  .de(de_StartQueryWorkloadInsightsTopContributorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryWorkloadInsightsTopContributorsInput;
      output: StartQueryWorkloadInsightsTopContributorsOutput;
    };
    sdk: {
      input: StartQueryWorkloadInsightsTopContributorsCommandInput;
      output: StartQueryWorkloadInsightsTopContributorsCommandOutput;
    };
  };
}
