// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMonitorInput, GetMonitorOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_GetMonitorCommand, se_GetMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandInput extends GetMonitorInput {}
/**
 * @public
 *
 * The output of {@link GetMonitorCommand}.
 */
export interface GetMonitorCommandOutput extends GetMonitorOutput, __MetadataBearer {}

/**
 * <p>Returns details about a specific monitor. </p>
 *          <p>This action requires the <code>monitorName</code> parameter. Run
 *                 <code>ListMonitors</code> to get a list of monitor names. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, GetMonitorCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, GetMonitorCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // GetMonitorInput
 *   monitorName: "STRING_VALUE", // required
 * };
 * const command = new GetMonitorCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitorOutput
 * //   monitorArn: "STRING_VALUE", // required
 * //   monitorName: "STRING_VALUE", // required
 * //   state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING", // required
 * //   aggregationPeriod: Number("long"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   probes: [ // ProbeList
 * //     { // Probe
 * //       probeId: "STRING_VALUE",
 * //       probeArn: "STRING_VALUE",
 * //       sourceArn: "STRING_VALUE", // required
 * //       destination: "STRING_VALUE", // required
 * //       destinationPort: Number("int"),
 * //       protocol: "TCP" || "ICMP", // required
 * //       packetSize: Number("int"),
 * //       addressFamily: "IPV4" || "IPV6",
 * //       vpcId: "STRING_VALUE",
 * //       state: "PENDING" || "ACTIVE" || "INACTIVE" || "ERROR" || "DELETING" || "DELETED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMonitorCommandInput - {@link GetMonitorCommandInput}
 * @returns {@link GetMonitorCommandOutput}
 * @see {@link GetMonitorCommandInput} for command's `input` shape.
 * @see {@link GetMonitorCommandOutput} for command's `response` shape.
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
export class GetMonitorCommand extends $Command
  .classBuilder<
    GetMonitorCommandInput,
    GetMonitorCommandOutput,
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
  .s("NetworkMonitor", "GetMonitor", {})
  .n("NetworkMonitorClient", "GetMonitorCommand")
  .f(void 0, void 0)
  .ser(se_GetMonitorCommand)
  .de(de_GetMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitorInput;
      output: GetMonitorOutput;
    };
    sdk: {
      input: GetMonitorCommandInput;
      output: GetMonitorCommandOutput;
    };
  };
}
