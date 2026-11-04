// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMonitorInput, CreateMonitorOutput } from "../models/models_0";
import { CreateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandInput extends CreateMonitorInput {}
/**
 * @public
 *
 * The output of {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandOutput extends CreateMonitorOutput, __MetadataBearer {}

/**
 * Creates a monitor between a source subnet and destination IP address. Within a monitor you'll create one or more probes that monitor network traffic between your source Amazon Web Services VPC subnets and your destination IP addresses. Each probe then aggregates and sends metrics to Amazon CloudWatch.
 *
 * You can also create a monitor with probes using this command. For each probe, you define the following:
 *
 * - `source`—The subnet IDs where the probes will be created.
 * - `destination`— The target destination IP address for the probe.
 * - `destinationPort`—Required only if the protocol is `TCP`.
 * - `protocol`—The communication protocol between the source and destination. This will be either `TCP` or `ICMP`.
 * - `packetSize`—The size of the packets. This must be a number between `56` and `8500`.
 * - (Optional) `tags` —Key-value pairs created and assigned to the probe.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, CreateMonitorCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, CreateMonitorCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // CreateMonitorInput
 *   monitorName: "STRING_VALUE", // required
 *   probes: [ // CreateMonitorProbeInputList
 *     { // CreateMonitorProbeInput
 *       sourceArn: "STRING_VALUE", // required
 *       destination: "STRING_VALUE", // required
 *       destinationPort: Number("int"),
 *       protocol: "TCP" || "ICMP", // required
 *       packetSize: Number("int"),
 *       probeTags: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   aggregationPeriod: Number("long"),
 *   clientToken: "STRING_VALUE",
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateMonitorOutput
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
 * @param CreateMonitorCommandInput - {@link CreateMonitorCommandInput}
 * @returns {@link CreateMonitorCommandOutput}
 * @see {@link CreateMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
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
export class CreateMonitorCommand extends command<CreateMonitorCommandInput, CreateMonitorCommandOutput>(
  _ep0,
  _mw0,
  "CreateMonitor",
  CreateMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMonitorInput;
      output: CreateMonitorOutput;
    };
    sdk: {
      input: CreateMonitorCommandInput;
      output: CreateMonitorCommandOutput;
    };
  };
}
