// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServerlessCacheRequest, CreateServerlessCacheResponse } from "../models/models_0";
import { CreateServerlessCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServerlessCacheCommand}.
 */
export interface CreateServerlessCacheCommandInput extends CreateServerlessCacheRequest {}
/**
 * @public
 *
 * The output of {@link CreateServerlessCacheCommand}.
 */
export interface CreateServerlessCacheCommandOutput extends CreateServerlessCacheResponse, __MetadataBearer {}

/**
 * Creates a serverless cache.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateServerlessCacheCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateServerlessCacheCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateServerlessCacheRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE",
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
 *   KmsKeyId: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotArnsToRestore: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   UserGroupId: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotRetentionLimit: Number("int"),
 *   DailySnapshotTime: "STRING_VALUE",
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 *   ConnectionType: "vpc" || "public",
 * };
 * const command = new CreateServerlessCacheCommand(input);
 * const response = await client.send(command);
 * // { // CreateServerlessCacheResponse
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
 * @param CreateServerlessCacheCommandInput - {@link CreateServerlessCacheCommandInput}
 * @returns {@link CreateServerlessCacheCommandOutput}
 * @see {@link CreateServerlessCacheCommandInput} for command's `input` shape.
 * @see {@link CreateServerlessCacheCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerlessCacheAlreadyExistsFault} (client fault)
 *
 * A serverless cache with this name already exists.
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *
 * The serverless cache was not found or does not exist.
 *
 * @throws {@link ServerlessCacheQuotaForCustomerExceededFault} (client fault)
 *
 * The number of serverless caches exceeds the customer quota.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
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
export class CreateServerlessCacheCommand extends command<CreateServerlessCacheCommandInput, CreateServerlessCacheCommandOutput>(
  _ep0,
  _mw0,
  "CreateServerlessCache",
  CreateServerlessCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServerlessCacheRequest;
      output: CreateServerlessCacheResponse;
    };
    sdk: {
      input: CreateServerlessCacheCommandInput;
      output: CreateServerlessCacheCommandOutput;
    };
  };
}
