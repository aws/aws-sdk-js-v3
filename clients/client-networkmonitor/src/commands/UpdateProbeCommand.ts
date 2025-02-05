// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProbeInput, UpdateProbeOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_UpdateProbeCommand, se_UpdateProbeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProbeCommand}.
 */
export interface UpdateProbeCommandInput extends UpdateProbeInput {}
/**
 * @public
 *
 * The output of {@link UpdateProbeCommand}.
 */
export interface UpdateProbeCommandOutput extends UpdateProbeOutput, __MetadataBearer {}

/**
 * <p>Updates a monitor probe. This action requires both the <code>monitorName</code> and <code>probeId</code> parameters. Run <code>ListMonitors</code> to get a list of monitor names. Run <code>GetMonitor</code> to get a list of probes and probe IDs. </p>
 *          <p>You can update the following para create a monitor with probes using this command. For
 *             each probe, you define the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>state</code>—The state of the probe.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>destination</code>— The target destination IP address for the
 *                     probe.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>destinationPort</code>—Required only if the protocol is
 *                     <code>TCP</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>protocol</code>—The communication protocol between the source and
 *                     destination. This will be either <code>TCP</code> or <code>ICMP</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>packetSize</code>—The size of the packets. This must be a number between
 *                         <code>56</code> and <code>8500</code>.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) <code>tags</code> —Key-value pairs created and assigned to the
 *                     probe.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, UpdateProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, UpdateProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkMonitorClient(config);
 * const input = { // UpdateProbeInput
 *   monitorName: "STRING_VALUE", // required
 *   probeId: "STRING_VALUE", // required
 *   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING" || "DELETED",
 *   destination: "STRING_VALUE",
 *   destinationPort: Number("int"),
 *   protocol: "TCP" || "ICMP",
 *   packetSize: Number("int"),
 * };
 * const command = new UpdateProbeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProbeOutput
 * //   probeId: "STRING_VALUE",
 * //   probeArn: "STRING_VALUE",
 * //   sourceArn: "STRING_VALUE", // required
 * //   destination: "STRING_VALUE", // required
 * //   destinationPort: Number("int"),
 * //   protocol: "TCP" || "ICMP", // required
 * //   packetSize: Number("int"),
 * //   addressFamily: "IPV4" || "IPV6",
 * //   vpcId: "STRING_VALUE",
 * //   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING" || "DELETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   modifiedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProbeCommandInput - {@link UpdateProbeCommandInput}
 * @returns {@link UpdateProbeCommandOutput}
 * @see {@link UpdateProbeCommandInput} for command's `input` shape.
 * @see {@link UpdateProbeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateProbeCommand extends $Command
  .classBuilder<
    UpdateProbeCommandInput,
    UpdateProbeCommandOutput,
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
  .s("NetworkMonitor", "UpdateProbe", {})
  .n("NetworkMonitorClient", "UpdateProbeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProbeCommand)
  .de(de_UpdateProbeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProbeInput;
      output: UpdateProbeOutput;
    };
    sdk: {
      input: UpdateProbeCommandInput;
      output: UpdateProbeCommandOutput;
    };
  };
}
