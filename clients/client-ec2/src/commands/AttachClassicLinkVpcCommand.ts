// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachClassicLinkVpcRequest, AttachClassicLinkVpcResult } from "../models/models_0";
import { de_AttachClassicLinkVpcCommand, se_AttachClassicLinkVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachClassicLinkVpcCommand}.
 */
export interface AttachClassicLinkVpcCommandInput extends AttachClassicLinkVpcRequest {}
/**
 * @public
 *
 * The output of {@link AttachClassicLinkVpcCommand}.
 */
export interface AttachClassicLinkVpcCommandOutput extends AttachClassicLinkVpcResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC
 * 			security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You
 * 			can only link an instance that's in the <code>running</code> state. An instance is
 * 			automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when
 * 			you restart it.</p>
 *          <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p>
 *          <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // AttachClassicLinkVpcRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   Groups: [ // GroupIdStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AttachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * // { // AttachClassicLinkVpcResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param AttachClassicLinkVpcCommandInput - {@link AttachClassicLinkVpcCommandInput}
 * @returns {@link AttachClassicLinkVpcCommandOutput}
 * @see {@link AttachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link AttachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AttachClassicLinkVpcCommand extends $Command
  .classBuilder<
    AttachClassicLinkVpcCommandInput,
    AttachClassicLinkVpcCommandOutput,
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
  .s("AmazonEC2", "AttachClassicLinkVpc", {})
  .n("EC2Client", "AttachClassicLinkVpcCommand")
  .f(void 0, void 0)
  .ser(se_AttachClassicLinkVpcCommand)
  .de(de_AttachClassicLinkVpcCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachClassicLinkVpcRequest;
      output: AttachClassicLinkVpcResult;
    };
    sdk: {
      input: AttachClassicLinkVpcCommandInput;
      output: AttachClassicLinkVpcCommandOutput;
    };
  };
}
