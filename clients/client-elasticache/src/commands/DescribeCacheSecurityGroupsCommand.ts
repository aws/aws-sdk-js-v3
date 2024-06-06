// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheSecurityGroupMessage, DescribeCacheSecurityGroupsMessage } from "../models/models_0";
import { de_DescribeCacheSecurityGroupsCommand, se_DescribeCacheSecurityGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheSecurityGroupsCommand}.
 */
export interface DescribeCacheSecurityGroupsCommandInput extends DescribeCacheSecurityGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheSecurityGroupsCommand}.
 */
export interface DescribeCacheSecurityGroupsCommandOutput extends CacheSecurityGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of cache security group descriptions. If a cache security group name is
 *             specified, the list contains only the description of that group. This applicable only
 *             when you have ElastiCache in Classic setup </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheSecurityGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheSecurityGroupsMessage
 *   CacheSecurityGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // CacheSecurityGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheSecurityGroups: [ // CacheSecurityGroups
 * //     { // CacheSecurityGroup
 * //       OwnerId: "STRING_VALUE",
 * //       CacheSecurityGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EC2SecurityGroups: [ // EC2SecurityGroupList
 * //         { // EC2SecurityGroup
 * //           Status: "STRING_VALUE",
 * //           EC2SecurityGroupName: "STRING_VALUE",
 * //           EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheSecurityGroupsCommandInput - {@link DescribeCacheSecurityGroupsCommandInput}
 * @returns {@link DescribeCacheSecurityGroupsCommandOutput}
 * @see {@link DescribeCacheSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *  <p>The requested cache security group name does not refer to an existing cache security
 *             group.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @public
 * @example DescribeCacheSecurityGroups
 * ```javascript
 * // Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group.
 * const input = {
 *   "CacheSecurityGroupName": "my-sec-group"
 * };
 * const command = new DescribeCacheSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: describecachesecuritygroups-1483047200801
 * ```
 *
 */
export class DescribeCacheSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeCacheSecurityGroupsCommandInput,
    DescribeCacheSecurityGroupsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheSecurityGroups", {})
  .n("ElastiCacheClient", "DescribeCacheSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheSecurityGroupsCommand)
  .de(de_DescribeCacheSecurityGroupsCommand)
  .build() {}
