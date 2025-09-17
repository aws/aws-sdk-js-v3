// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSecurityGroupVpcRequest, DisassociateSecurityGroupVpcResult } from "../models/models_6";
import { de_DisassociateSecurityGroupVpcCommand, se_DisassociateSecurityGroupVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSecurityGroupVpcCommand}.
 */
export interface DisassociateSecurityGroupVpcCommandInput extends DisassociateSecurityGroupVpcRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSecurityGroupVpcCommand}.
 */
export interface DisassociateSecurityGroupVpcCommandOutput
  extends DisassociateSecurityGroupVpcResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a security group from a VPC. You cannot disassociate the security group if any Elastic network interfaces in the associated VPC are still associated with the security group.
 *
 *             Note that the disassociation is asynchronous and you can check the status of the request with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupVpcAssociations.html">DescribeSecurityGroupVpcAssociations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateSecurityGroupVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateSecurityGroupVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateSecurityGroupVpcRequest
 *   GroupId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateSecurityGroupVpcCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSecurityGroupVpcResult
 * //   State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * // };
 *
 * ```
 *
 * @param DisassociateSecurityGroupVpcCommandInput - {@link DisassociateSecurityGroupVpcCommandInput}
 * @returns {@link DisassociateSecurityGroupVpcCommandOutput}
 * @see {@link DisassociateSecurityGroupVpcCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityGroupVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateSecurityGroupVpcCommand extends $Command
  .classBuilder<
    DisassociateSecurityGroupVpcCommandInput,
    DisassociateSecurityGroupVpcCommandOutput,
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
  .s("AmazonEC2", "DisassociateSecurityGroupVpc", {})
  .n("EC2Client", "DisassociateSecurityGroupVpcCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSecurityGroupVpcCommand)
  .de(de_DisassociateSecurityGroupVpcCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSecurityGroupVpcRequest;
      output: DisassociateSecurityGroupVpcResult;
    };
    sdk: {
      input: DisassociateSecurityGroupVpcCommandInput;
      output: DisassociateSecurityGroupVpcCommandOutput;
    };
  };
}
