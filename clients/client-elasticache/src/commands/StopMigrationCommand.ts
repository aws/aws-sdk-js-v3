// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopMigrationRequest, StopMigrationResponse } from "../models/models_0";
import { StopMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopMigrationCommand}.
 */
export interface StopMigrationCommandInput extends StopMigrationRequest {}
/**
 * @public
 *
 * The output of {@link StopMigrationCommand}.
 */
export interface StopMigrationCommandOutput extends StopMigrationResponse, __MetadataBearer {}

/**
 * <p>Stops an ongoing data sync between the source and the serverless cache. The migration remains
 *             open and the data sync can be restarted. This operation is valid only while the migration is
 *             syncing; during cutover it returns
 *             <code>InvalidServerlessCacheStateFault</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, StopMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, StopMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // StopMigrationRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 * };
 * const command = new StopMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StopMigrationResponse
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
 * @param StopMigrationCommandInput - {@link StopMigrationCommandInput}
 * @returns {@link StopMigrationCommandOutput}
 * @see {@link StopMigrationCommandInput} for command's `input` shape.
 * @see {@link StopMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *  <p>The account for these credentials is not currently active.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheNotUnderMigrationFault} (client fault)
 *  <p>The serverless cache is not currently under migration.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class StopMigrationCommand extends command<StopMigrationCommandInput, StopMigrationCommandOutput>(
  _ep0,
  _mw0,
  "StopMigration",
  StopMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMigrationRequest;
      output: StopMigrationResponse;
    };
    sdk: {
      input: StopMigrationCommandInput;
      output: StopMigrationCommandOutput;
    };
  };
}
