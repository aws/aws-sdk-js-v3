// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopQueryPerformanceMonitorInput, StopQueryPerformanceMonitorOutput } from "../models/models_0";
import { StopQueryPerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopQueryPerformanceMonitorCommand}.
 */
export interface StopQueryPerformanceMonitorCommandInput extends StopQueryPerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link StopQueryPerformanceMonitorCommand}.
 */
export interface StopQueryPerformanceMonitorCommandOutput extends StopQueryPerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Stop a query for the Network Flow Monitor query interface, for a specified query ID and performance monitor. Use the same query ID that you used for the corresponding API call to start the query, <code>StartQueryPerformanceMonitor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryPerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryPerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryPerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryPerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryPerformanceMonitorCommandInput - {@link StopQueryPerformanceMonitorCommandInput}
 * @returns {@link StopQueryPerformanceMonitorCommandOutput}
 * @see {@link StopQueryPerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link StopQueryPerformanceMonitorCommandOutput} for command's `response` shape.
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
export class StopQueryPerformanceMonitorCommand extends command<StopQueryPerformanceMonitorCommandInput, StopQueryPerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "StopQueryPerformanceMonitor",
  StopQueryPerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryPerformanceMonitorInput;
      output: {};
    };
    sdk: {
      input: StopQueryPerformanceMonitorCommandInput;
      output: StopQueryPerformanceMonitorCommandOutput;
    };
  };
}
