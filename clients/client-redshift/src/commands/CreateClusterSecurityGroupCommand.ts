// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterSecurityGroupMessage, CreateClusterSecurityGroupResult } from "../models/models_0";
import { CreateClusterSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterSecurityGroupCommand}.
 */
export interface CreateClusterSecurityGroupCommandInput extends CreateClusterSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateClusterSecurityGroupCommand}.
 */
export interface CreateClusterSecurityGroupCommandOutput extends CreateClusterSecurityGroupResult, __MetadataBearer {}

/**
 * Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.
 *
 * For information about managing security groups, go to [Amazon Redshift Cluster Security Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterSecurityGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterSecurityGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateClusterSecurityGroupMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateClusterSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterSecurityGroupResult
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
 * @param CreateClusterSecurityGroupCommandInput - {@link CreateClusterSecurityGroupCommandInput}
 * @returns {@link CreateClusterSecurityGroupCommandOutput}
 * @see {@link CreateClusterSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSecurityGroupAlreadyExistsFault} (client fault)
 *
 * A cluster security group with the same name already exists.
 *
 * @throws {@link ClusterSecurityGroupQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of cluster security groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateClusterSecurityGroupCommand extends command<CreateClusterSecurityGroupCommandInput, CreateClusterSecurityGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateClusterSecurityGroup",
  CreateClusterSecurityGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterSecurityGroupMessage;
      output: CreateClusterSecurityGroupResult;
    };
    sdk: {
      input: CreateClusterSecurityGroupCommandInput;
      output: CreateClusterSecurityGroupCommandOutput;
    };
  };
}
