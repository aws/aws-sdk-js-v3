// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CacheSubnetGroupMessage, DescribeCacheSubnetGroupsMessage } from "../models/models_0";
import { DescribeCacheSubnetGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheSubnetGroupsCommand}.
 */
export interface DescribeCacheSubnetGroupsCommandInput extends DescribeCacheSubnetGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheSubnetGroupsCommand}.
 */
export interface DescribeCacheSubnetGroupsCommandOutput extends CacheSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of cache subnet group descriptions. If a subnet group name is
 *             specified, the list contains only the description of that group. This is applicable only
 *             when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by
 *             default. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSubnetGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheSubnetGroupsMessage
 *   CacheSubnetGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // CacheSubnetGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheSubnetGroups: [ // CacheSubnetGroups
 * //     { // CacheSubnetGroup
 * //       CacheSubnetGroupName: "STRING_VALUE",
 * //       CacheSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetOutpost: { // SubnetOutpost
 * //             SubnetOutpostArn: "STRING_VALUE",
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
 * @param DescribeCacheSubnetGroupsCommandInput - {@link DescribeCacheSubnetGroupsCommandInput}
 * @returns {@link DescribeCacheSubnetGroupsCommandOutput}
 * @see {@link DescribeCacheSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *  <p>The requested cache subnet group name does not refer to an existing cache subnet
 *             group.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeCacheSubnetGroups
 * ```javascript
 * // Describes up to 25 cache subnet groups.
 * const input = {
 *   MaxRecords: 25
 * };
 * const command = new DescribeCacheSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheSubnetGroups: [
 *     {
 *       CacheSubnetGroupDescription: "Default CacheSubnetGroup",
 *       CacheSubnetGroupName: "default",
 *       Subnets: [
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1a"
 *           },
 *           SubnetIdentifier: "subnet-1a2b3c4d"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1c"
 *           },
 *           SubnetIdentifier: "subnet-a1b2c3d4"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1e"
 *           },
 *           SubnetIdentifier: "subnet-abcd1234"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1b"
 *           },
 *           SubnetIdentifier: "subnet-1234abcd"
 *         }
 *       ],
 *       VpcId: "vpc-91280df6"
 *     }
 *   ],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCacheSubnetGroupsCommand extends $Command
  .classBuilder<
    DescribeCacheSubnetGroupsCommandInput,
    DescribeCacheSubnetGroupsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheSubnetGroups", {})
  .n("ElastiCacheClient", "DescribeCacheSubnetGroupsCommand")
  .sc(DescribeCacheSubnetGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCacheSubnetGroupsMessage;
      output: CacheSubnetGroupMessage;
    };
    sdk: {
      input: DescribeCacheSubnetGroupsCommandInput;
      output: DescribeCacheSubnetGroupsCommandOutput;
    };
  };
}
