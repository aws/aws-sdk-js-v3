// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterSubnetGroupMessage, CreateClusterSubnetGroupResult } from "../models/models_0";
import { CreateClusterSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.
 *
 * For information about subnet groups, go to [Amazon Redshift Cluster Subnet Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html) in the *Amazon Redshift Cluster Management Guide*.
 *
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
 *
 * A *ClusterSubnetGroupName* is already used by an existing cluster subnet group.
 *
 * @throws {@link ClusterSubnetGroupQuotaExceededFault} (client fault)
 *
 * The request would result in user exceeding the allowed number of cluster subnet groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link ClusterSubnetQuotaExceededFault} (client fault)
 *
 * The request would result in user exceeding the allowed number of subnets in a cluster subnet groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is not valid, or not all of the subnets are in the same VPC.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *
 * Your account is not authorized to perform the requested operation.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateClusterSubnetGroupCommand extends command<CreateClusterSubnetGroupCommandInput, CreateClusterSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateClusterSubnetGroup",
  CreateClusterSubnetGroup$
) {
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
