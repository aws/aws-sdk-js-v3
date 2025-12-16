// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type {
  DescribeMultiRegionParameterGroupsRequest,
  DescribeMultiRegionParameterGroupsResponse,
} from "../models/models_0";
import { DescribeMultiRegionParameterGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeMultiRegionParameterGroupsCommandOutput
  extends DescribeMultiRegionParameterGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of multi-region parameter groups.</p>
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
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *  <p>The specified multi-Region parameter group does not exist.</p>
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
export class DescribeMultiRegionParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeMultiRegionParameterGroupsCommandInput,
    DescribeMultiRegionParameterGroupsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeMultiRegionParameterGroups", {})
  .n("MemoryDBClient", "DescribeMultiRegionParameterGroupsCommand")
  .sc(DescribeMultiRegionParameterGroups$)
  .build() {
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
