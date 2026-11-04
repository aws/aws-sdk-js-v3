// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopyServerlessCacheSnapshotRequest, CopyServerlessCacheSnapshotResponse } from "../models/models_0";
import { CopyServerlessCacheSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CopyServerlessCacheSnapshotCommandOutput extends CopyServerlessCacheSnapshotResponse, __MetadataBearer {}

/**
 * Creates a copy of an existing serverless cache’s snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
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
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *
 * The state of the serverless cache snapshot was not received. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *
 * A serverless cache snapshot with this name already exists. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *
 * This serverless cache snapshot could not be found or does not exist. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link ServerlessCacheSnapshotQuotaExceededFault} (client fault)
 *
 * The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Valkey, Redis OSS and Serverless Memcached only.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @public
 */
export class CopyServerlessCacheSnapshotCommand extends command<CopyServerlessCacheSnapshotCommandInput, CopyServerlessCacheSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CopyServerlessCacheSnapshot",
  CopyServerlessCacheSnapshot$
) {
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
