// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQueryStatusWorkloadInsightsTopContributorsDataInput,
  GetQueryStatusWorkloadInsightsTopContributorsDataOutput,
} from "../models/models_0";
import { GetQueryStatusWorkloadInsightsTopContributorsData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput extends GetQueryStatusWorkloadInsightsTopContributorsDataInput {}
/**
 * @public
 *
 * The output of {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommand}.
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput extends GetQueryStatusWorkloadInsightsTopContributorsDataOutput, __MetadataBearer {}

/**
 * Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors data for workload insights.
 *
 * When you start a query, use this call to check the status of the query to make sure that it has has `SUCCEEDED` before you review the results. Use the same query ID that you used for the corresponding API call to start the query, `StartQueryWorkloadInsightsTopContributorsData`.
 *
 * Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.
 *
 * The top contributor network flows overall are for a specific metric type, for example, the number of retransmissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsDataCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetQueryStatusWorkloadInsightsTopContributorsDataCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetQueryStatusWorkloadInsightsTopContributorsDataInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatusWorkloadInsightsTopContributorsDataCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatusWorkloadInsightsTopContributorsDataOutput
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELED", // required
 * // };
 *
 * ```
 *
 * @param GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput - {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput}
 * @returns {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput}
 * @see {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput} for command's `response` shape.
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
export class GetQueryStatusWorkloadInsightsTopContributorsDataCommand extends command<GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput, GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryStatusWorkloadInsightsTopContributorsData",
  GetQueryStatusWorkloadInsightsTopContributorsData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatusWorkloadInsightsTopContributorsDataInput;
      output: GetQueryStatusWorkloadInsightsTopContributorsDataOutput;
    };
    sdk: {
      input: GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput;
      output: GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput;
    };
  };
}
