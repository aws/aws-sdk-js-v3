// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProbeInput, DeleteProbeOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_DeleteProbeCommand, se_DeleteProbeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProbeCommand}.
 */
export interface DeleteProbeCommandInput extends DeleteProbeInput {}
/**
 * @public
 *
 * The output of {@link DeleteProbeCommand}.
 */
export interface DeleteProbeCommandOutput extends DeleteProbeOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified probe. Once a probe is deleted you'll no longer incur any billing
 *             fees for that probe.</p>
 *          <p>This action requires both the <code>monitorName</code> and <code>probeId</code>
 *             parameters. Run <code>ListMonitors</code> to get a list of monitor names. Run
 *                 <code>GetMonitor</code> to get a list of probes and probe IDs. You can only delete a
 *             single probe at a time using this action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, DeleteProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, DeleteProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * const client = new NetworkMonitorClient(config);
 * const input = { // DeleteProbeInput
 *   monitorName: "STRING_VALUE", // required
 *   probeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProbeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProbeCommandInput - {@link DeleteProbeCommandInput}
 * @returns {@link DeleteProbeCommandOutput}
 * @see {@link DeleteProbeCommandInput} for command's `input` shape.
 * @see {@link DeleteProbeCommandOutput} for command's `response` shape.
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
export class DeleteProbeCommand extends $Command
  .classBuilder<
    DeleteProbeCommandInput,
    DeleteProbeCommandOutput,
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
  .s("NetworkMonitor", "DeleteProbe", {})
  .n("NetworkMonitorClient", "DeleteProbeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProbeCommand)
  .de(de_DeleteProbeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProbeInput;
      output: {};
    };
    sdk: {
      input: DeleteProbeCommandInput;
      output: DeleteProbeCommandOutput;
    };
  };
}
