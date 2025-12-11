// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCacheClusterMessage, DeleteCacheClusterResult } from "../models/models_0";
import { DeleteCacheCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all
 *             associated cache nodes, node endpoints and the cluster itself. When you receive a
 *             successful response from this operation, Amazon ElastiCache immediately begins deleting
 *             the cluster; you cannot cancel or revert this operation.</p>
 *          <p>This operation is not valid for:</p>
 *          <ul>
 *             <li>
 *                <p>Valkey or Redis OSS (cluster mode enabled) clusters</p>
 *             </li>
 *             <li>
 *                <p>Valkey or Redis OSS (cluster mode disabled) clusters</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is the last read replica of a replication group</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is the primary node of a replication group</p>
 *             </li>
 *             <li>
 *                <p>A node group (shard) that has Multi-AZ mode enabled</p>
 *             </li>
 *             <li>
 *                <p>A cluster from a Valkey or Redis OSS (cluster mode enabled) replication group</p>
 *             </li>
 *             <li>
 *                <p>A cluster that is not in the <code>available</code> state</p>
 *             </li>
 *          </ul>
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
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a snapshot with the given name.</p>
 *
 * @throws {@link SnapshotFeatureNotSupportedFault} (client fault)
 *  <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Valkey or Redis OSS cluster running on a
 *                         <code>cache.t1.micro</code> cache node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than
 *                     Valkey or Redis OSS.</p>
 *             </li>
 *          </ul>
 *          <p>Neither of these are supported by ElastiCache.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of
 *             snapshots.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
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
export class DeleteCacheClusterCommand extends $Command
  .classBuilder<
    DeleteCacheClusterCommandInput,
    DeleteCacheClusterCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DeleteCacheCluster", {})
  .n("ElastiCacheClient", "DeleteCacheClusterCommand")
  .sc(DeleteCacheCluster)
  .build() {
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
