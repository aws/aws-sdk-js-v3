// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpcRequest } from "../models/models_3";
import { DeleteVpc$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcCommand}.
 */
export interface DeleteVpcCommandInput extends DeleteVpcRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcCommand}.
 */
export interface DeleteVpcCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified VPC. You must detach or delete all gateways and resources that are associated
 * 		  with the VPC before you can delete it. For example, you must terminate all instances running in the VPC,
 * 		  delete all security groups associated with the VPC (except the default one), delete all route tables
 * 		  associated with the VPC (except the default one), and so on. When you delete the VPC, it deletes the
 * 		  default security group, network ACL, and route table for the VPC.</p>
 *          <p>If you created a flow log for the VPC that you are deleting, note that flow logs for deleted
 *           VPCs are eventually automatically removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcRequest
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteVpcCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpcCommandInput - {@link DeleteVpcCommandInput}
 * @returns {@link DeleteVpcCommandOutput}
 * @see {@link DeleteVpcCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a VPC
 * ```javascript
 * // This example deletes the specified VPC.
 * const input = {
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new DeleteVpcCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteVpcCommand extends $Command
  .classBuilder<
    DeleteVpcCommandInput,
    DeleteVpcCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVpc", {})
  .n("EC2Client", "DeleteVpcCommand")
  .sc(DeleteVpc$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcRequest;
      output: {};
    };
    sdk: {
      input: DeleteVpcCommandInput;
      output: DeleteVpcCommandOutput;
    };
  };
}
