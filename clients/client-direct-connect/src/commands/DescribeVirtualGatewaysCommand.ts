// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { VirtualGateways } from "../models/models_0";
import { DescribeVirtualGateways } from "../schemas/schemas_7_DescribeVirtualGateways";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualGatewaysCommand}.
 */
export interface DescribeVirtualGatewaysCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualGatewaysCommand}.
 */
export interface DescribeVirtualGatewaysCommandOutput extends VirtualGateways, __MetadataBearer {}

/**
 * <note>
 *             <p>Deprecated. Use <code>DescribeVpnGateways</code> instead. See <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html">DescribeVPNGateways</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
 *          </note>
 *          <p>Lists the virtual private gateways owned by the Amazon Web Services account.</p>
 *          <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualGatewaysCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualGatewaysCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = {};
 * const command = new DescribeVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // VirtualGateways
 * //   virtualGateways: [ // VirtualGatewayList
 * //     { // VirtualGateway
 * //       virtualGatewayId: "STRING_VALUE",
 * //       virtualGatewayState: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVirtualGatewaysCommandInput - {@link DescribeVirtualGatewaysCommandInput}
 * @returns {@link DescribeVirtualGatewaysCommandOutput}
 * @see {@link DescribeVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewaysCommandOutput} for command's `response` shape.
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
export class DescribeVirtualGatewaysCommand extends $Command
  .classBuilder<
    DescribeVirtualGatewaysCommandInput,
    DescribeVirtualGatewaysCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeVirtualGateways", {})
  .n("DirectConnectClient", "DescribeVirtualGatewaysCommand")
  .sc(DescribeVirtualGateways)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: VirtualGateways;
    };
    sdk: {
      input: DescribeVirtualGatewaysCommandInput;
      output: DescribeVirtualGatewaysCommandOutput;
    };
  };
}
