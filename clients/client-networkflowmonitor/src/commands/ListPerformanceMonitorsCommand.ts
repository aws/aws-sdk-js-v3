// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPerformanceMonitorsInput, ListPerformanceMonitorsOutput } from "../models/models_0";
import { ListPerformanceMonitors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPerformanceMonitorsCommand}.
 */
export interface ListPerformanceMonitorsCommandInput extends ListPerformanceMonitorsInput {}
/**
 * @public
 *
 * The output of {@link ListPerformanceMonitorsCommand}.
 */
export interface ListPerformanceMonitorsCommandOutput extends ListPerformanceMonitorsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the performance monitors in an account. You can optionally return only the monitors that have a specific status or type.</p> <p>Results are paginated. Use the <code>nextToken</code> parameter to return additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, ListPerformanceMonitorsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, ListPerformanceMonitorsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // ListPerformanceMonitorsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   monitorStatus: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING",
 *   monitorType: "VPC",
 * };
 * const command = new ListPerformanceMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListPerformanceMonitorsOutput
 * //   monitors: [ // PerformanceMonitorSummaryList // required
 * //     { // PerformanceMonitorSummary
 * //       monitorArn: "STRING_VALUE", // required
 * //       monitorName: "STRING_VALUE", // required
 * //       monitorStatus: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //       monitorType: "VPC", // required
 * //       targets: [ // PerformanceMonitorTargets
 * //         { // PerformanceMonitorTarget
 * //           type: "AWS::EC2::VPC", // required
 * //           identifier: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPerformanceMonitorsCommandInput - {@link ListPerformanceMonitorsCommandInput}
 * @returns {@link ListPerformanceMonitorsCommandOutput}
 * @see {@link ListPerformanceMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListPerformanceMonitorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
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
export class ListPerformanceMonitorsCommand extends command<ListPerformanceMonitorsCommandInput, ListPerformanceMonitorsCommandOutput>(
  _ep0,
  _mw0,
  "ListPerformanceMonitors",
  ListPerformanceMonitors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPerformanceMonitorsInput;
      output: ListPerformanceMonitorsOutput;
    };
    sdk: {
      input: ListPerformanceMonitorsCommandInput;
      output: ListPerformanceMonitorsCommandOutput;
    };
  };
}
