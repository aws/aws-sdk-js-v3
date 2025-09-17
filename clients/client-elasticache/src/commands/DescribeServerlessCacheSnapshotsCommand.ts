// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServerlessCacheSnapshotsRequest, DescribeServerlessCacheSnapshotsResponse } from "../models/models_0";
import {
  de_DescribeServerlessCacheSnapshotsCommand,
  se_DescribeServerlessCacheSnapshotsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerlessCacheSnapshotsCommand}.
 */
export interface DescribeServerlessCacheSnapshotsCommandInput extends DescribeServerlessCacheSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessCacheSnapshotsCommand}.
 */
export interface DescribeServerlessCacheSnapshotsCommandOutput
  extends DescribeServerlessCacheSnapshotsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about serverless cache snapshots.
 *            By default, this API lists all of the customer’s serverless cache snapshots.
 *            It can also describe a single serverless cache snapshot, or the snapshots associated with
 *            a particular serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServerlessCacheSnapshotsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServerlessCacheSnapshotsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeServerlessCacheSnapshotsRequest
 *   ServerlessCacheName: "STRING_VALUE",
 *   ServerlessCacheSnapshotName: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeServerlessCacheSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServerlessCacheSnapshotsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerlessCacheSnapshots: [ // ServerlessCacheSnapshotList
 * //     { // ServerlessCacheSnapshot
 * //       ServerlessCacheSnapshotName: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       ExpiryTime: new Date("TIMESTAMP"),
 * //       BytesUsedForCache: "STRING_VALUE",
 * //       ServerlessCacheConfiguration: { // ServerlessCacheConfiguration
 * //         ServerlessCacheName: "STRING_VALUE",
 * //         Engine: "STRING_VALUE",
 * //         MajorEngineVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessCacheSnapshotsCommandInput - {@link DescribeServerlessCacheSnapshotsCommandInput}
 * @returns {@link DescribeServerlessCacheSnapshotsCommandOutput}
 * @see {@link DescribeServerlessCacheSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessCacheSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class DescribeServerlessCacheSnapshotsCommand extends $Command
  .classBuilder<
    DescribeServerlessCacheSnapshotsCommandInput,
    DescribeServerlessCacheSnapshotsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DescribeServerlessCacheSnapshots", {})
  .n("ElastiCacheClient", "DescribeServerlessCacheSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServerlessCacheSnapshotsCommand)
  .de(de_DescribeServerlessCacheSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServerlessCacheSnapshotsRequest;
      output: DescribeServerlessCacheSnapshotsResponse;
    };
    sdk: {
      input: DescribeServerlessCacheSnapshotsCommandInput;
      output: DescribeServerlessCacheSnapshotsCommandOutput;
    };
  };
}
