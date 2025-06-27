// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachInternetGatewayRequest } from "../models/models_0";
import { de_AttachInternetGatewayCommand, se_AttachInternetGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachInternetGatewayCommand}.
 */
export interface AttachInternetGatewayCommandInput extends AttachInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link AttachInternetGatewayCommand}.
 */
export interface AttachInternetGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity
 * 		        between the internet and the VPC. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html">Internet gateways</a> in the
 * 		        <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AttachInternetGatewayRequest
 *   DryRun: true || false,
 *   InternetGatewayId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new AttachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachInternetGatewayCommandInput - {@link AttachInternetGatewayCommandInput}
 * @returns {@link AttachInternetGatewayCommandOutput}
 * @see {@link AttachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To attach an Internet gateway to a VPC
 * ```javascript
 * // This example attaches the specified Internet gateway to the specified VPC.
 * const input = {
 *   InternetGatewayId: "igw-c0a643a9",
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new AttachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachInternetGatewayCommand extends $Command
  .classBuilder<
    AttachInternetGatewayCommandInput,
    AttachInternetGatewayCommandOutput,
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
  .s("AmazonEC2", "AttachInternetGateway", {})
  .n("EC2Client", "AttachInternetGatewayCommand")
  .f(void 0, void 0)
  .ser(se_AttachInternetGatewayCommand)
  .de(de_AttachInternetGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachInternetGatewayRequest;
      output: {};
    };
    sdk: {
      input: AttachInternetGatewayCommandInput;
      output: AttachInternetGatewayCommandOutput;
    };
  };
}
