// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_8";
import { ReplaceNetworkAclAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReplaceNetworkAclAssociationCommand}.
 */
export interface ReplaceNetworkAclAssociationCommandInput extends ReplaceNetworkAclAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceNetworkAclAssociationCommand}.
 */
export interface ReplaceNetworkAclAssociationCommandOutput
  extends ReplaceNetworkAclAssociationResult,
    __MetadataBearer {}

/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclAssociationRequest
 *   DryRun: true || false,
 *   AssociationId: "STRING_VALUE", // required
 *   NetworkAclId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceNetworkAclAssociationResult
 * //   NewAssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplaceNetworkAclAssociationCommandInput - {@link ReplaceNetworkAclAssociationCommandInput}
 * @returns {@link ReplaceNetworkAclAssociationCommandOutput}
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To replace the network ACL associated with a subnet
 * ```javascript
 * // This example associates the specified network ACL with the subnet for the specified network ACL association.
 * const input = {
 *   AssociationId: "aclassoc-e5b95c8c",
 *   NetworkAclId: "acl-5fb85d36"
 * };
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NewAssociationId: "aclassoc-3999875b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ReplaceNetworkAclAssociationCommand extends $Command
  .classBuilder<
    ReplaceNetworkAclAssociationCommandInput,
    ReplaceNetworkAclAssociationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ReplaceNetworkAclAssociation", {})
  .n("EC2Client", "ReplaceNetworkAclAssociationCommand")
  .sc(ReplaceNetworkAclAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceNetworkAclAssociationRequest;
      output: ReplaceNetworkAclAssociationResult;
    };
    sdk: {
      input: ReplaceNetworkAclAssociationCommandInput;
      output: ReplaceNetworkAclAssociationCommandOutput;
    };
  };
}
