// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVpcClassicLinkRequest, EnableVpcClassicLinkResult } from "../models/models_6";
import { de_EnableVpcClassicLinkCommand, se_EnableVpcClassicLinkCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableVpcClassicLinkCommand}.
 */
export interface EnableVpcClassicLinkCommandInput extends EnableVpcClassicLinkRequest {}
/**
 * @public
 *
 * The output of {@link EnableVpcClassicLinkCommand}.
 */
export interface EnableVpcClassicLinkCommandOutput extends EnableVpcClassicLinkResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
 * 			ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot
 * 			enable your VPC for ClassicLink if any of your VPC route tables have existing routes for
 * 			address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local
 * 			routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address
 * 			ranges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableVpcClassicLinkRequest
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new EnableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * // { // EnableVpcClassicLinkResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableVpcClassicLinkCommandInput - {@link EnableVpcClassicLinkCommandInput}
 * @returns {@link EnableVpcClassicLinkCommandOutput}
 * @see {@link EnableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableVpcClassicLinkCommand extends $Command
  .classBuilder<
    EnableVpcClassicLinkCommandInput,
    EnableVpcClassicLinkCommandOutput,
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
  .s("AmazonEC2", "EnableVpcClassicLink", {})
  .n("EC2Client", "EnableVpcClassicLinkCommand")
  .f(void 0, void 0)
  .ser(se_EnableVpcClassicLinkCommand)
  .de(de_EnableVpcClassicLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableVpcClassicLinkRequest;
      output: EnableVpcClassicLinkResult;
    };
    sdk: {
      input: EnableVpcClassicLinkCommandInput;
      output: EnableVpcClassicLinkCommandOutput;
    };
  };
}
