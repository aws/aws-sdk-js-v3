// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RebootCacheClusterMessage, RebootCacheClusterResult } from "../models/models_0";
import { RebootCacheCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootCacheClusterCommand}.
 */
export interface RebootCacheClusterCommandInput extends RebootCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link RebootCacheClusterCommand}.
 */
export interface RebootCacheClusterCommandOutput extends RebootCacheClusterResult, __MetadataBearer {}

/**
 * <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation
 *             applies any modified cache parameter groups to the cluster. The reboot operation takes
 *             place as soon as possible, and results in a momentary outage to the cluster. During the
 *             reboot, the cluster status is set to REBOOTING.</p>
 *          <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be
 *             lost.</p>
 *          <p>When the reboot is complete, a cluster event is created.</p>
 *          <p>Rebooting a cluster is currently supported on Memcached, Valkey and Redis OSS (cluster mode
 *             disabled) clusters. Rebooting is not supported on Valkey or Redis OSS (cluster mode enabled)
 *             clusters.</p>
 *          <p>If you make changes to parameters that require a Valkey or Redis OSS (cluster mode enabled) cluster
 *             reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/dg/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebootCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebootCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // RebootCacheClusterMessage
 *   CacheClusterId: "STRING_VALUE", // required
 *   CacheNodeIdsToReboot: [ // CacheNodeIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RebootCacheClusterCommand(input);
 * const response = await client.send(command);
 * // { // RebootCacheClusterResult
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
 * @param RebootCacheClusterCommandInput - {@link RebootCacheClusterCommandInput}
 * @returns {@link RebootCacheClusterCommandOutput}
 * @see {@link RebootCacheClusterCommandInput} for command's `input` shape.
 * @see {@link RebootCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example RebootCacheCluster
 * ```javascript
 * // Reboots the specified nodes in the names cluster.
 * const input = {
 *   CacheClusterId: "custom-mem1-4  ",
 *   CacheNodeIdsToReboot: [
 *     "0001",
 *     "0002"
 *   ]
 * };
 * const command = new RebootCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CacheCluster: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterCreateTime: "2016-12-21T21:59:43.794Z",
 *     CacheClusterId: "my-mem-cluster",
 *     CacheClusterStatus: "rebooting cache cluster nodes",
 *     CacheNodeType: "cache.t2.medium",
 *     CacheParameterGroup: {
 *       CacheNodeIdsToReboot:       [],
 *       CacheParameterGroupName: "default.memcached1.4",
 *       ParameterApplyStatus: "in-sync"
 *     },
 *     CacheSecurityGroups:     [],
 *     CacheSubnetGroupName: "default",
 *     ClientDownloadLandingPage: "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     ConfigurationEndpoint: {
 *       Address: "my-mem-cluster.abcdef.cfg.use1.cache.amazonaws.com",
 *       Port: 11211
 *     },
 *     Engine: "memcached",
 *     EngineVersion: "1.4.24",
 *     NumCacheNodes: 2,
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PreferredAvailabilityZone: "Multiple",
 *     PreferredMaintenanceWindow: "wed:06:00-wed:07:00"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RebootCacheClusterCommand extends $Command
  .classBuilder<
    RebootCacheClusterCommandInput,
    RebootCacheClusterCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "RebootCacheCluster", {})
  .n("ElastiCacheClient", "RebootCacheClusterCommand")
  .sc(RebootCacheCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootCacheClusterMessage;
      output: RebootCacheClusterResult;
    };
    sdk: {
      input: RebootCacheClusterCommandInput;
      output: RebootCacheClusterCommandOutput;
    };
  };
}
