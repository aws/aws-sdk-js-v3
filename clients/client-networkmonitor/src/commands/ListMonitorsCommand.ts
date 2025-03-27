// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMonitorsInput, ListMonitorsOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_ListMonitorsCommand, se_ListMonitorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of all of your monitors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, ListMonitorsCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, ListMonitorsCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link NetworkMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkMonitor service.</p>
 *
 *
 * @public
 */
export class ListMonitorsCommand extends $Command
  .classBuilder<
    ListMonitorsCommandInput,
    ListMonitorsCommandOutput,
    NetworkMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkMonitor", "ListMonitors", {})
  .n("NetworkMonitorClient", "ListMonitorsCommand")
  .f(void 0, void 0)
  .ser(se_ListMonitorsCommand)
  .de(de_ListMonitorsCommand)
  .build() {
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
