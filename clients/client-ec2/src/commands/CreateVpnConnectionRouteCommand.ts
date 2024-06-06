// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpnConnectionRouteRequest } from "../models/models_2";
import { de_CreateVpnConnectionRouteCommand, se_CreateVpnConnectionRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpnConnectionRouteCommand}.
 */
export interface CreateVpnConnectionRouteCommandInput extends CreateVpnConnectionRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnConnectionRouteCommand}.
 */
export interface CreateVpnConnectionRouteCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a static route associated with a VPN connection between an existing virtual
 *             private gateway and a VPN customer gateway. The static route allows traffic to be routed
 *             from the virtual private gateway to the VPN customer gateway.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpnConnectionRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   VpnConnectionId: "STRING_VALUE", // required
 * };
 * const command = new CreateVpnConnectionRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateVpnConnectionRouteCommandInput - {@link CreateVpnConnectionRouteCommandInput}
 * @returns {@link CreateVpnConnectionRouteCommandOutput}
 * @see {@link CreateVpnConnectionRouteCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateVpnConnectionRouteCommand extends $Command
  .classBuilder<
    CreateVpnConnectionRouteCommandInput,
    CreateVpnConnectionRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateVpnConnectionRoute", {})
  .n("EC2Client", "CreateVpnConnectionRouteCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpnConnectionRouteCommand)
  .de(de_CreateVpnConnectionRouteCommand)
  .build() {}
