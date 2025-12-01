// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  StopQueryWorkloadInsightsTopContributorsDataInput,
  StopQueryWorkloadInsightsTopContributorsDataOutput,
} from "../models/models_0";
import type {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { StopQueryWorkloadInsightsTopContributorsData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsDataCommandInput
  extends StopQueryWorkloadInsightsTopContributorsDataInput {}
/**
 * @public
 *
 * The output of {@link StopQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsDataCommandOutput
  extends StopQueryWorkloadInsightsTopContributorsDataOutput,
    __MetadataBearer {}

/**
 * <p>Stop a top contributors data query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID. </p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsDataCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsDataCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryWorkloadInsightsTopContributorsDataInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryWorkloadInsightsTopContributorsDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryWorkloadInsightsTopContributorsDataCommandInput - {@link StopQueryWorkloadInsightsTopContributorsDataCommandInput}
 * @returns {@link StopQueryWorkloadInsightsTopContributorsDataCommandOutput}
 * @see {@link StopQueryWorkloadInsightsTopContributorsDataCommandInput} for command's `input` shape.
 * @see {@link StopQueryWorkloadInsightsTopContributorsDataCommandOutput} for command's `response` shape.
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
export class StopQueryWorkloadInsightsTopContributorsDataCommand extends $Command
  .classBuilder<
    StopQueryWorkloadInsightsTopContributorsDataCommandInput,
    StopQueryWorkloadInsightsTopContributorsDataCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "StopQueryWorkloadInsightsTopContributorsData", {})
  .n("NetworkFlowMonitorClient", "StopQueryWorkloadInsightsTopContributorsDataCommand")
  .sc(StopQueryWorkloadInsightsTopContributorsData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryWorkloadInsightsTopContributorsDataInput;
      output: {};
    };
    sdk: {
      input: StopQueryWorkloadInsightsTopContributorsDataCommandInput;
      output: StopQueryWorkloadInsightsTopContributorsDataCommandOutput;
    };
  };
}
