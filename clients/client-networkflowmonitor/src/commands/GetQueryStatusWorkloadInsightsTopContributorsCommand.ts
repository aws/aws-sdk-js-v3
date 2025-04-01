// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
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
import {
  de_GetQueryStatusWorkloadInsightsTopContributorsCommand,
  se_GetQueryStatusWorkloadInsightsTopContributorsCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Return the data for a query with the Network Flow Monitor query interface.
 *    		Specify the query that you want to return results for by providing a query ID
 *    		and a monitor name. This query returns the top contributors for workload insights.</p>
 *          <p>When you start a query, use this call to check the status of the query to make sure that it has
 *    		has <code>SUCCEEDED</code> before you review the results. Use the same query ID that you used for
 *    		the corresponding API call to start the query, <code>StartQueryWorkloadInsightsTopContributors</code>.</p>
 *          <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific
 *    		metric type, related to a scope (for workload insights) or a monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "GetQueryStatusWorkloadInsightsTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryStatusWorkloadInsightsTopContributorsCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryStatusWorkloadInsightsTopContributorsCommand)
  .de(de_GetQueryStatusWorkloadInsightsTopContributorsCommand)
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
