// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RevokeClusterSecurityGroupIngressMessage,
  RevokeClusterSecurityGroupIngressResult,
} from "../models/models_1";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeClusterSecurityGroupIngress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeClusterSecurityGroupIngressCommand}.
 */
export interface RevokeClusterSecurityGroupIngressCommandInput extends RevokeClusterSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link RevokeClusterSecurityGroupIngressCommand}.
 */
export interface RevokeClusterSecurityGroupIngressCommandOutput
  extends RevokeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // RevokeClusterSecurityGroupIngressMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new RevokeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeClusterSecurityGroupIngressResult
 * //   ClusterSecurityGroup: { // ClusterSecurityGroup
 * //     ClusterSecurityGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     IPRanges: [ // IPRangeList
 * //       { // IPRange
 * //         Status: "STRING_VALUE",
 * //         CIDRIP: "STRING_VALUE",
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeClusterSecurityGroupIngressCommandInput - {@link RevokeClusterSecurityGroupIngressCommandInput}
 * @returns {@link RevokeClusterSecurityGroupIngressCommandOutput}
 * @see {@link RevokeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class RevokeClusterSecurityGroupIngressCommand extends $Command
  .classBuilder<
    RevokeClusterSecurityGroupIngressCommandInput,
    RevokeClusterSecurityGroupIngressCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "RevokeClusterSecurityGroupIngress", {})
  .n("RedshiftClient", "RevokeClusterSecurityGroupIngressCommand")
  .sc(RevokeClusterSecurityGroupIngress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeClusterSecurityGroupIngressMessage;
      output: RevokeClusterSecurityGroupIngressResult;
    };
    sdk: {
      input: RevokeClusterSecurityGroupIngressCommandInput;
      output: RevokeClusterSecurityGroupIngressCommandOutput;
    };
  };
}
