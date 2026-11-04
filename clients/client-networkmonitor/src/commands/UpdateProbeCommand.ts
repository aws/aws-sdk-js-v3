// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProbeInput, UpdateProbeOutput } from "../models/models_0";
import { UpdateProbe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a monitor probe. This action requires both the `monitorName` and `probeId` parameters. Run `ListMonitors` to get a list of monitor names. Run `GetMonitor` to get a list of probes and probe IDs.
 *
 * You can update the following para create a monitor with probes using this command. For each probe, you define the following:
 *
 * - `state`—The state of the probe.
 * - `destination`— The target destination IP address for the probe.
 * - `destinationPort`—Required only if the protocol is `TCP`.
 * - `protocol`—The communication protocol between the source and destination. This will be either `TCP` or `ICMP`.
 * - `packetSize`—The size of the packets. This must be a number between `56` and `8500`.
 * - (Optional) `tags` —Key-value pairs created and assigned to the probe.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, UpdateProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, UpdateProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
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
export class UpdateProbeCommand extends command<UpdateProbeCommandInput, UpdateProbeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProbe",
  UpdateProbe$
) {
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
