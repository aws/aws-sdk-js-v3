// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProbeInput, CreateProbeOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_CreateProbeCommand, se_CreateProbeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProbeCommand}.
 */
export interface CreateProbeCommandInput extends CreateProbeInput {}
/**
 * @public
 *
 * The output of {@link CreateProbeCommand}.
 */
export interface CreateProbeCommandOutput extends CreateProbeOutput, __MetadataBearer {}

/**
 * <p>Create a probe within a monitor. Once you create a probe, and it begins monitoring your
 *             network traffic, you'll incur billing charges for that probe. This action requires the
 *                 <code>monitorName</code> parameter. Run <code>ListMonitors</code> to get a list of
 *             monitor names. Note the name of the <code>monitorName</code> you want to create the
 *             probe for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, CreateProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, CreateProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * const client = new NetworkMonitorClient(config);
 * const input = { // CreateProbeInput
 *   monitorName: "STRING_VALUE", // required
 *   probe: { // ProbeInput
 *     sourceArn: "STRING_VALUE", // required
 *     destination: "STRING_VALUE", // required
 *     destinationPort: Number("int"),
 *     protocol: "TCP" || "ICMP", // required
 *     packetSize: Number("int"),
 *     tags: { // TagMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProbeCommand(input);
 * const response = await client.send(command);
 * // { // CreateProbeOutput
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
 * @param CreateProbeCommandInput - {@link CreateProbeCommandInput}
 * @returns {@link CreateProbeCommandOutput}
 * @see {@link CreateProbeCommandInput} for command's `input` shape.
 * @see {@link CreateProbeCommandOutput} for command's `response` shape.
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
export class CreateProbeCommand extends $Command
  .classBuilder<
    CreateProbeCommandInput,
    CreateProbeCommandOutput,
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
  .s("NetworkMonitor", "CreateProbe", {})
  .n("NetworkMonitorClient", "CreateProbeCommand")
  .f(void 0, void 0)
  .ser(se_CreateProbeCommand)
  .de(de_CreateProbeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProbeInput;
      output: CreateProbeOutput;
    };
    sdk: {
      input: CreateProbeCommandInput;
      output: CreateProbeCommandOutput;
    };
  };
}
