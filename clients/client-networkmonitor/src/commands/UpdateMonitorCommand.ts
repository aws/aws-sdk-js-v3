// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMonitorInput, UpdateMonitorOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { UpdateMonitor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandInput extends UpdateMonitorInput {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandOutput extends UpdateMonitorOutput, __MetadataBearer {}

/**
 * <p>Updates the <code>aggregationPeriod</code> for a monitor. Monitors support an
 *                 <code>aggregationPeriod</code> of either <code>30</code> or <code>60</code> seconds.
 *             This action requires  the <code>monitorName</code> and <code>probeId</code> parameter.
 *             Run <code>ListMonitors</code> to get a list of monitor names.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, UpdateMonitorCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, UpdateMonitorCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // UpdateMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   aggregationPeriod: Number("long"), // required
 * };
 * const command = new UpdateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitorOutput
 * //   monitorArn: "STRING_VALUE", // required
 * //   monitorName: "STRING_VALUE", // required
 * //   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //   aggregationPeriod: Number("long"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMonitorCommandInput - {@link UpdateMonitorCommandInput}
 * @returns {@link UpdateMonitorCommandOutput}
 * @see {@link UpdateMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
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
export class UpdateMonitorCommand extends $Command
  .classBuilder<
    UpdateMonitorCommandInput,
    UpdateMonitorCommandOutput,
    NetworkMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkMonitorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkMonitor", "UpdateMonitor", {})
  .n("NetworkMonitorClient", "UpdateMonitorCommand")
  .sc(UpdateMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitorInput;
      output: UpdateMonitorOutput;
    };
    sdk: {
      input: UpdateMonitorCommandInput;
      output: UpdateMonitorCommandOutput;
    };
  };
}
