// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CacheClusterMessage, DescribeCacheClustersMessage } from "../models/models_0";
import { DescribeCacheClusters } from "../schemas/schemas_11_Cache";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheClustersCommand}.
 */
export interface DescribeCacheClustersCommandInput extends DescribeCacheClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCacheClustersCommand}.
 */
export interface DescribeCacheClustersCommandOutput extends CacheClusterMessage, __MetadataBearer {}

/**
 * <p>Returns information about all provisioned clusters if no cluster identifier is
 *             specified, or about a specific cache cluster if a cluster identifier is supplied.</p>
 *          <p>By default, abbreviated information about the clusters is returned. You can use the
 *             optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information
 *             about the cache nodes associated with the clusters. These details include the DNS
 *             address and port for the cache node endpoint.</p>
 *          <p>If the cluster is in the <i>creating</i> state, only cluster-level
 *             information is displayed until all of the nodes are successfully provisioned.</p>
 *          <p>If the cluster is in the <i>deleting</i> state, only cluster-level
 *             information is displayed.</p>
 *          <p>If cache nodes are currently being added to the cluster, node endpoint information and
 *             creation time for the additional nodes are not displayed until they are completely
 *             provisioned. When the cluster state is <i>available</i>, the cluster is
 *             ready for use.</p>
 *          <p>If cache nodes are currently being removed from the cluster, no endpoint information
 *             for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheClustersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheClustersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeCacheClustersMessage
 *   CacheClusterId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   ShowCacheNodeInfo: true || false,
 *   ShowCacheClustersNotInReplicationGroups: true || false,
 * };
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * // { // CacheClusterMessage
 * //   Marker: "STRING_VALUE",
 * //   CacheClusters: [ // CacheClusterList
 * //     { // CacheCluster
 * //       CacheClusterId: "STRING_VALUE",
 * //       ConfigurationEndpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ClientDownloadLandingPage: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       CacheClusterStatus: "STRING_VALUE",
 * //       NumCacheNodes: Number("int"),
 * //       PreferredAvailabilityZone: "STRING_VALUE",
 * //       PreferredOutpostArn: "STRING_VALUE",
 * //       CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // PendingModifiedValues
 * //         NumCacheNodes: Number("int"),
 * //         CacheNodeIdsToRemove: [ // CacheNodeIdsList
 * //           "STRING_VALUE",
 * //         ],
 * //         EngineVersion: "STRING_VALUE",
 * //         CacheNodeType: "STRING_VALUE",
 * //         AuthTokenStatus: "SETTING" || "ROTATING",
 * //         LogDeliveryConfigurations: [ // PendingLogDeliveryConfigurationList
 * //           { // PendingLogDeliveryConfiguration
 * //             LogType: "slow-log" || "engine-log",
 * //             DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //             DestinationDetails: { // DestinationDetails
 * //               CloudWatchLogsDetails: { // CloudWatchLogsDestinationDetails
 * //                 LogGroup: "STRING_VALUE",
 * //               },
 * //               KinesisFirehoseDetails: { // KinesisFirehoseDestinationDetails
 * //                 DeliveryStream: "STRING_VALUE",
 * //               },
 * //             },
 * //             LogFormat: "text" || "json",
 * //           },
 * //         ],
 * //         TransitEncryptionEnabled: true || false,
 * //         TransitEncryptionMode: "preferred" || "required",
 * //         ScaleConfig: { // ScaleConfig
 * //           ScalePercentage: Number("int"),
 * //           ScaleIntervalMinutes: Number("int"),
 * //         },
 * //       },
 * //       NotificationConfiguration: { // NotificationConfiguration
 * //         TopicArn: "STRING_VALUE",
 * //         TopicStatus: "STRING_VALUE",
 * //       },
 * //       CacheSecurityGroups: [ // CacheSecurityGroupMembershipList
 * //         { // CacheSecurityGroupMembership
 * //           CacheSecurityGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CacheParameterGroup: { // CacheParameterGroupStatus
 * //         CacheParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //         CacheNodeIdsToReboot: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CacheSubnetGroupName: "STRING_VALUE",
 * //       CacheNodes: [ // CacheNodeList
 * //         { // CacheNode
 * //           CacheNodeId: "STRING_VALUE",
 * //           CacheNodeStatus: "STRING_VALUE",
 * //           CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //           Endpoint: {
 * //             Address: "STRING_VALUE",
 * //             Port: Number("int"),
 * //           },
 * //           ParameterGroupStatus: "STRING_VALUE",
 * //           SourceCacheNodeId: "STRING_VALUE",
 * //           CustomerAvailabilityZone: "STRING_VALUE",
 * //           CustomerOutpostArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AutoMinorVersionUpgrade: true || false,
 * //       SecurityGroups: [ // SecurityGroupMembershipList
 * //         { // SecurityGroupMembership
 * //           SecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       AuthTokenEnabled: true || false,
 * //       AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //       TransitEncryptionEnabled: true || false,
 * //       AtRestEncryptionEnabled: true || false,
 * //       ARN: "STRING_VALUE",
 * //       ReplicationGroupLogDeliveryEnabled: true || false,
 * //       LogDeliveryConfigurations: [ // LogDeliveryConfigurationList
 * //         { // LogDeliveryConfiguration
 * //           LogType: "slow-log" || "engine-log",
 * //           DestinationType: "cloudwatch-logs" || "kinesis-firehose",
 * //           DestinationDetails: {
 * //             CloudWatchLogsDetails: {
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseDetails: {
 * //               DeliveryStream: "STRING_VALUE",
 * //             },
 * //           },
 * //           LogFormat: "text" || "json",
 * //           Status: "active" || "enabling" || "modifying" || "disabling" || "error",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //       IpDiscovery: "ipv4" || "ipv6",
 * //       TransitEncryptionMode: "preferred" || "required",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCacheClustersCommandInput - {@link DescribeCacheClustersCommandInput}
 * @returns {@link DescribeCacheClustersCommandOutput}
 * @see {@link DescribeCacheClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheClustersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeCacheClusters
 * ```javascript
 * // Lists the details for the cache cluster my-mem-cluster.
 * const input = {
 *   CacheClusterId: "my-mem-cluster",
 *   ShowCacheNodeInfo: true
 * };
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheClusters: [
 *     {
 *       AutoMinorVersionUpgrade: true,
 *       CacheClusterCreateTime: "2016-12-21T21:59:43.794Z",
 *       CacheClusterId: "my-mem-cluster",
 *       CacheClusterStatus: "available",
 *       CacheNodeType: "cache.t2.medium",
 *       CacheNodes: [
 *         {
 *           CacheNodeCreateTime: "2016-12-21T21:59:43.794Z",
 *           CacheNodeId: "0001",
 *           CacheNodeStatus: "available",
 *           CustomerAvailabilityZone: "us-east-1b",
 *           Endpoint: {
 *             Address: "my-mem-cluster.ameaqx.0001.use1.cache.amazonaws.com",
 *             Port: 11211
 *           },
 *           ParameterGroupStatus: "in-sync"
 *         },
 *         {
 *           CacheNodeCreateTime: "2016-12-21T21:59:43.794Z",
 *           CacheNodeId: "0002",
 *           CacheNodeStatus: "available",
 *           CustomerAvailabilityZone: "us-east-1a",
 *           Endpoint: {
 *             Address: "my-mem-cluster.ameaqx.0002.use1.cache.amazonaws.com",
 *             Port: 11211
 *           },
 *           ParameterGroupStatus: "in-sync"
 *         }
 *       ],
 *       CacheParameterGroup: {
 *         CacheNodeIdsToReboot:         [],
 *         CacheParameterGroupName: "default.memcached1.4",
 *         ParameterApplyStatus: "in-sync"
 *       },
 *       CacheSecurityGroups:       [],
 *       CacheSubnetGroupName: "default",
 *       ClientDownloadLandingPage: "https://console.aws.amazon.com/elasticache/home#client-download:",
 *       ConfigurationEndpoint: {
 *         Address: "my-mem-cluster.ameaqx.cfg.use1.cache.amazonaws.com",
 *         Port: 11211
 *       },
 *       Engine: "memcached",
 *       EngineVersion: "1.4.24",
 *       NumCacheNodes: 2,
 *       PendingModifiedValues:       { /* empty *\/ },
 *       PreferredAvailabilityZone: "Multiple",
 *       PreferredMaintenanceWindow: "wed:06:00-wed:07:00"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example DescribeCacheClusters
 * ```javascript
 * // Lists the details for up to 50 cache clusters.
 * const input = {
 *   CacheClusterId: "my-mem-cluster"
 * };
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheClusters: [
 *     {
 *       AutoMinorVersionUpgrade: true,
 *       CacheClusterCreateTime: "2016-12-21T21:59:43.794Z",
 *       CacheClusterId: "my-mem-cluster",
 *       CacheClusterStatus: "available",
 *       CacheNodeType: "cache.t2.medium",
 *       CacheParameterGroup: {
 *         CacheNodeIdsToReboot:         [],
 *         CacheParameterGroupName: "default.memcached1.4",
 *         ParameterApplyStatus: "in-sync"
 *       },
 *       CacheSecurityGroups:       [],
 *       CacheSubnetGroupName: "default",
 *       ClientDownloadLandingPage: "https://console.aws.amazon.com/elasticache/home#client-download:",
 *       ConfigurationEndpoint: {
 *         Address: "my-mem-cluster.abcdef.cfg.use1.cache.amazonaws.com",
 *         Port: 11211
 *       },
 *       Engine: "memcached",
 *       EngineVersion: "1.4.24",
 *       NumCacheNodes: 2,
 *       PendingModifiedValues:       { /* empty *\/ },
 *       PreferredAvailabilityZone: "Multiple",
 *       PreferredMaintenanceWindow: "wed:06:00-wed:07:00"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeCacheClustersCommand extends $Command
  .classBuilder<
    DescribeCacheClustersCommandInput,
    DescribeCacheClustersCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeCacheClusters", {})
  .n("ElastiCacheClient", "DescribeCacheClustersCommand")
  .sc(DescribeCacheClusters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCacheClustersMessage;
      output: CacheClusterMessage;
    };
    sdk: {
      input: DescribeCacheClustersCommandInput;
      output: DescribeCacheClustersCommandOutput;
    };
  };
}
