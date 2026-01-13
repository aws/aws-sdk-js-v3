// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyClusterSubnetGroupMessage, ModifyClusterSubnetGroupResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterSubnetGroupCommand}.
 */
export interface ModifyClusterSubnetGroupCommandInput extends ModifyClusterSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterSubnetGroupCommand}.
 */
export interface ModifyClusterSubnetGroupCommandOutput extends ModifyClusterSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Modifies a cluster subnet group to include the specified list of VPC subnets. The
 *             operation replaces the existing list of subnets with the new list of subnets.</p>
 *          <p>VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that
 *             you own in a Region from reaching or being reached from the internet through internet
 *             gateways and egress-only internet gateways. If a subnet group for a
 *             provisioned cluster is in an account with VPC BPA turned on, the following capabilities
 *             are blocked:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a public cluster</p>
 *             </li>
 *             <li>
 *                <p>Restoring a public cluster</p>
 *             </li>
 *             <li>
 *                <p>Modifying a private cluster to be public</p>
 *             </li>
 *             <li>
 *                <p>Adding a subnet with VPC BPA turned on to the subnet group when there's at
 *                     least one public cluster within the group</p>
 *             </li>
 *          </ul>
 *          <p>For more information about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and
 *             subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterSubnetGroupMessage
 *   ClusterSubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterSubnetGroupResult
 * //   ClusterSubnetGroup: { // ClusterSubnetGroup
 * //     ClusterSubnetGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //           SupportedPlatforms: [ // SupportedPlatformsList
 * //             { // SupportedPlatform
 * //               Name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedClusterIpAddressTypes: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyClusterSubnetGroupCommandInput - {@link ModifyClusterSubnetGroupCommandInput}
 * @returns {@link ModifyClusterSubnetGroupCommandOutput}
 * @see {@link ModifyClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link ClusterSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>A specified subnet is already in use by another cluster.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyClusterSubnetGroupCommand extends $Command
  .classBuilder<
    ModifyClusterSubnetGroupCommandInput,
    ModifyClusterSubnetGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyClusterSubnetGroup", {})
  .n("RedshiftClient", "ModifyClusterSubnetGroupCommand")
  .sc(ModifyClusterSubnetGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterSubnetGroupMessage;
      output: ModifyClusterSubnetGroupResult;
    };
    sdk: {
      input: ModifyClusterSubnetGroupCommandInput;
      output: ModifyClusterSubnetGroupCommandOutput;
    };
  };
}
