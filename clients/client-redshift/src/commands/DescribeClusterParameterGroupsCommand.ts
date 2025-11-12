// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterParameterGroupsMessage } from "../models/models_0";
import { DescribeClusterParameterGroupsMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterParameterGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterParameterGroupsCommand}.
 */
export interface DescribeClusterParameterGroupsCommandInput extends DescribeClusterParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterParameterGroupsCommand}.
 */
export interface DescribeClusterParameterGroupsCommandOutput extends ClusterParameterGroupsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon Redshift parameter groups, including parameter groups you
 *             created and the default parameter group. For each parameter group, the response includes
 *             the parameter group name, description, and parameter group family name. You can
 *             optionally specify a name to retrieve the description of a specific parameter
 *             group.</p>
 *          <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all parameter groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all parameter groups that
 *             have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, parameter groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterParameterGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterParameterGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterParameterGroupsMessage
 *   ParameterGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   ParameterGroups: [ // ParameterGroupList
 * //     { // ClusterParameterGroup
 * //       ParameterGroupName: "STRING_VALUE",
 * //       ParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterParameterGroupsCommandInput - {@link DescribeClusterParameterGroupsCommandInput}
 * @returns {@link DescribeClusterParameterGroupsCommandOutput}
 * @see {@link DescribeClusterParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
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
export class DescribeClusterParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeClusterParameterGroupsCommandInput,
    DescribeClusterParameterGroupsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterParameterGroups", {})
  .n("RedshiftClient", "DescribeClusterParameterGroupsCommand")
  .sc(DescribeClusterParameterGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterParameterGroupsMessage;
      output: ClusterParameterGroupsMessage;
    };
    sdk: {
      input: DescribeClusterParameterGroupsCommandInput;
      output: DescribeClusterParameterGroupsCommandOutput;
    };
  };
}
