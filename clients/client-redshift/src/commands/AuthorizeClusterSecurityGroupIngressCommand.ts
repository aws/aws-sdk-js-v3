// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressResult,
} from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeClusterSecurityGroupIngress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeClusterSecurityGroupIngressCommand}.
 */
export interface AuthorizeClusterSecurityGroupIngressCommandInput extends AuthorizeClusterSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeClusterSecurityGroupIngressCommand}.
 */
export interface AuthorizeClusterSecurityGroupIngressCommandOutput
  extends AuthorizeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 *             the application accessing your cluster is running on the Internet or an Amazon EC2
 *             instance, you can authorize inbound access to either a Classless Interdomain Routing
 *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 *             many as 20 ingress rules to an Amazon Redshift security group.</p>
 *          <p>If you authorize access to an Amazon EC2 security group, specify
 *                 <i>EC2SecurityGroupName</i> and
 *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
 *             Amazon Redshift cluster must be in the same Amazon Web Services Region. </p>
 *          <p>If you authorize access to a CIDR/IP address range, specify
 *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
 *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
 *          <p>You must also associate the security group with a cluster so that clients running
 *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
 *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // AuthorizeClusterSecurityGroupIngressMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new AuthorizeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeClusterSecurityGroupIngressResult
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
 * @param AuthorizeClusterSecurityGroupIngressCommandInput - {@link AuthorizeClusterSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeClusterSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthorizationAlreadyExistsFault} (client fault)
 *  <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
 *
 * @throws {@link AuthorizationQuotaExceededFault} (client fault)
 *  <p>The authorization quota for the cluster security group has been reached.</p>
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
export class AuthorizeClusterSecurityGroupIngressCommand extends $Command
  .classBuilder<
    AuthorizeClusterSecurityGroupIngressCommandInput,
    AuthorizeClusterSecurityGroupIngressCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "AuthorizeClusterSecurityGroupIngress", {})
  .n("RedshiftClient", "AuthorizeClusterSecurityGroupIngressCommand")
  .sc(AuthorizeClusterSecurityGroupIngress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeClusterSecurityGroupIngressMessage;
      output: AuthorizeClusterSecurityGroupIngressResult;
    };
    sdk: {
      input: AuthorizeClusterSecurityGroupIngressCommandInput;
      output: AuthorizeClusterSecurityGroupIngressCommandOutput;
    };
  };
}
