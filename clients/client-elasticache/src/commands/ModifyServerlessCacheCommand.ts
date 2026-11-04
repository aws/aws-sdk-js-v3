// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyServerlessCacheRequest, ModifyServerlessCacheResponse } from "../models/models_0";
import { ModifyServerlessCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyServerlessCacheCommand}.
 */
export interface ModifyServerlessCacheCommandInput extends ModifyServerlessCacheRequest {}
/**
 * @public
 *
 * The output of {@link ModifyServerlessCacheCommand}.
 */
export interface ModifyServerlessCacheCommandOutput extends ModifyServerlessCacheResponse, __MetadataBearer {}

/**
 * This API modifies the attributes of a serverless cache.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyServerlessCacheCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyServerlessCacheCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyServerlessCacheRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CacheUsageLimits: { // CacheUsageLimits
 *     DataStorage: { // DataStorage
 *       Maximum: Number("int"),
 *       Minimum: Number("int"),
 *       Unit: "GB", // required
 *     },
 *     ECPUPerSecond: { // ECPUPerSecond
 *       Maximum: Number("int"),
 *       Minimum: Number("int"),
 *     },
 *   },
 *   RemoveUserGroup: true || false,
 *   UserGroupId: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotRetentionLimit: Number("int"),
 *   DailySnapshotTime: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 * };
 * const command = new ModifyServerlessCacheCommand(input);
 * const response = await client.send(command);
 * // { // ModifyServerlessCacheResponse
 * //   ServerlessCache: { // ServerlessCache
 * //     ServerlessCacheName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     MajorEngineVersion: "STRING_VALUE",
 * //     FullEngineVersion: "STRING_VALUE",
 * //     CacheUsageLimits: { // CacheUsageLimits
 * //       DataStorage: { // DataStorage
 * //         Maximum: Number("int"),
 * //         Minimum: Number("int"),
 * //         Unit: "GB", // required
 * //       },
 * //       ECPUPerSecond: { // ECPUPerSecond
 * //         Maximum: Number("int"),
 * //         Minimum: Number("int"),
 * //       },
 * //     },
 * //     KmsKeyId: "STRING_VALUE",
 * //     StorageEncryptionType: "none" || "sse-elasticache" || "sse-kms",
 * //     SecurityGroupIds: [ // SecurityGroupIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ReaderEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ARN: "STRING_VALUE",
 * //     UserGroupId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     SnapshotRetentionLimit: Number("int"),
 * //     DailySnapshotTime: "STRING_VALUE",
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     ConnectionType: "vpc" || "public",
 * //     Migration: { // MigrationSummary
 * //       Status: "STRING_VALUE",
 * //       MigrationEndpoint: {
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       CutoverMode: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyServerlessCacheCommandInput - {@link ModifyServerlessCacheCommandInput}
 * @returns {@link ModifyServerlessCacheCommandOutput}
 * @see {@link ModifyServerlessCacheCommandInput} for command's `input` shape.
 * @see {@link ModifyServerlessCacheCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *
 * You must enter valid credentials.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *
 * The account for these credentials is not currently active.
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *
 * The user group is not in an active state.
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *
 * The serverless cache was not found or does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *
 * The user group was not found or does not exist
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @public
 */
export class ModifyServerlessCacheCommand extends command<ModifyServerlessCacheCommandInput, ModifyServerlessCacheCommandOutput>(
  _ep0,
  _mw0,
  "ModifyServerlessCache",
  ModifyServerlessCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyServerlessCacheRequest;
      output: ModifyServerlessCacheResponse;
    };
    sdk: {
      input: ModifyServerlessCacheCommandInput;
      output: ModifyServerlessCacheCommandOutput;
    };
  };
}
