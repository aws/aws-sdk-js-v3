// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCacheClusterMessage, CreateCacheClusterResult } from "../models/models_0";
import { CreateCacheCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandInput extends CreateCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateCacheClusterCommand}.
 */
export interface CreateCacheClusterCommandOutput extends CreateCacheClusterResult, __MetadataBearer {}

/**
 * Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached, Valkey or Redis OSS.
 *
 * This operation is not supported for Valkey or Redis OSS (cluster mode enabled) clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateCacheClusterMessage
 *   CacheClusterId: "STRING_VALUE", // required
 *   ReplicationGroupId: "STRING_VALUE",
 *   AZMode: "single-az" || "cross-az",
 *   PreferredAvailabilityZone: "STRING_VALUE",
 *   PreferredAvailabilityZones: [ // PreferredAvailabilityZoneList
 *     "STRING_VALUE",
 *   ],
 *   NumCacheNodes: Number("int"),
 *   CacheNodeType: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   CacheParameterGroupName: "STRING_VALUE",
 *   CacheSubnetGroupName: "STRING_VALUE",
 *   CacheSecurityGroupNames: [ // CacheSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdsList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SnapshotArns: [ // SnapshotArnsList
 *     "STRING_VALUE",
 *   ],
 *   SnapshotName: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   NotificationTopicArn: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   SnapshotRetentionLimit: Number("int"),
 *   SnapshotWindow: "STRING_VALUE",
 *   AuthToken: "STRING_VALUE",
 *   OutpostMode: "single-outpost" || "cross-outpost",
 *   PreferredOutpostArn: "STRING_VALUE",
 *   PreferredOutpostArns: [ // PreferredOutpostArnList
 *     "STRING_VALUE",
 *   ],
 *   LogDeliveryConfigurations: [ // LogDeliveryConfigurationRequestList
 *     { // LogDeliveryConfigurationRequest
 *       LogType: "slow-log" || "engine-log",
 *       DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 *       DestinationDetails: { // DestinationDetails
 *         CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 *           LogGroup: "STRING_VALUE",
 *         },
 *         KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 *           DeliveryStream: "STRING_VALUE",
 *         },
 *       },
 *       LogFormat: "text" || "json",
 *       Enabled: true || false,
 *     },
 *   ],
 *   TransitEncryptionEnabled: true || false,
 *   NetworkType: "ipv4" || "ipv6" || "dual_stack",
 *   IpDiscovery: "ipv4" || "ipv6",
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateCacheClusterResult
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
 * @param CreateCacheClusterCommandInput - {@link CreateCacheClusterCommandInput}
 * @returns {@link CreateCacheClusterCommandOutput}
 * @see {@link CreateCacheClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterAlreadyExistsFault} (client fault)
 *
 * You already have a cluster with the given identifier.
 *
 * @throws {@link CacheParameterGroupNotFoundFault} (client fault)
 *
 * The requested cache parameter group name does not refer to an existing cache parameter group.
 *
 * @throws {@link CacheSecurityGroupNotFoundFault} (client fault)
 *
 * The requested cache security group name does not refer to an existing cache security group.
 *
 * @throws {@link CacheSubnetGroupNotFoundFault} (client fault)
 *
 * The requested cache subnet group name does not refer to an existing cache subnet group.
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the allowed number of clusters per customer.
 *
 * @throws {@link InsufficientCacheClusterCapacityFault} (client fault)
 *
 * The requested cache node type is not available in the specified Availability Zone. For more information, see [InsufficientCacheClusterCapacity](http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ErrorMessages.html#ErrorMessages.INSUFFICIENT_CACHE_CLUSTER_CAPACITY) in the ElastiCache User Guide.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *
 * The requested replication group is not in the `available` state.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * The VPC network is in an invalid state.
 *
 * @throws {@link NodeQuotaForClusterExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.
 *
 * @throws {@link NodeQuotaForCustomerExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the allowed number of cache nodes per customer.
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *
 * The specified replication group does not exist.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example CreateCacheCluster
 * ```javascript
 * // Creates a Memcached cluster with 2 nodes.
 * const input = {
 *   AZMode: "cross-az",
 *   CacheClusterId: "my-memcached-cluster",
 *   CacheNodeType: "cache.r3.large",
 *   CacheSubnetGroupName: "default",
 *   Engine: "memcached",
 *   EngineVersion: "1.4.24",
 *   NumCacheNodes: 2,
 *   Port: 11211
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheCluster: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterId: "my-memcached-cluster",
 *     CacheClusterStatus: "creating",
 *     CacheNodeType: "cache.r3.large",
 *     CacheParameterGroup: {
 *       CacheNodeIdsToReboot:       [],
 *       CacheParameterGroupName: "default.memcached1.4",
 *       ParameterApplyStatus: "in-sync"
 *     },
 *     CacheSecurityGroups:     [],
 *     CacheSubnetGroupName: "default",
 *     ClientDownloadLandingPage: "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     Engine: "memcached",
 *     EngineVersion: "1.4.24",
 *     NumCacheNodes: 2,
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PreferredAvailabilityZone: "Multiple",
 *     PreferredMaintenanceWindow: "wed:09:00-wed:10:00"
 *   }
 * }
 * *\/
 * ```
 *
 * @example CreateCacheCluster
 * ```javascript
 * // Creates a Redis cluster with 1 node.
 * const input = {
 *   AutoMinorVersionUpgrade: true,
 *   CacheClusterId: "my-redis",
 *   CacheNodeType: "cache.r3.larage",
 *   CacheSubnetGroupName: "default",
 *   Engine: "redis",
 *   EngineVersion: "3.2.4",
 *   NumCacheNodes: 1,
 *   Port: 6379,
 *   PreferredAvailabilityZone: "us-east-1c",
 *   SnapshotRetentionLimit: 7
 * };
 * const command = new CreateCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheCluster: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterId: "my-redis",
 *     CacheClusterStatus: "creating",
 *     CacheNodeType: "cache.m3.large",
 *     CacheParameterGroup: {
 *       CacheNodeIdsToReboot:       [],
 *       CacheParameterGroupName: "default.redis3.2",
 *       ParameterApplyStatus: "in-sync"
 *     },
 *     CacheSecurityGroups:     [],
 *     CacheSubnetGroupName: "default",
 *     ClientDownloadLandingPage: "https: //console.aws.amazon.com/elasticache/home#client-download: ",
 *     Engine: "redis",
 *     EngineVersion: "3.2.4",
 *     NumCacheNodes: 1,
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PreferredAvailabilityZone: "us-east-1c",
 *     PreferredMaintenanceWindow: "fri: 05: 30-fri: 06: 30",
 *     SnapshotRetentionLimit: 7,
 *     SnapshotWindow: "10: 00-11: 00"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCacheClusterCommand extends command<CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateCacheCluster",
  CreateCacheCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCacheClusterMessage;
      output: CreateCacheClusterResult;
    };
    sdk: {
      input: CreateCacheClusterCommandInput;
      output: CreateCacheClusterCommandOutput;
    };
  };
}
