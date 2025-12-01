// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDBShardGroupsMessage, DescribeDBShardGroupsResponse } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBShardGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBShardGroupsCommand}.
 */
export interface DescribeDBShardGroupsCommandInput extends DescribeDBShardGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBShardGroupsCommand}.
 */
export interface DescribeDBShardGroupsCommandOutput extends DescribeDBShardGroupsResponse, __MetadataBearer {}

/**
 * <p>Describes existing Aurora Limitless Database DB shard groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBShardGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBShardGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBShardGroupsMessage
 *   DBShardGroupIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeDBShardGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBShardGroupsResponse
 * //   DBShardGroups: [ // DBShardGroupsList
 * //     { // DBShardGroup
 * //       DBShardGroupResourceId: "STRING_VALUE",
 * //       DBShardGroupIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       MaxACU: Number("double"),
 * //       MinACU: Number("double"),
 * //       ComputeRedundancy: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       Endpoint: "STRING_VALUE",
 * //       DBShardGroupArn: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBShardGroupsCommandInput - {@link DescribeDBShardGroupsCommandInput}
 * @returns {@link DescribeDBShardGroupsCommandOutput}
 * @see {@link DescribeDBShardGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBShardGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBShardGroupNotFoundFault} (client fault)
 *  <p>The specified DB shard group name wasn't found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeDBShardGroupsCommand extends $Command
  .classBuilder<
    DescribeDBShardGroupsCommandInput,
    DescribeDBShardGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBShardGroups", {})
  .n("RDSClient", "DescribeDBShardGroupsCommand")
  .sc(DescribeDBShardGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBShardGroupsMessage;
      output: DescribeDBShardGroupsResponse;
    };
    sdk: {
      input: DescribeDBShardGroupsCommandInput;
      output: DescribeDBShardGroupsCommandOutput;
    };
  };
}
