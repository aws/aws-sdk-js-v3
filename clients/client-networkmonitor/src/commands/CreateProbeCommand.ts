// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProbeInput, CreateProbeOutput } from "../models/models_0";
import { CreateProbe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create a probe within a monitor. Once you create a probe, and it begins monitoring your network traffic, you'll incur billing charges for that probe. This action requires the `monitorName` parameter. Run `ListMonitors` to get a list of monitor names. Note the name of the `monitorName` you want to create the probe for.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, CreateProbeCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, CreateProbeCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
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
export class CreateProbeCommand extends command<CreateProbeCommandInput, CreateProbeCommandOutput>(
  _ep0,
  _mw0,
  "CreateProbe",
  CreateProbe$
) {
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
