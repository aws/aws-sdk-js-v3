// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/models_0";
import { DescribeCacheEngineVersions } from "../schemas/schemas_20_DescribeCacheEngineVersions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandInput extends DescribeCacheEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheEngineVersionsCommand}.
 */
export interface DescribeCacheEngineVersionsCommandOutput extends CacheEngineVersionMessage, __MetadataBearer {}

/**
 * <p>Returns a list of the available cache engines and their versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheEngineVersionsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheEngineVersionsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheEngineVersionsMessage
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   CacheParameterGroupFamily: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DefaultOnly: true || false,
 * };
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // CacheEngineVersionMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheEngineVersions: [ // CacheEngineVersionList
 * //     { // CacheEngineVersion
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheParameterGroupFamily: "STRING_VALUE",
 * //       CacheEngineDescription: "STRING_VALUE",
 * //       CacheEngineVersionDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheEngineVersionsCommandInput - {@link DescribeCacheEngineVersionsCommandInput}
 * @returns {@link DescribeCacheEngineVersionsCommandOutput}
 * @see {@link DescribeCacheEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeCacheEngineVersions
 * ```javascript
 * // Lists the details for up to 25 Memcached and Redis cache engine versions.
 * const input = { /* empty *\/ };
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheEngineVersions: [
 *     {
 *       CacheEngineDescription: "memcached",
 *       CacheEngineVersionDescription: "memcached version 1.4.14",
 *       CacheParameterGroupFamily: "memcached1.4",
 *       Engine: "memcached",
 *       EngineVersion: "1.4.14"
 *     },
 *     {
 *       CacheEngineDescription: "memcached",
 *       CacheEngineVersionDescription: "memcached version 1.4.24",
 *       CacheParameterGroupFamily: "memcached1.4",
 *       Engine: "memcached",
 *       EngineVersion: "1.4.24"
 *     },
 *     {
 *       CacheEngineDescription: "memcached",
 *       CacheEngineVersionDescription: "memcached version 1.4.33",
 *       CacheParameterGroupFamily: "memcached1.4",
 *       Engine: "memcached",
 *       EngineVersion: "1.4.33"
 *     },
 *     {
 *       CacheEngineDescription: "memcached",
 *       CacheEngineVersionDescription: "memcached version 1.4.5",
 *       CacheParameterGroupFamily: "memcached1.4",
 *       Engine: "memcached",
 *       EngineVersion: "1.4.5"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.6.13",
 *       CacheParameterGroupFamily: "redis2.6",
 *       Engine: "redis",
 *       EngineVersion: "2.6.13"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.19",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.19"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.21",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.21"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.22 R5",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.22"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.23 R4",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.23"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.24 R3",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.24"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.6",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.6"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 3.2.4",
 *       CacheParameterGroupFamily: "redis3.2",
 *       Engine: "redis",
 *       EngineVersion: "3.2.4"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example DescribeCacheEngineVersions
 * ```javascript
 * // Lists the details for up to 50 Redis cache engine versions.
 * const input = {
 *   DefaultOnly: false,
 *   Engine: "redis",
 *   MaxRecords: 50
 * };
 * const command = new DescribeCacheEngineVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheEngineVersions: [
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.6.13",
 *       CacheParameterGroupFamily: "redis2.6",
 *       Engine: "redis",
 *       EngineVersion: "2.6.13"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.19",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.19"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.21",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.21"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.22 R5",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.22"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.23 R4",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.23"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.24 R3",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.24"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 2.8.6",
 *       CacheParameterGroupFamily: "redis2.8",
 *       Engine: "redis",
 *       EngineVersion: "2.8.6"
 *     },
 *     {
 *       CacheEngineDescription: "Redis",
 *       CacheEngineVersionDescription: "redis version 3.2.4",
 *       CacheParameterGroupFamily: "redis3.2",
 *       Engine: "redis",
 *       EngineVersion: "3.2.4"
 *     }
 *   ],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCacheEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeCacheEngineVersionsCommandInput,
    DescribeCacheEngineVersionsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheEngineVersions", {})
  .n("ElastiCacheClient", "DescribeCacheEngineVersionsCommand")
  .sc(DescribeCacheEngineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCacheEngineVersionsMessage;
      output: CacheEngineVersionMessage;
    };
    sdk: {
      input: DescribeCacheEngineVersionsCommandInput;
      output: DescribeCacheEngineVersionsCommandOutput;
    };
  };
}
