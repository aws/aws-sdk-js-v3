// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/models_0";
import { DeleteCacheCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCacheClusterCommand}.
 */
export interface DeleteCacheClusterCommandInput extends DeleteCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCacheClusterCommand}.
 */
export interface DeleteCacheClusterCommandOutput extends DeleteCacheClusterResult, __MetadataBearer {}

/**
 * Deletes a previously provisioned cluster. `DeleteCacheCluster` deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.
 *
 * This operation is not valid for:
 *
 * - Valkey or Redis OSS (cluster mode enabled) clusters
 * - Valkey or Redis OSS (cluster mode disabled) clusters
 * - A cluster that is the last read replica of a replication group
 * - A cluster that is the primary node of a replication group
 * - A node group (shard) that has Multi-AZ mode enabled
 * - A cluster from a Valkey or Redis OSS (cluster mode enabled) replication group
 * - A cluster that is not in the `available` state
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteCacheClusterMessage
 *   CacheClusterId: "STRING_VALUE", // required
 *   FinalSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCacheClusterResult
 * //   CacheCluster: { // CacheCluster
 * //     CacheClusterId: "STRING_VALUE",
 * //     ConfigurationEndpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ClientDownloadLandingPage: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     CacheClusterStatus: "STRING_VALUE",
 * //     NumCacheNodes: Number("int"),
 * //     PreferredAvailabilityZone: "STRING_VALUE",
 * //     PreferredOutpostArn: "STRING_VALUE",
 * //     CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       NumCacheNodes: Number("int"),
 * //       CacheNodeIdsToRemove: [ // CacheNodeIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       AuthTokenStatus: "SETTING" || "ROTATING",
 * //       LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //         { // PendingLogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: { // DestinationDetails
 * //             CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //         },
 * //       ],
 * //       TransitEncryptionEnabled: true || false,
 * //       TransitEncryptionMode: "preferred" || "required",
 * //       ScaleConfig: { // ScaleConfig
 * //         ScalePercentage: Number("int"),
 * //         ScaleIntervalMinutes: Number("int"),
 * //       },
 * //     },
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       TopicArn: "STRING_VALUE",
 * //       TopicStatus: "STRING_VALUE",
 * //     },
 * //     CacheSecurityGroups: [ // CacheSecurityGroupMembershipList
 * //       { // CacheSecurityGroupMembership
 * //         CacheSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CacheParameterGroup: { // CacheParameterGroupStatus
 * //       CacheParameterGroupName: "STRING_VALUE",
 * //       ParameterApplyStatus: "STRING_VALUE",
 * //       CacheNodeIdsToReboot: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     CacheNodes: [ // CacheNodeList
 * //       { // CacheNode
 * //         CacheNodeId: "STRING_VALUE",
 * //         CacheNodeStatus: "STRING_VALUE",
 * //         CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //         Endpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         ParameterGroupStatus: "STRING_VALUE",
 * //         SourceCacheNodeId: "STRING_VALUE",
 * //         CustomerAvailabilityZone: "STRING_VALUE",
 * //         CustomerOutpostArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AutoMinorVersionUpgrade: true || false,
 * //     SecurityGroups: [ // SecurityGroupMembershipList
 * //       { // SecurityGroupMembership
 * //         SecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     AuthTokenEnabled: true || false,
 * //     AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //     ReplicationGroupLogDeliveryEnabled: true || false,
 * //     LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //       { // LogDeliveryConfiguration
 * //         LogType: "slow-log" || "engine-log",
 * //         DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //         DestinationDetails: {
 * //           CloudWatchLogsDetails: {
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           KinesisFirehoseDetails: {
 * //             DeliveryStream: "STRING_VALUE",
 * //           },
 * //         },
 * //         LogFormat: "text" || "json",
 * //         Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     IpDiscovery: "ipv4" || "ipv6",
 * //     TransitEncryptionMode: "preferred" || "required",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCacheClusterCommandInput - {@link DeleteCacheClusterCommandInput}
 * @returns {@link DeleteCacheClusterCommandOutput}
 * @see {@link DeleteCacheClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *
 * The requested cluster ID does not refer to an existing cluster.
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *
 * The requested cluster is not in the `available` state.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *
 * You already have a snapshot with the given name.
 *
 * @throws {@link SnapshotFeatureNotSupportedFault} (client fault)
 *
 * You attempted one of the following operations:
 *
 * - Creating a snapshot of a Valkey or Redis OSS cluster running on a `cache.t1.micro` cache node.
 * - Creating a snapshot of a cluster that is running Memcached rather than Valkey or Redis OSS.
 *
 * Neither of these are supported by ElastiCache.
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of snapshots.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example DeleteCacheCluster
 * ```javascript
 * // Deletes an Amazon ElastiCache cluster.
 * const input = {
 *   CacheClusterId: "my-memcached"
 * };
 * const command = new DeleteCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheCluster: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterCreateTime: "2016-12-22T16:05:17.314Z",
 *     CacheClusterId: "my-memcached",
 *     CacheClusterStatus: "deleting",
 *     CacheNodeType: "cache.r3.large",
 *     CacheParameterGroup: {
 *       CacheNodeIdsToReboot:       [],
 *       CacheParameterGroupName: "default.memcached1.4",
 *       ParameterApplyStatus: "in-sync"
 *     },
 *     CacheSecurityGroups:     [],
 *     CacheSubnetGroupName: "default",
 *     ClientDownloadLandingPage: "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     ConfigurationEndpoint: {
 *       Address: "my-memcached2.ameaqx.cfg.use1.cache.amazonaws.com",
 *       Port: 11211
 *     },
 *     Engine: "memcached",
 *     EngineVersion: "1.4.24",
 *     NumCacheNodes: 2,
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PreferredAvailabilityZone: "Multiple",
 *     PreferredMaintenanceWindow: "tue:07:30-tue:08:30"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCacheClusterCommand extends command<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCacheCluster",
  DeleteCacheCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCacheClusterMessage;
      output: DeleteCacheClusterResult;
    };
    sdk: {
      input: DeleteCacheClusterCommandInput;
      output: DeleteCacheClusterCommandOutput;
    };
  };
}
