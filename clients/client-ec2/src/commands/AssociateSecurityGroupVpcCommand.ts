// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSecurityGroupVpcRequest, AssociateSecurityGroupVpcResult } from "../models/models_0";
import { de_AssociateSecurityGroupVpcCommand, se_AssociateSecurityGroupVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSecurityGroupVpcCommand}.
 */
export interface AssociateSecurityGroupVpcCommandInput extends AssociateSecurityGroupVpcRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSecurityGroupVpcCommand}.
 */
export interface AssociateSecurityGroupVpcCommandOutput extends AssociateSecurityGroupVpcResult, __MetadataBearer {}

/**
 * <p>Associates a security group with another VPC in the same Region. This enables you to use the same security group with network interfaces and instances in the specified VPC.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The VPC you want to associate the security group with must be in the same Region.</p>
 *                </li>
 *                <li>
 *                   <p>You can associate the security group with another VPC if your account owns the VPC or if the VPC was shared with you.</p>
 *                </li>
 *                <li>
 *                   <p>You must own the security group.</p>
 *                </li>
 *                <li>
 *                   <p>You cannot use this feature with default security groups.</p>
 *                </li>
 *                <li>
 *                   <p>You cannot use this feature with the default VPC.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSecurityGroupVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSecurityGroupVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateSecurityGroupVpcRequest
 *   GroupId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateSecurityGroupVpcCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSecurityGroupVpcResult
 * //   State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * // };
 *
 * ```
 *
 * @param AssociateSecurityGroupVpcCommandInput - {@link AssociateSecurityGroupVpcCommandInput}
 * @returns {@link AssociateSecurityGroupVpcCommandOutput}
 * @see {@link AssociateSecurityGroupVpcCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityGroupVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateSecurityGroupVpcCommand extends $Command
  .classBuilder<
    AssociateSecurityGroupVpcCommandInput,
    AssociateSecurityGroupVpcCommandOutput,
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
  .s("AmazonEC2", "AssociateSecurityGroupVpc", {})
  .n("EC2Client", "AssociateSecurityGroupVpcCommand")
  .f(void 0, void 0)
  .ser(se_AssociateSecurityGroupVpcCommand)
  .de(de_AssociateSecurityGroupVpcCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSecurityGroupVpcRequest;
      output: AssociateSecurityGroupVpcResult;
    };
    sdk: {
      input: AssociateSecurityGroupVpcCommandInput;
      output: AssociateSecurityGroupVpcCommandOutput;
    };
  };
}
