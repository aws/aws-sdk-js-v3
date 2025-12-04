// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CacheParameterGroupsMessage, DescribeCacheParameterGroupsMessage } from "../models/models_0";
import { DescribeCacheParameterGroups } from "../schemas/schemas_0";

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
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
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
 *
 * @example DescribeCacheParameterGroups
 * ```javascript
 * // Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
 * const input = {
 *   CacheParameterGroupName: "custom-mem1-4"
 * };
 * const command = new DescribeCacheParameterGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheParameterGroups: [
 *     {
 *       CacheParameterGroupFamily: "memcached1.4",
 *       CacheParameterGroupName: "custom-mem1-4",
 *       Description: "Custom memcache param group"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCacheParameterGroupsCommand extends $Command
  .classBuilder<
    DescribeCacheParameterGroupsCommandInput,
    DescribeCacheParameterGroupsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheParameterGroups", {})
  .n("ElastiCacheClient", "DescribeCacheParameterGroupsCommand")
  .sc(DescribeCacheParameterGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCacheParameterGroupsMessage;
      output: CacheParameterGroupsMessage;
    };
    sdk: {
      input: DescribeCacheParameterGroupsCommandInput;
      output: DescribeCacheParameterGroupsCommandOutput;
    };
  };
}
