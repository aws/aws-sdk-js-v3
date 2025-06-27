// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachVpnGatewayRequest } from "../models/models_6";
import { de_DetachVpnGatewayCommand, se_DetachVpnGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachVpnGatewayCommand}.
 */
export interface DetachVpnGatewayCommandInput extends DetachVpnGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DetachVpnGatewayCommand}.
 */
export interface DetachVpnGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn
 *             off the VPC and not use it anymore. You can confirm a virtual private gateway has been
 *             completely detached from a VPC by describing the virtual private gateway (any
 *             attachments to the virtual private gateway are also described).</p>
 *          <p>You must wait for the attachment's state to switch to <code>detached</code> before you
 *             can delete the VPC or attach a different VPC to the virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachVpnGatewayRequest
 *   VpcId: "STRING_VALUE", // required
 *   VpnGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DetachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachVpnGatewayCommandInput - {@link DetachVpnGatewayCommandInput}
 * @returns {@link DetachVpnGatewayCommandOutput}
 * @see {@link DetachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DetachVpnGatewayCommand extends $Command
  .classBuilder<
    DetachVpnGatewayCommandInput,
    DetachVpnGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DetachVpnGateway", {})
  .n("EC2Client", "DetachVpnGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DetachVpnGatewayCommand)
  .de(de_DetachVpnGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachVpnGatewayRequest;
      output: {};
    };
    sdk: {
      input: DetachVpnGatewayCommandInput;
      output: DetachVpnGatewayCommandOutput;
    };
  };
}
