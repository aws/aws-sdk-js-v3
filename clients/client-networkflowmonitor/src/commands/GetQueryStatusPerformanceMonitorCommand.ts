// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueryStatusPerformanceMonitorInput, GetQueryStatusPerformanceMonitorOutput } from "../models/models_0";
import { GetQueryStatusPerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryStatusPerformanceMonitorCommand}.
 */
export interface GetQueryStatusPerformanceMonitorCommandInput extends GetQueryStatusPerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusPerformanceMonitorCommand}.
 */
export interface GetQueryStatusPerformanceMonitorCommandOutput extends GetQueryStatusPerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and performance monitor. This call returns the query status for the top paths for a performance monitor.</p> <p>When you run a query, use this call to check the status of the query to make sure that the query has <code>SUCCEEDED</code> before you review the results. Use the same query ID that you used for the corresponding API call to start (create) the query, <code>StartQueryPerformanceMonitor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryStatusPerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryStatusPerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryStatusPerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusPerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusPerformanceMonitorOutput
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELED", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusPerformanceMonitorCommandInput - {@link GetQueryStatusPerformanceMonitorCommandInput}
 * @returns {@link GetQueryStatusPerformanceMonitorCommandOutput}
 * @see {@link GetQueryStatusPerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusPerformanceMonitorCommandOutput} for command's `response` shape.
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
export class GetQueryStatusPerformanceMonitorCommand extends command<GetQueryStatusPerformanceMonitorCommandInput, GetQueryStatusPerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryStatusPerformanceMonitor",
  GetQueryStatusPerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatusPerformanceMonitorInput;
      output: GetQueryStatusPerformanceMonitorOutput;
    };
    sdk: {
      input: GetQueryStatusPerformanceMonitorCommandInput;
      output: GetQueryStatusPerformanceMonitorCommandOutput;
    };
  };
}
