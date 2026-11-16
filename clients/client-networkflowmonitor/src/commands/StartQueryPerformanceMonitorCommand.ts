// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryPerformanceMonitorInput, StartQueryPerformanceMonitorOutput } from "../models/models_0";
import { StartQueryPerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryPerformanceMonitorCommand}.
 */
export interface StartQueryPerformanceMonitorCommandInput extends StartQueryPerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link StartQueryPerformanceMonitorCommand}.
 */
export interface StartQueryPerformanceMonitorCommandOutput extends StartQueryPerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Create a query that you can use with the Network Flow Monitor query interface to return the top paths for a performance monitor. Specify the performance monitor that you want to create the query for.</p> <p>The call returns a query ID that you can use with <a href="https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_GetQueryResultsPerformanceMonitor.html"> GetQueryResultsPerformanceMonitor</a> to return the results of the query.</p> <p>Top paths in Network Flow Monitor are the network paths used by the traffic for the resources that a performance monitor tracks, ranked by impact score and then by traffic volume. Each path includes the traffic and round-trip time for the path, together with a breakdown of the subnet pairs that the path includes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StartQueryPerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StartQueryPerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StartQueryPerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   queryType: "TOP_PATHS", // required
 *   filterParameters: [ // FilterParameters
 *     { // FilterParameter
 *       field: "STRING_VALUE", // required
 *       operator: "EQUALS" || "NOT_EQUALS" || "IN" || "CONTAINS", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   limit: Number("int"),
 * };
 * const command = new StartQueryPerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryPerformanceMonitorOutput
 * //   queryId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQueryPerformanceMonitorCommandInput - {@link StartQueryPerformanceMonitorCommandInput}
 * @returns {@link StartQueryPerformanceMonitorCommandOutput}
 * @see {@link StartQueryPerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link StartQueryPerformanceMonitorCommandOutput} for command's `response` shape.
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
export class StartQueryPerformanceMonitorCommand extends command<StartQueryPerformanceMonitorCommandInput, StartQueryPerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "StartQueryPerformanceMonitor",
  StartQueryPerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryPerformanceMonitorInput;
      output: StartQueryPerformanceMonitorOutput;
    };
    sdk: {
      input: StartQueryPerformanceMonitorCommandInput;
      output: StartQueryPerformanceMonitorCommandOutput;
    };
  };
}
