// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDbParameterGroupInput, CreateDbParameterGroupOutput } from "../models/models_0";
import { CreateDbParameterGroup } from "../schemas/schemas_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamInfluxDBClientResolvedConfig,
} from "../TimestreamInfluxDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDbParameterGroupCommand}.
 */
export interface CreateDbParameterGroupCommandInput extends CreateDbParameterGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateDbParameterGroupCommand}.
 */
export interface CreateDbParameterGroupCommandOutput extends CreateDbParameterGroupOutput, __MetadataBearer {}

/**
 * <p>Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, CreateDbParameterGroupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, CreateDbParameterGroupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // CreateDbParameterGroupInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   parameters: { // Parameters Union: only one key present
 *     InfluxDBv2: { // InfluxDBv2Parameters
 *       fluxLogEnabled: true || false,
 *       logLevel: "debug" || "info" || "error",
 *       noTasks: true || false,
 *       queryConcurrency: Number("int"),
 *       queryQueueSize: Number("int"),
 *       tracingType: "log" || "jaeger" || "disabled",
 *       metricsDisabled: true || false,
 *       httpIdleTimeout: { // Duration
 *         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 *         value: Number("long"), // required
 *       },
 *       httpReadHeaderTimeout: {
 *         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 *         value: Number("long"), // required
 *       },
 *       httpReadTimeout: {
 *         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 *         value: Number("long"), // required
 *       },
 *       httpWriteTimeout: {
 *         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 *         value: Number("long"), // required
 *       },
 *       influxqlMaxSelectBuckets: Number("long"),
 *       influxqlMaxSelectPoint: Number("long"),
 *       influxqlMaxSelectSeries: Number("long"),
 *       pprofDisabled: true || false,
 *       queryInitialMemoryBytes: Number("long"),
 *       queryMaxMemoryBytes: Number("long"),
 *       queryMemoryBytes: Number("long"),
 *       sessionLength: Number("int"),
 *       sessionRenewDisabled: true || false,
 *       storageCacheMaxMemorySize: Number("long"),
 *       storageCacheSnapshotMemorySize: Number("long"),
 *       storageCacheSnapshotWriteColdDuration: {
 *         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 *         value: Number("long"), // required
 *       },
 *       storageCompactFullWriteColdDuration: "<Duration>",
 *       storageCompactThroughputBurst: Number("long"),
 *       storageMaxConcurrentCompactions: Number("int"),
 *       storageMaxIndexLogFileSize: Number("long"),
 *       storageNoValidateFieldSize: true || false,
 *       storageRetentionCheckInterval: "<Duration>",
 *       storageSeriesFileMaxConcurrentSnapshotCompactions: Number("int"),
 *       storageSeriesIdSetCacheSize: Number("long"),
 *       storageWalMaxConcurrentWrites: Number("int"),
 *       storageWalMaxWriteDelay: "<Duration>",
 *       uiDisabled: true || false,
 *     },
 *     InfluxDBv3Core: { // InfluxDBv3CoreParameters
 *       queryFileLimit: Number("int"),
 *       queryLogSize: Number("int"),
 *       logFilter: "STRING_VALUE",
 *       logFormat: "full",
 *       dataFusionNumThreads: Number("int"),
 *       dataFusionRuntimeType: "multi-thread" || "multi-thread-alt",
 *       dataFusionRuntimeDisableLifoSlot: true || false,
 *       dataFusionRuntimeEventInterval: Number("int"),
 *       dataFusionRuntimeGlobalQueueInterval: Number("int"),
 *       dataFusionRuntimeMaxBlockingThreads: Number("int"),
 *       dataFusionRuntimeMaxIoEventsPerTick: Number("int"),
 *       dataFusionRuntimeThreadKeepAlive: "<Duration>",
 *       dataFusionRuntimeThreadPriority: Number("int"),
 *       dataFusionMaxParquetFanout: Number("int"),
 *       dataFusionUseCachedParquetLoader: true || false,
 *       dataFusionConfig: "STRING_VALUE",
 *       maxHttpRequestSize: Number("long"),
 *       forceSnapshotMemThreshold: { // PercentOrAbsoluteLong Union: only one key present
 *         percent: "STRING_VALUE",
 *         absolute: Number("long"),
 *       },
 *       walSnapshotSize: Number("int"),
 *       walMaxWriteBufferSize: Number("int"),
 *       snapshottedWalFilesToKeep: Number("int"),
 *       preemptiveCacheAge: "<Duration>",
 *       parquetMemCachePrunePercentage: Number("float"),
 *       parquetMemCachePruneInterval: "<Duration>",
 *       disableParquetMemCache: true || false,
 *       parquetMemCacheQueryPathDuration: "<Duration>",
 *       lastCacheEvictionInterval: "<Duration>",
 *       distinctCacheEvictionInterval: "<Duration>",
 *       gen1Duration: "<Duration>",
 *       execMemPoolBytes: {//  Union: only one key present
 *         percent: "STRING_VALUE",
 *         absolute: Number("long"),
 *       },
 *       parquetMemCacheSize: {//  Union: only one key present
 *         percent: "STRING_VALUE",
 *         absolute: Number("long"),
 *       },
 *       walReplayFailOnError: true || false,
 *       walReplayConcurrencyLimit: Number("int"),
 *       tableIndexCacheMaxEntries: Number("int"),
 *       tableIndexCacheConcurrencyLimit: Number("int"),
 *       gen1LookbackDuration: "<Duration>",
 *       retentionCheckInterval: "<Duration>",
 *       deleteGracePeriod: "<Duration>",
 *       hardDeleteDefaultDuration: "<Duration>",
 *     },
 *     InfluxDBv3Enterprise: { // InfluxDBv3EnterpriseParameters
 *       queryFileLimit: Number("int"),
 *       queryLogSize: Number("int"),
 *       logFilter: "STRING_VALUE",
 *       logFormat: "full",
 *       dataFusionNumThreads: Number("int"),
 *       dataFusionRuntimeType: "multi-thread" || "multi-thread-alt",
 *       dataFusionRuntimeDisableLifoSlot: true || false,
 *       dataFusionRuntimeEventInterval: Number("int"),
 *       dataFusionRuntimeGlobalQueueInterval: Number("int"),
 *       dataFusionRuntimeMaxBlockingThreads: Number("int"),
 *       dataFusionRuntimeMaxIoEventsPerTick: Number("int"),
 *       dataFusionRuntimeThreadKeepAlive: "<Duration>",
 *       dataFusionRuntimeThreadPriority: Number("int"),
 *       dataFusionMaxParquetFanout: Number("int"),
 *       dataFusionUseCachedParquetLoader: true || false,
 *       dataFusionConfig: "STRING_VALUE",
 *       maxHttpRequestSize: Number("long"),
 *       forceSnapshotMemThreshold: {//  Union: only one key present
 *         percent: "STRING_VALUE",
 *         absolute: Number("long"),
 *       },
 *       walSnapshotSize: Number("int"),
 *       walMaxWriteBufferSize: Number("int"),
 *       snapshottedWalFilesToKeep: Number("int"),
 *       preemptiveCacheAge: "<Duration>",
 *       parquetMemCachePrunePercentage: Number("float"),
 *       parquetMemCachePruneInterval: "<Duration>",
 *       disableParquetMemCache: true || false,
 *       parquetMemCacheQueryPathDuration: "<Duration>",
 *       lastCacheEvictionInterval: "<Duration>",
 *       distinctCacheEvictionInterval: "<Duration>",
 *       gen1Duration: "<Duration>",
 *       execMemPoolBytes: {//  Union: only one key present
 *         percent: "STRING_VALUE",
 *         absolute: Number("long"),
 *       },
 *       parquetMemCacheSize: "<PercentOrAbsoluteLong>",
 *       walReplayFailOnError: true || false,
 *       walReplayConcurrencyLimit: Number("int"),
 *       tableIndexCacheMaxEntries: Number("int"),
 *       tableIndexCacheConcurrencyLimit: Number("int"),
 *       gen1LookbackDuration: "<Duration>",
 *       retentionCheckInterval: "<Duration>",
 *       deleteGracePeriod: "<Duration>",
 *       hardDeleteDefaultDuration: "<Duration>",
 *       ingestQueryInstances: Number("int"), // required
 *       queryOnlyInstances: Number("int"), // required
 *       dedicatedCompactor: true || false, // required
 *       compactionRowLimit: Number("int"),
 *       compactionMaxNumFilesPerPlan: Number("int"),
 *       compactionGen2Duration: "<Duration>",
 *       compactionMultipliers: "STRING_VALUE",
 *       compactionCleanupWait: "<Duration>",
 *       compactionCheckInterval: "<Duration>",
 *       lastValueCacheDisableFromHistory: true || false,
 *       distinctValueCacheDisableFromHistory: true || false,
 *       replicationInterval: "<Duration>",
 *       catalogSyncInterval: "<Duration>",
 *     },
 *   },
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDbParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDbParameterGroupOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   parameters: { // Parameters Union: only one key present
 * //     InfluxDBv2: { // InfluxDBv2Parameters
 * //       fluxLogEnabled: true || false,
 * //       logLevel: "debug" || "info" || "error",
 * //       noTasks: true || false,
 * //       queryConcurrency: Number("int"),
 * //       queryQueueSize: Number("int"),
 * //       tracingType: "log" || "jaeger" || "disabled",
 * //       metricsDisabled: true || false,
 * //       httpIdleTimeout: { // Duration
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpReadHeaderTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpReadTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 * //         value: Number("long"), // required
 * //       },
 * //       httpWriteTimeout: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 * //         value: Number("long"), // required
 * //       },
 * //       influxqlMaxSelectBuckets: Number("long"),
 * //       influxqlMaxSelectPoint: Number("long"),
 * //       influxqlMaxSelectSeries: Number("long"),
 * //       pprofDisabled: true || false,
 * //       queryInitialMemoryBytes: Number("long"),
 * //       queryMaxMemoryBytes: Number("long"),
 * //       queryMemoryBytes: Number("long"),
 * //       sessionLength: Number("int"),
 * //       sessionRenewDisabled: true || false,
 * //       storageCacheMaxMemorySize: Number("long"),
 * //       storageCacheSnapshotMemorySize: Number("long"),
 * //       storageCacheSnapshotWriteColdDuration: {
 * //         durationType: "hours" || "minutes" || "seconds" || "milliseconds" || "days", // required
 * //         value: Number("long"), // required
 * //       },
 * //       storageCompactFullWriteColdDuration: "<Duration>",
 * //       storageCompactThroughputBurst: Number("long"),
 * //       storageMaxConcurrentCompactions: Number("int"),
 * //       storageMaxIndexLogFileSize: Number("long"),
 * //       storageNoValidateFieldSize: true || false,
 * //       storageRetentionCheckInterval: "<Duration>",
 * //       storageSeriesFileMaxConcurrentSnapshotCompactions: Number("int"),
 * //       storageSeriesIdSetCacheSize: Number("long"),
 * //       storageWalMaxConcurrentWrites: Number("int"),
 * //       storageWalMaxWriteDelay: "<Duration>",
 * //       uiDisabled: true || false,
 * //     },
 * //     InfluxDBv3Core: { // InfluxDBv3CoreParameters
 * //       queryFileLimit: Number("int"),
 * //       queryLogSize: Number("int"),
 * //       logFilter: "STRING_VALUE",
 * //       logFormat: "full",
 * //       dataFusionNumThreads: Number("int"),
 * //       dataFusionRuntimeType: "multi-thread" || "multi-thread-alt",
 * //       dataFusionRuntimeDisableLifoSlot: true || false,
 * //       dataFusionRuntimeEventInterval: Number("int"),
 * //       dataFusionRuntimeGlobalQueueInterval: Number("int"),
 * //       dataFusionRuntimeMaxBlockingThreads: Number("int"),
 * //       dataFusionRuntimeMaxIoEventsPerTick: Number("int"),
 * //       dataFusionRuntimeThreadKeepAlive: "<Duration>",
 * //       dataFusionRuntimeThreadPriority: Number("int"),
 * //       dataFusionMaxParquetFanout: Number("int"),
 * //       dataFusionUseCachedParquetLoader: true || false,
 * //       dataFusionConfig: "STRING_VALUE",
 * //       maxHttpRequestSize: Number("long"),
 * //       forceSnapshotMemThreshold: { // PercentOrAbsoluteLong Union: only one key present
 * //         percent: "STRING_VALUE",
 * //         absolute: Number("long"),
 * //       },
 * //       walSnapshotSize: Number("int"),
 * //       walMaxWriteBufferSize: Number("int"),
 * //       snapshottedWalFilesToKeep: Number("int"),
 * //       preemptiveCacheAge: "<Duration>",
 * //       parquetMemCachePrunePercentage: Number("float"),
 * //       parquetMemCachePruneInterval: "<Duration>",
 * //       disableParquetMemCache: true || false,
 * //       parquetMemCacheQueryPathDuration: "<Duration>",
 * //       lastCacheEvictionInterval: "<Duration>",
 * //       distinctCacheEvictionInterval: "<Duration>",
 * //       gen1Duration: "<Duration>",
 * //       execMemPoolBytes: {//  Union: only one key present
 * //         percent: "STRING_VALUE",
 * //         absolute: Number("long"),
 * //       },
 * //       parquetMemCacheSize: {//  Union: only one key present
 * //         percent: "STRING_VALUE",
 * //         absolute: Number("long"),
 * //       },
 * //       walReplayFailOnError: true || false,
 * //       walReplayConcurrencyLimit: Number("int"),
 * //       tableIndexCacheMaxEntries: Number("int"),
 * //       tableIndexCacheConcurrencyLimit: Number("int"),
 * //       gen1LookbackDuration: "<Duration>",
 * //       retentionCheckInterval: "<Duration>",
 * //       deleteGracePeriod: "<Duration>",
 * //       hardDeleteDefaultDuration: "<Duration>",
 * //     },
 * //     InfluxDBv3Enterprise: { // InfluxDBv3EnterpriseParameters
 * //       queryFileLimit: Number("int"),
 * //       queryLogSize: Number("int"),
 * //       logFilter: "STRING_VALUE",
 * //       logFormat: "full",
 * //       dataFusionNumThreads: Number("int"),
 * //       dataFusionRuntimeType: "multi-thread" || "multi-thread-alt",
 * //       dataFusionRuntimeDisableLifoSlot: true || false,
 * //       dataFusionRuntimeEventInterval: Number("int"),
 * //       dataFusionRuntimeGlobalQueueInterval: Number("int"),
 * //       dataFusionRuntimeMaxBlockingThreads: Number("int"),
 * //       dataFusionRuntimeMaxIoEventsPerTick: Number("int"),
 * //       dataFusionRuntimeThreadKeepAlive: "<Duration>",
 * //       dataFusionRuntimeThreadPriority: Number("int"),
 * //       dataFusionMaxParquetFanout: Number("int"),
 * //       dataFusionUseCachedParquetLoader: true || false,
 * //       dataFusionConfig: "STRING_VALUE",
 * //       maxHttpRequestSize: Number("long"),
 * //       forceSnapshotMemThreshold: {//  Union: only one key present
 * //         percent: "STRING_VALUE",
 * //         absolute: Number("long"),
 * //       },
 * //       walSnapshotSize: Number("int"),
 * //       walMaxWriteBufferSize: Number("int"),
 * //       snapshottedWalFilesToKeep: Number("int"),
 * //       preemptiveCacheAge: "<Duration>",
 * //       parquetMemCachePrunePercentage: Number("float"),
 * //       parquetMemCachePruneInterval: "<Duration>",
 * //       disableParquetMemCache: true || false,
 * //       parquetMemCacheQueryPathDuration: "<Duration>",
 * //       lastCacheEvictionInterval: "<Duration>",
 * //       distinctCacheEvictionInterval: "<Duration>",
 * //       gen1Duration: "<Duration>",
 * //       execMemPoolBytes: {//  Union: only one key present
 * //         percent: "STRING_VALUE",
 * //         absolute: Number("long"),
 * //       },
 * //       parquetMemCacheSize: "<PercentOrAbsoluteLong>",
 * //       walReplayFailOnError: true || false,
 * //       walReplayConcurrencyLimit: Number("int"),
 * //       tableIndexCacheMaxEntries: Number("int"),
 * //       tableIndexCacheConcurrencyLimit: Number("int"),
 * //       gen1LookbackDuration: "<Duration>",
 * //       retentionCheckInterval: "<Duration>",
 * //       deleteGracePeriod: "<Duration>",
 * //       hardDeleteDefaultDuration: "<Duration>",
 * //       ingestQueryInstances: Number("int"), // required
 * //       queryOnlyInstances: Number("int"), // required
 * //       dedicatedCompactor: true || false, // required
 * //       compactionRowLimit: Number("int"),
 * //       compactionMaxNumFilesPerPlan: Number("int"),
 * //       compactionGen2Duration: "<Duration>",
 * //       compactionMultipliers: "STRING_VALUE",
 * //       compactionCleanupWait: "<Duration>",
 * //       compactionCheckInterval: "<Duration>",
 * //       lastValueCacheDisableFromHistory: true || false,
 * //       distinctValueCacheDisableFromHistory: true || false,
 * //       replicationInterval: "<Duration>",
 * //       catalogSyncInterval: "<Duration>",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDbParameterGroupCommandInput - {@link CreateDbParameterGroupCommandInput}
 * @returns {@link CreateDbParameterGroupCommandOutput}
 * @see {@link CreateDbParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDbParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource in Timestream for InfluxDB.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 * <p>Base exception class for all service exceptions from TimestreamInfluxDB service.</p>
 *
 *
 * @public
 */
export class CreateDbParameterGroupCommand extends $Command
  .classBuilder<
    CreateDbParameterGroupCommandInput,
    CreateDbParameterGroupCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "CreateDbParameterGroup", {})
  .n("TimestreamInfluxDBClient", "CreateDbParameterGroupCommand")
  .sc(CreateDbParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDbParameterGroupInput;
      output: CreateDbParameterGroupOutput;
    };
    sdk: {
      input: CreateDbParameterGroupCommandInput;
      output: CreateDbParameterGroupCommandOutput;
    };
  };
}
