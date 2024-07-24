// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheEngineVersionMessage, DescribeCacheEngineVersionsMessage } from "../models/models_0";
import { de_DescribeCacheEngineVersionsCommand, se_DescribeCacheEngineVersionsCommand } from "../protocols/Aws_query";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheEngineVersions", {})
  .n("ElastiCacheClient", "DescribeCacheEngineVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheEngineVersionsCommand)
  .de(de_DescribeCacheEngineVersionsCommand)
  .build() {}
