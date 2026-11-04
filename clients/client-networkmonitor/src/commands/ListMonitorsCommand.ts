// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMonitorsInput, ListMonitorsOutput } from "../models/models_0";
import { ListMonitors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandInput extends ListMonitorsInput {}
/**
 * @public
 *
 * The output of {@link ListMonitorsCommand}.
 */
export interface ListMonitorsCommandOutput extends ListMonitorsOutput, __MetadataBearer {}

/**
 * Returns a list of all of your monitors.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, ListMonitorsCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, ListMonitorsCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // ListMonitorsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   state: "STRING_VALUE",
 * };
 * const command = new ListMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitorsOutput
 * //   monitors: [ // MonitorList // required
 * //     { // MonitorSummary
 * //       monitorArn: "STRING_VALUE", // required
 * //       monitorName: "STRING_VALUE", // required
 * //       state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //       aggregationPeriod: Number("long"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitorsCommandInput - {@link ListMonitorsCommandInput}
 * @returns {@link ListMonitorsCommandOutput}
 * @see {@link ListMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorsCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link NetworkMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkMonitor service.
 *
 * @public
 */
export class ListMonitorsCommand extends command<ListMonitorsCommandInput, ListMonitorsCommandOutput>(
  _ep0,
  _mw0,
  "ListMonitors",
  ListMonitors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitorsInput;
      output: ListMonitorsOutput;
    };
    sdk: {
      input: ListMonitorsCommandInput;
      output: ListMonitorsCommandOutput;
    };
  };
}
