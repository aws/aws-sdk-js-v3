// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterSubnetGroupMessage } from "../models/models_0";
import { DescribeClusterSubnetGroupsMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterSubnetGroups } from "../schemas/schemas_16_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterSubnetGroupsCommand}.
 */
export interface DescribeClusterSubnetGroupsCommandInput extends DescribeClusterSubnetGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterSubnetGroupsCommand}.
 */
export interface DescribeClusterSubnetGroupsCommandOutput extends ClusterSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns one or more cluster subnet group objects, which contain metadata about your
 *             cluster subnet groups. By default, this operation returns information about all cluster
 *             subnet groups that are defined in your Amazon Web Services account.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all subnet groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
 *             any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, subnet groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSubnetGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSubnetGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterSubnetGroupsMessage
 *   ClusterSubnetGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClusterSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterSubnetGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   ClusterSubnetGroups: [ // ClusterSubnetGroups
 * //     { // ClusterSubnetGroup
 * //       ClusterSubnetGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //             SupportedPlatforms: [ // SupportedPlatformsList
 * //               { // SupportedPlatform
 * //                 Name: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedClusterIpAddressTypes: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterSubnetGroupsCommandInput - {@link DescribeClusterSubnetGroupsCommandInput}
 * @returns {@link DescribeClusterSubnetGroupsCommandOutput}
 * @see {@link DescribeClusterSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeClusterSubnetGroupsCommand extends $Command
  .classBuilder<
    DescribeClusterSubnetGroupsCommandInput,
    DescribeClusterSubnetGroupsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterSubnetGroups", {})
  .n("RedshiftClient", "DescribeClusterSubnetGroupsCommand")
  .sc(DescribeClusterSubnetGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterSubnetGroupsMessage;
      output: ClusterSubnetGroupMessage;
    };
    sdk: {
      input: DescribeClusterSubnetGroupsCommandInput;
      output: DescribeClusterSubnetGroupsCommandOutput;
    };
  };
}
