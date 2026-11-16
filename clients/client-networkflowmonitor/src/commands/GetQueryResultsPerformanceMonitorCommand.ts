// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQueryResultsPerformanceMonitorInput,
  GetQueryResultsPerformanceMonitorOutput,
} from "../models/models_0";
import { GetQueryResultsPerformanceMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryResultsPerformanceMonitorCommand}.
 */
export interface GetQueryResultsPerformanceMonitorCommandInput extends GetQueryResultsPerformanceMonitorInput {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsPerformanceMonitorCommand}.
 */
export interface GetQueryResultsPerformanceMonitorCommandOutput extends GetQueryResultsPerformanceMonitorOutput, __MetadataBearer {}

/**
 * <p>Returns the results of a query for the Network Flow Monitor query interface, for a specified query ID and performance monitor. This call returns the top paths for a performance monitor.</p> <p>Create a query with <a href="https://docs.aws.amazon.com/networkflowmonitor/2.0/APIReference/API_StartQueryPerformanceMonitor.html"> StartQueryPerformanceMonitor</a>, and then use the query ID with this call to return the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryResultsPerformanceMonitorCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryResultsPerformanceMonitorCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryResultsPerformanceMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetQueryResultsPerformanceMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsPerformanceMonitorOutput
 * //   fields: [ // QueryFields // required
 * //     { // QueryField
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   data: [ // QueryData // required
 * //     [ // QueryRow
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsPerformanceMonitorCommandInput - {@link GetQueryResultsPerformanceMonitorCommandInput}
 * @returns {@link GetQueryResultsPerformanceMonitorCommandOutput}
 * @see {@link GetQueryResultsPerformanceMonitorCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsPerformanceMonitorCommandOutput} for command's `response` shape.
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
export class GetQueryResultsPerformanceMonitorCommand extends command<GetQueryResultsPerformanceMonitorCommandInput, GetQueryResultsPerformanceMonitorCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryResultsPerformanceMonitor",
  GetQueryResultsPerformanceMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsPerformanceMonitorInput;
      output: GetQueryResultsPerformanceMonitorOutput;
    };
    sdk: {
      input: GetQueryResultsPerformanceMonitorCommandInput;
      output: GetQueryResultsPerformanceMonitorCommandOutput;
    };
  };
}
