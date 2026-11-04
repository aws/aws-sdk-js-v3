// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_0";
import { DescribeDBParameterGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandInput extends DescribeDBParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParameterGroupsCommand}.
 */
export interface DescribeDBParameterGroupsCommandOutput extends DBParameterGroupsMessage, __MetadataBearer {}

/**
 * Returns a list of `DBParameterGroup` descriptions. If a `DBParameterGroupName` is specified, the list will contain only the description of the specified DB parameter group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBParameterGroupsMessage
 *   DBParameterGroupName: "STRING_VALUE",
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
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   DBParameterGroups: [ // DBParameterGroupList
 * //     { // DBParameterGroup
 * //       DBParameterGroupName: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DBParameterGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBParameterGroupsCommandInput - {@link DescribeDBParameterGroupsCommandInput}
 * @returns {@link DescribeDBParameterGroupsCommandOutput}
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * *DBParameterGroupName* does not refer to an existing DB parameter group.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class DescribeDBParameterGroupsCommand extends command<DescribeDBParameterGroupsCommandInput, DescribeDBParameterGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDBParameterGroups",
  DescribeDBParameterGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBParameterGroupsMessage;
      output: DBParameterGroupsMessage;
    };
    sdk: {
      input: DescribeDBParameterGroupsCommandInput;
      output: DescribeDBParameterGroupsCommandOutput;
    };
  };
}
