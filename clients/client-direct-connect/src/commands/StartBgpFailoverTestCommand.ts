// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartBgpFailoverTestRequest, StartBgpFailoverTestResponse } from "../models/models_0";
import { StartBgpFailoverTest } from "../schemas/schemas_5_Test";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBgpFailoverTestCommand}.
 */
export interface StartBgpFailoverTestCommandInput extends StartBgpFailoverTestRequest {}
/**
 * @public
 *
 * The output of {@link StartBgpFailoverTestCommand}.
 */
export interface StartBgpFailoverTestCommandOutput extends StartBgpFailoverTestResponse, __MetadataBearer {}

/**
 * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p>
 *          <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p>
 *          <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p>
 *          <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StartBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StartBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // StartBgpFailoverTestRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   bgpPeers: [ // BGPPeerIdList
 *     "STRING_VALUE",
 *   ],
 *   testDurationInMinutes: Number("int"),
 * };
 * const command = new StartBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * // { // StartBgpFailoverTestResponse
 * //   virtualInterfaceTest: { // VirtualInterfaceTestHistory
 * //     testId: "STRING_VALUE",
 * //     virtualInterfaceId: "STRING_VALUE",
 * //     bgpPeers: [ // BGPPeerIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "STRING_VALUE",
 * //     ownerAccount: "STRING_VALUE",
 * //     testDurationInMinutes: Number("int"),
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBgpFailoverTestCommandInput - {@link StartBgpFailoverTestCommandInput}
 * @returns {@link StartBgpFailoverTestCommandOutput}
 * @see {@link StartBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StartBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class StartBgpFailoverTestCommand extends $Command
  .classBuilder<
    StartBgpFailoverTestCommandInput,
    StartBgpFailoverTestCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "StartBgpFailoverTest", {})
  .n("DirectConnectClient", "StartBgpFailoverTestCommand")
  .sc(StartBgpFailoverTest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBgpFailoverTestRequest;
      output: StartBgpFailoverTestResponse;
    };
    sdk: {
      input: StartBgpFailoverTestCommandInput;
      output: StartBgpFailoverTestCommandOutput;
    };
  };
}
