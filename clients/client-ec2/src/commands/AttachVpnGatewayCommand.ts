// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AttachVpnGatewayRequest, AttachVpnGatewayResult } from "../models/models_0";
import { AttachVpnGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachVpnGatewayCommand}.
 */
export interface AttachVpnGatewayCommandInput extends AttachVpnGatewayRequest {}
/**
 * @public
 *
 * The output of {@link AttachVpnGatewayCommand}.
 */
export interface AttachVpnGatewayCommandOutput extends AttachVpnGatewayResult, __MetadataBearer {}

/**
 * <p>Attaches an available virtual private gateway to a VPC. You can attach one virtual private
 *             gateway to one VPC at a time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AttachVpnGatewayRequest
 *   VpcId: "STRING_VALUE", // required
 *   VpnGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AttachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * // { // AttachVpnGatewayResult
 * //   VpcAttachment: { // VpcAttachment
 * //     VpcId: "STRING_VALUE",
 * //     State: "attaching" || "attached" || "detaching" || "detached",
 * //   },
 * // };
 *
 * ```
 *
 * @param AttachVpnGatewayCommandInput - {@link AttachVpnGatewayCommandInput}
 * @returns {@link AttachVpnGatewayCommandOutput}
 * @see {@link AttachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AttachVpnGatewayCommand extends $Command
  .classBuilder<
    AttachVpnGatewayCommandInput,
    AttachVpnGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AttachVpnGateway", {})
  .n("EC2Client", "AttachVpnGatewayCommand")
  .sc(AttachVpnGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachVpnGatewayRequest;
      output: AttachVpnGatewayResult;
    };
    sdk: {
      input: AttachVpnGatewayCommandInput;
      output: AttachVpnGatewayCommandOutput;
    };
  };
}
