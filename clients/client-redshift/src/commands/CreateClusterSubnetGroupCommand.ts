// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSubnetGroup } from "../schemas/schemas_4_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterSubnetGroupCommand}.
 */
export interface CreateClusterSubnetGroupCommandInput extends CreateClusterSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateClusterSubnetGroupCommand}.
 */
export interface CreateClusterSubnetGroupCommandOutput extends CreateClusterSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Redshift subnet group. You must provide a list of one or more
 *             subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating
 *             Amazon Redshift subnet group.</p>
 *          <p>
 * For information about subnet groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html">Amazon Redshift Cluster Subnet Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateClusterSubnetGroupMessage
 *   ClusterSubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterSubnetGroupResult
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
 * @param CreateClusterSubnetGroupCommandInput - {@link CreateClusterSubnetGroupCommandInput}
 * @returns {@link CreateClusterSubnetGroupCommandOutput}
 * @see {@link CreateClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupAlreadyExistsFault} (client fault)
 *  <p>A <i>ClusterSubnetGroupName</i> is already used by an existing
 *             cluster subnet group. </p>
 *
 * @throws {@link ClusterSubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in user exceeding the allowed number of cluster subnet
 *             groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
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
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
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
export class CreateClusterSubnetGroupCommand extends $Command
  .classBuilder<
    CreateClusterSubnetGroupCommandInput,
    CreateClusterSubnetGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateClusterSubnetGroup", {})
  .n("RedshiftClient", "CreateClusterSubnetGroupCommand")
  .sc(CreateClusterSubnetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterSubnetGroupMessage;
      output: CreateClusterSubnetGroupResult;
    };
    sdk: {
      input: CreateClusterSubnetGroupCommandInput;
      output: CreateClusterSubnetGroupCommandOutput;
    };
  };
}
