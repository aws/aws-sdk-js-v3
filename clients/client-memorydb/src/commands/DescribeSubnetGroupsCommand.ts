// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse } from "../models/models_0";
import { DescribeSubnetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubnetGroupsCommand}.
 */
export interface DescribeSubnetGroupsCommandInput extends DescribeSubnetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubnetGroupsCommand}.
 */
export interface DescribeSubnetGroupsCommandOutput extends DescribeSubnetGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeSubnetGroupsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeSubnetGroupsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeSubnetGroupsRequest
 *   SubnetGroupName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubnetGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   SubnetGroups: [ // SubnetGroupList
 * //     { // SubnetGroup
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           Identifier: "STRING_VALUE",
 * //           AvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SupportedNetworkTypes: [ // NetworkTypeList
 * //             "ipv4" || "ipv6" || "dual_stack",
 * //           ],
 * //         },
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //       SupportedNetworkTypes: [
 * //         "ipv4" || "ipv6" || "dual_stack",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSubnetGroupsCommandInput - {@link DescribeSubnetGroupsCommandInput}
 * @returns {@link DescribeSubnetGroupsCommandOutput}
 * @see {@link DescribeSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The specified subnet group does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeSubnetGroupsCommand extends $Command
  .classBuilder<
    DescribeSubnetGroupsCommandInput,
    DescribeSubnetGroupsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeSubnetGroups", {})
  .n("MemoryDBClient", "DescribeSubnetGroupsCommand")
  .sc(DescribeSubnetGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSubnetGroupsRequest;
      output: DescribeSubnetGroupsResponse;
    };
    sdk: {
      input: DescribeSubnetGroupsCommandInput;
      output: DescribeSubnetGroupsCommandOutput;
    };
  };
}
