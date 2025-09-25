// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopBgpFailoverTestRequest, StopBgpFailoverTestResponse } from "../models/models_0";
import { StopBgpFailoverTest } from "../schemas/schemas_5_Test";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBgpFailoverTestCommand}.
 */
export interface StopBgpFailoverTestCommandInput extends StopBgpFailoverTestRequest {}
/**
 * @public
 *
 * The output of {@link StopBgpFailoverTestCommand}.
 */
export interface StopBgpFailoverTestCommandOutput extends StopBgpFailoverTestResponse, __MetadataBearer {}

/**
 * <p>Stops the virtual interface failover test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StopBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StopBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // StopBgpFailoverTestRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new StopBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * // { // StopBgpFailoverTestResponse
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
 * @param StopBgpFailoverTestCommandInput - {@link StopBgpFailoverTestCommandInput}
 * @returns {@link StopBgpFailoverTestCommandOutput}
 * @see {@link StopBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StopBgpFailoverTestCommandOutput} for command's `response` shape.
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
export class StopBgpFailoverTestCommand extends $Command
  .classBuilder<
    StopBgpFailoverTestCommandInput,
    StopBgpFailoverTestCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "StopBgpFailoverTest", {})
  .n("DirectConnectClient", "StopBgpFailoverTestCommand")
  .sc(StopBgpFailoverTest)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBgpFailoverTestRequest;
      output: StopBgpFailoverTestResponse;
    };
    sdk: {
      input: StopBgpFailoverTestCommandInput;
      output: StopBgpFailoverTestCommandOutput;
    };
  };
}
