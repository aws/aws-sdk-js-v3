// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetQueryStatusMonitorTopContributorsInput,
  GetQueryStatusMonitorTopContributorsOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { GetQueryStatusMonitorTopContributors } from "../schemas/schemas_1_Monitor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStatusMonitorTopContributorsCommand}.
 */
export interface GetQueryStatusMonitorTopContributorsCommandInput extends GetQueryStatusMonitorTopContributorsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusMonitorTopContributorsCommand}.
 */
export interface GetQueryStatusMonitorTopContributorsCommandOutput
  extends GetQueryStatusMonitorTopContributorsOutput,
    __MetadataBearer {}

/**
 * <p>Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors for a monitor.</p> <p>When you create a query, use this call to check the status of the query to make sure that it has has <code>SUCCEEDED</code> before you review the results. Use the same query ID that you used for the corresponding API call to start (create) the query, <code>StartQueryMonitorTopContributors</code>.</p> <p>When you run a query, use this call to check the status of the query to make sure that the query has <code>SUCCEEDED</code> before you review the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryStatusMonitorTopContributorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryStatusMonitorTopContributorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryStatusMonitorTopContributorsInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusMonitorTopContributorsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusMonitorTopContributorsOutput
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELED", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusMonitorTopContributorsCommandInput - {@link GetQueryStatusMonitorTopContributorsCommandInput}
 * @returns {@link GetQueryStatusMonitorTopContributorsCommandOutput}
 * @see {@link GetQueryStatusMonitorTopContributorsCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusMonitorTopContributorsCommandOutput} for command's `response` shape.
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
export class GetQueryStatusMonitorTopContributorsCommand extends $Command
  .classBuilder<
    GetQueryStatusMonitorTopContributorsCommandInput,
    GetQueryStatusMonitorTopContributorsCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFlowMonitor", "GetQueryStatusMonitorTopContributors", {})
  .n("NetworkFlowMonitorClient", "GetQueryStatusMonitorTopContributorsCommand")
  .sc(GetQueryStatusMonitorTopContributors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatusMonitorTopContributorsInput;
      output: GetQueryStatusMonitorTopContributorsOutput;
    };
    sdk: {
      input: GetQueryStatusMonitorTopContributorsCommandInput;
      output: GetQueryStatusMonitorTopContributorsCommandOutput;
    };
  };
}
