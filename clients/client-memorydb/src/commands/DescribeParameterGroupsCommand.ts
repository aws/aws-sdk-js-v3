// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeParameterGroupsRequest, DescribeParameterGroupsResponse } from "../models/models_0";
import { DescribeParameterGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeParameterGroupsCommand}.
 */
export interface DescribeParameterGroupsCommandInput extends DescribeParameterGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeParameterGroupsCommand}.
 */
export interface DescribeParameterGroupsCommandOutput extends DescribeParameterGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeParameterGroupsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeParameterGroupsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeParameterGroupsRequest
 *   ParameterGroupName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeParameterGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ParameterGroups: [ // ParameterGroupList
 * //     { // ParameterGroup
 * //       Name: "STRING_VALUE",
 * //       Family: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeParameterGroupsCommandInput - {@link DescribeParameterGroupsCommandInput}
 * @returns {@link DescribeParameterGroupsCommandOutput}
 * @see {@link DescribeParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeParameterGroupsCommand extends command<DescribeParameterGroupsCommandInput, DescribeParameterGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeParameterGroups",
  DescribeParameterGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeParameterGroupsRequest;
      output: DescribeParameterGroupsResponse;
    };
    sdk: {
      input: DescribeParameterGroupsCommandInput;
      output: DescribeParameterGroupsCommandOutput;
    };
  };
}
