// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyServerlessCacheSnapshotRequest, CopyServerlessCacheSnapshotResponse } from "../models/models_0";
import { de_CopyServerlessCacheSnapshotCommand, se_CopyServerlessCacheSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyServerlessCacheSnapshotCommand}.
 */
export interface CopyServerlessCacheSnapshotCommandInput extends CopyServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CopyServerlessCacheSnapshotCommand}.
 */
export interface CopyServerlessCacheSnapshotCommandOutput
  extends CopyServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>Creates a copy of an existing serverless cache’s snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopyServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopyServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CopyServerlessCacheSnapshotRequest
 *   SourceServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   TargetServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyServerlessCacheSnapshotResponse
 * //   ServerlessCacheSnapshot: { // ServerlessCacheSnapshot
 * //     ServerlessCacheSnapshotName: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ExpiryTime: new Date("TIMESTAMP"),
 * //     BytesUsedForCache: "STRING_VALUE",
 * //     ServerlessCacheConfiguration: { // ServerlessCacheConfiguration
 * //       ServerlessCacheName: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyServerlessCacheSnapshotCommandInput - {@link CopyServerlessCacheSnapshotCommandInput}
 * @returns {@link CopyServerlessCacheSnapshotCommandOutput}
 * @see {@link CopyServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *  <p>The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *  <p>A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotQuotaExceededFault} (client fault)
 *  <p>The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Valkey, Redis OSS and Serverless Memcached only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class CopyServerlessCacheSnapshotCommand extends $Command
  .classBuilder<
    CopyServerlessCacheSnapshotCommandInput,
    CopyServerlessCacheSnapshotCommandOutput,
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
  .s("AmazonElastiCacheV9", "CopyServerlessCacheSnapshot", {})
  .n("ElastiCacheClient", "CopyServerlessCacheSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CopyServerlessCacheSnapshotCommand)
  .de(de_CopyServerlessCacheSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyServerlessCacheSnapshotRequest;
      output: CopyServerlessCacheSnapshotResponse;
    };
    sdk: {
      input: CopyServerlessCacheSnapshotCommandInput;
      output: CopyServerlessCacheSnapshotCommandOutput;
    };
  };
}
