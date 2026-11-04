// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMultiRegionParameterGroupsRequest,
  DescribeMultiRegionParameterGroupsResponse,
} from "../models/models_0";
import { DescribeMultiRegionParameterGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMultiRegionParameterGroupsCommand}.
 */
export interface DescribeMultiRegionParameterGroupsCommandInput extends DescribeMultiRegionParameterGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionParameterGroupsCommand}.
 */
export interface DescribeMultiRegionParameterGroupsCommandOutput extends DescribeMultiRegionParameterGroupsResponse, __MetadataBearer {}

/**
 * Returns a list of multi-region parameter groups.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeMultiRegionParameterGroupsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeMultiRegionParameterGroupsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeMultiRegionParameterGroupsRequest
 *   MultiRegionParameterGroupName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMultiRegionParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiRegionParameterGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MultiRegionParameterGroups: [ // MultiRegionParameterGroupList
 * //     { // MultiRegionParameterGroup
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
 * @param DescribeMultiRegionParameterGroupsCommandInput - {@link DescribeMultiRegionParameterGroupsCommandInput}
 * @returns {@link DescribeMultiRegionParameterGroupsCommandOutput}
 * @see {@link DescribeMultiRegionParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiRegionParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * The specified parameter combination is not valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The specified parameter value is not valid.
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *
 * The specified multi-Region parameter group does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The required service-linked role was not found.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class DescribeMultiRegionParameterGroupsCommand extends command<DescribeMultiRegionParameterGroupsCommandInput, DescribeMultiRegionParameterGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMultiRegionParameterGroups",
  DescribeMultiRegionParameterGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiRegionParameterGroupsRequest;
      output: DescribeMultiRegionParameterGroupsResponse;
    };
    sdk: {
      input: DescribeMultiRegionParameterGroupsCommandInput;
      output: DescribeMultiRegionParameterGroupsCommandOutput;
    };
  };
}
