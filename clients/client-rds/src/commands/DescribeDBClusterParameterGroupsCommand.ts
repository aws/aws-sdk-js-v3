// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBClusterParameterGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterParameterGroupsCommand}.
 */
export interface DescribeDBClusterParameterGroupsCommandInput extends DescribeDBClusterParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterParameterGroupsCommand}.
 */
export interface DescribeDBClusterParameterGroupsCommandOutput
  extends DBClusterParameterGroupsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
 *             <code>DBClusterParameterGroupName</code> parameter is specified,
 *             the list will contain only the description of the specified DB cluster parameter group.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterParameterGroupsMessage
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterParameterGroups: [ // DBClusterParameterGroupList
 * //     { // DBClusterParameterGroup
 * //       DBClusterParameterGroupName: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DBClusterParameterGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterParameterGroupsCommandInput - {@link DescribeDBClusterParameterGroupsCommandInput}
 * @returns {@link DescribeDBClusterParameterGroupsCommandOutput}
 * @see {@link DescribeDBClusterParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe DB cluster parameter groups
 * ```javascript
 * // The following example retrieves details for your DB cluster parameter groups.
 * const input = { /* empty *\/ };
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroups: [
 *     {
 *       DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora-mysql5.7",
 *       DBClusterParameterGroupName: "default.aurora-mysql5.7",
 *       DBParameterGroupFamily: "aurora-mysql5.7",
 *       Description: "Default cluster parameter group for aurora-mysql5.7"
 *     },
 *     {
 *       DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora-postgresql9.6",
 *       DBClusterParameterGroupName: "default.aurora-postgresql9.6",
 *       DBParameterGroupFamily: "aurora-postgresql9.6",
 *       Description: "Default cluster parameter group for aurora-postgresql9.6"
 *     },
 *     {
 *       DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:default.aurora5.6",
 *       DBClusterParameterGroupName: "default.aurora5.6",
 *       DBParameterGroupFamily: "aurora5.6",
 *       Description: "Default cluster parameter group for aurora5.6"
 *     },
 *     {
 *       DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterpg",
 *       DBClusterParameterGroupName: "mydbclusterpg",
 *       DBParameterGroupFamily: "aurora-mysql5.7",
 *       Description: "My DB cluster parameter group"
 *     },
 *     {
 *       DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterpgcopy",
 *       DBClusterParameterGroupName: "mydbclusterpgcopy",
 *       DBParameterGroupFamily: "aurora-mysql5.7",
 *       Description: "Copy of mydbclusterpg parameter group"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBClusterParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeDBClusterParameterGroupsCommandInput,
    DescribeDBClusterParameterGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusterParameterGroups", {})
  .n("RDSClient", "DescribeDBClusterParameterGroupsCommand")
  .sc(DescribeDBClusterParameterGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterParameterGroupsMessage;
      output: DBClusterParameterGroupsMessage;
    };
    sdk: {
      input: DescribeDBClusterParameterGroupsCommandInput;
      output: DescribeDBClusterParameterGroupsCommandOutput;
    };
  };
}
