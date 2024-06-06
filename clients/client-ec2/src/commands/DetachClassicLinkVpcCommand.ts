// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/models_5";
import { de_DetachClassicLinkVpcCommand, se_DetachClassicLinkVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachClassicLinkVpcCommand}.
 */
export interface DetachClassicLinkVpcCommandInput extends DetachClassicLinkVpcRequest {}
/**
 * @public
 *
 * The output of {@link DetachClassicLinkVpcCommand}.
 */
export interface DetachClassicLinkVpcCommandOutput extends DetachClassicLinkVpcResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked,
 * 		    the VPC security groups are no longer associated with it. An instance is automatically unlinked from
 * 		    a VPC when it's stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachClassicLinkVpcRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DetachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * // { // DetachClassicLinkVpcResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DetachClassicLinkVpcCommandInput - {@link DetachClassicLinkVpcCommandInput}
 * @returns {@link DetachClassicLinkVpcCommandOutput}
 * @see {@link DetachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link DetachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DetachClassicLinkVpcCommand extends $Command
  .classBuilder<
    DetachClassicLinkVpcCommandInput,
    DetachClassicLinkVpcCommandOutput,
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
  .s("AmazonEC2", "DetachClassicLinkVpc", {})
  .n("EC2Client", "DetachClassicLinkVpcCommand")
  .f(void 0, void 0)
  .ser(se_DetachClassicLinkVpcCommand)
  .de(de_DetachClassicLinkVpcCommand)
  .build() {}
