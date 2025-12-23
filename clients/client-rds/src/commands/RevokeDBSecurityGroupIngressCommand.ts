// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RevokeDBSecurityGroupIngress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeDBSecurityGroupIngressCommand}.
 */
export interface RevokeDBSecurityGroupIngressCommandInput extends RevokeDBSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link RevokeDBSecurityGroupIngressCommand}.
 */
export interface RevokeDBSecurityGroupIngressCommandOutput extends RevokeDBSecurityGroupIngressResult, __MetadataBearer {}

/**
 * <p>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required
 *             parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either
 *             EC2SecurityGroupName or EC2SecurityGroupId).</p>
 *          <note>
 *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
 *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
 *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
 *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
 *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RevokeDBSecurityGroupIngressCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RevokeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RevokeDBSecurityGroupIngressMessage
 *   DBSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupId: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new RevokeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeDBSecurityGroupIngressResult
 * //   DBSecurityGroup: { // DBSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     DBSecurityGroupName: "STRING_VALUE",
 * //     DBSecurityGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupId: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IPRanges: [ // IPRangeList
 * //       { // IPRange
 * //         Status: "STRING_VALUE",
 * //         CIDRIP: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSecurityGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeDBSecurityGroupIngressCommandInput - {@link RevokeDBSecurityGroupIngressCommandInput}
 * @returns {@link RevokeDBSecurityGroupIngressCommandOutput}
 * @see {@link RevokeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *          <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the DB security group doesn't allow deletion.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To revoke ingress for a DB security group
 * ```javascript
 * // This example revokes ingress for the specified CIDR block associated with the specified DB security group.
 * const input = {
 *   CIDRIP: "203.0.113.5/32",
 *   DBSecurityGroupName: "mydbsecuritygroup"
 * };
 * const command = new RevokeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSecurityGroup:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RevokeDBSecurityGroupIngressCommand extends $Command
  .classBuilder<
    RevokeDBSecurityGroupIngressCommandInput,
    RevokeDBSecurityGroupIngressCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "RevokeDBSecurityGroupIngress", {})
  .n("RDSClient", "RevokeDBSecurityGroupIngressCommand")
  .sc(RevokeDBSecurityGroupIngress$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeDBSecurityGroupIngressMessage;
      output: RevokeDBSecurityGroupIngressResult;
    };
    sdk: {
      input: RevokeDBSecurityGroupIngressCommandInput;
      output: RevokeDBSecurityGroupIngressCommandOutput;
    };
  };
}
