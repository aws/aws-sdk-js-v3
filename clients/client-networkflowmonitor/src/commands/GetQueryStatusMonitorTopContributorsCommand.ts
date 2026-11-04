// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQueryStatusMonitorTopContributorsInput,
  GetQueryStatusMonitorTopContributorsOutput,
} from "../models/models_0";
import { GetQueryStatusMonitorTopContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetQueryStatusMonitorTopContributorsCommandOutput extends GetQueryStatusMonitorTopContributorsOutput, __MetadataBearer {}

/**
 * Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors for a monitor.
 *
 * When you create a query, use this call to check the status of the query to make sure that it has has `SUCCEEDED` before you review the results. Use the same query ID that you used for the corresponding API call to start (create) the query, `StartQueryMonitorTopContributors`.
 *
 * When you run a query, use this call to check the status of the query to make sure that the query has `SUCCEEDED` before you review the results.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkFlowMonitor service.
 *
 * @public
 */
export class GetQueryStatusMonitorTopContributorsCommand extends command<GetQueryStatusMonitorTopContributorsCommandInput, GetQueryStatusMonitorTopContributorsCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryStatusMonitorTopContributors",
  GetQueryStatusMonitorTopContributors$
) {
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
