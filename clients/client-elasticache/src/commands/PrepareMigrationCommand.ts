// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PrepareMigrationRequest, PrepareMigrationResponse } from "../models/models_0";
import { PrepareMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PrepareMigrationCommand}.
 */
export interface PrepareMigrationCommandInput extends PrepareMigrationRequest {}
/**
 * @public
 *
 * The output of {@link PrepareMigrationCommand}.
 */
export interface PrepareMigrationCommandOutput extends PrepareMigrationResponse, __MetadataBearer {}

/**
 * <p>Prepares the serverless cache for data migration by validating the configuration and setting up the migration resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, PrepareMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, PrepareMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // PrepareMigrationRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   CustomerNodeEndpointList: [ // CustomerNodeEndpointList // required
 *     { // CustomerNodeEndpoint
 *       Address: "STRING_VALUE",
 *       Port: Number("int"),
 *     },
 *   ],
 *   SourceAuthenticationConfiguration: { // SourceAuthenticationConfiguration
 *     SecretManagerConfig: { // SecretManagerAuthConfig
 *       SecretArn: "STRING_VALUE",
 *     },
 *   },
 *   SourceTlsConfiguration: { // SourceTlsConfiguration
 *     SourceTlsMode: "none" || "verify-ca",
 *     SourceTlsCertificate: "STRING_VALUE",
 *   },
 * };
 * const command = new PrepareMigrationCommand(input);
 * const response = await client.send(command);
 * // { // PrepareMigrationResponse
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
 * @param PrepareMigrationCommandInput - {@link PrepareMigrationCommandInput}
 * @returns {@link PrepareMigrationCommandOutput}
 * @see {@link PrepareMigrationCommandInput} for command's `input` shape.
 * @see {@link PrepareMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *  <p>The account for these credentials is not currently active.</p>
 *
 * @throws {@link ServerlessCacheAlreadyUnderMigrationFault} (client fault)
 *  <p>A migration is already in progress for this serverless cache. You cannot start another migration until the current one completes.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class PrepareMigrationCommand extends command<PrepareMigrationCommandInput, PrepareMigrationCommandOutput>(
  _ep0,
  _mw0,
  "PrepareMigration",
  PrepareMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PrepareMigrationRequest;
      output: PrepareMigrationResponse;
    };
    sdk: {
      input: PrepareMigrationCommandInput;
      output: PrepareMigrationCommandOutput;
    };
  };
}
