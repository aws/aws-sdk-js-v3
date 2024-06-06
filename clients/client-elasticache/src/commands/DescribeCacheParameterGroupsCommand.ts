// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/models_0";
import { de_DescribeCacheParameterGroupsCommand, se_DescribeCacheParameterGroupsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheParameterGroupsCommand}.
 */
export interface DescribeCacheParameterGroupsCommandInput extends DescribeCacheParameterGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheParameterGroupsCommand}.
 */
export interface DescribeCacheParameterGroupsCommandOutput extends CacheParameterGroupsMessage, __MetadataBearer {}

/**
 * <p>Returns a list of cache parameter group descriptions. If a cache parameter group name
 *             is specified, the list contains only the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheParameterGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheParameterGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheParameterGroupsMessage
 *   CacheParameterGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * // { // CacheParameterGroupsMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheParameterGroups: [ // CacheParameterGroupList
 * //     { // CacheParameterGroup
 * //       CacheParameterGroupName: "STRING_VALUE",
 * //       CacheParameterGroupFamily: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsGlobal: true || false,
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheParameterGroupsCommandInput - {@link DescribeCacheParameterGroupsCommandInput}
 * @returns {@link DescribeCacheParameterGroupsCommandOutput}
 * @see {@link DescribeCacheParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *  <p>The requested cache parameter group name does not refer to an existing cache parameter
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
 * @example DescribeCacheParameterGroups
 * ```javascript
 * // Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
 * const input = {
 *   "CacheParameterGroupName": "custom-mem1-4"
 * };
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheParameterGroups": [
 *     {
 *       "CacheParameterGroupFamily": "memcached1.4",
 *       "CacheParameterGroupName": "custom-mem1-4",
 *       "Description": "Custom memcache param group"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describecacheparametergroups-1483045457557
 * ```
 *
 */
export class DescribeCacheParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeCacheParameterGroupsCommandInput,
    DescribeCacheParameterGroupsCommandOutput,
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
  .s("AmazonElastiCacheV9", "DescribeCacheParameterGroups", {})
  .n("ElastiCacheClient", "DescribeCacheParameterGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheParameterGroupsCommand)
  .de(de_DescribeCacheParameterGroupsCommand)
  .build() {}
