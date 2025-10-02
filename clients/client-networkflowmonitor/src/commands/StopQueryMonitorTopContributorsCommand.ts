// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopQueryMonitorTopContributorsInput, StopQueryMonitorTopContributorsOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_StopQueryMonitorTopContributorsCommand,
  se_StopQueryMonitorTopContributorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQueryMonitorTopContributorsCommand}.
 */
export interface StopQueryMonitorTopContributorsCommandInput extends StopQueryMonitorTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link StopQueryMonitorTopContributorsCommand}.
 */
export interface StopQueryMonitorTopContributorsCommandOutput
  extends StopQueryMonitorTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Stop a top contributors query for a monitor. Specify the query that you want to stop by providing a query ID and a monitor name. </p> <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryMonitorTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryMonitorTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryMonitorTopContributorsInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryMonitorTopContributorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryMonitorTopContributorsCommandInput - {@link StopQueryMonitorTopContributorsCommandInput}
 * @returns {@link StopQueryMonitorTopContributorsCommandOutput}
 * @see {@link StopQueryMonitorTopContributorsCommandInput} for command's `input` shape.
 * @see {@link StopQueryMonitorTopContributorsCommandOutput} for command's `response` shape.
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
export class StopQueryMonitorTopContributorsCommand extends $Command
  .classBuilder<
    StopQueryMonitorTopContributorsCommandInput,
    StopQueryMonitorTopContributorsCommandOutput,
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
  .s("NetworkFlowMonitor", "StopQueryMonitorTopContributors", {})
  .n("NetworkFlowMonitorClient", "StopQueryMonitorTopContributorsCommand")
  .f(void 0, void 0)
  .ser(se_StopQueryMonitorTopContributorsCommand)
  .de(de_StopQueryMonitorTopContributorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryMonitorTopContributorsInput;
      output: {};
    };
    sdk: {
      input: StopQueryMonitorTopContributorsCommandInput;
      output: StopQueryMonitorTopContributorsCommandOutput;
    };
  };
}
