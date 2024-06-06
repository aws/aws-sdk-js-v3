// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_7";
import { de_ReplaceNetworkAclAssociationCommand, se_ReplaceNetworkAclAssociationCommand } from "../protocols/Aws_ec2";

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
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
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
 * @public
 * @example To replace the network ACL associated with a subnet
 * ```javascript
 * // This example associates the specified network ACL with the subnet for the specified network ACL association.
 * const input = {
 *   "AssociationId": "aclassoc-e5b95c8c",
 *   "NetworkAclId": "acl-5fb85d36"
 * };
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NewAssociationId": "aclassoc-3999875b"
 * }
 * *\/
 * // example id: ec2-replace-network-acl-association-1
 * ```
 *
 */
export class ReplaceNetworkAclAssociationCommand extends $Command
  .classBuilder<
    ReplaceNetworkAclAssociationCommandInput,
    ReplaceNetworkAclAssociationCommandOutput,
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
  .s("AmazonEC2", "ReplaceNetworkAclAssociation", {})
  .n("EC2Client", "ReplaceNetworkAclAssociationCommand")
  .f(void 0, void 0)
  .ser(se_ReplaceNetworkAclAssociationCommand)
  .de(de_ReplaceNetworkAclAssociationCommand)
  .build() {}
