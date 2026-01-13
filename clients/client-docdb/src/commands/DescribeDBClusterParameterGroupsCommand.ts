// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/models_0";
import { DescribeDBClusterParameterGroups$ } from "../schemas/schemas_0";

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
export interface DescribeDBClusterParameterGroupsCommandOutput extends DBClusterParameterGroupsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParameterGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParameterGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeDBClusterParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeDBClusterParameterGroupsCommandInput,
    DescribeDBClusterParameterGroupsCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusterParameterGroups", {})
  .n("DocDBClient", "DescribeDBClusterParameterGroupsCommand")
  .sc(DescribeDBClusterParameterGroups$)
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
