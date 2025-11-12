// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestFailoverMessage, TestFailoverResult } from "../models/models_1";
import { TestFailover } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestFailoverCommand}.
 */
export interface TestFailoverCommandInput extends TestFailoverMessage {}
/**
 * @public
 *
 * The output of {@link TestFailoverCommand}.
 */
export interface TestFailoverCommandOutput extends TestFailoverResult, __MetadataBearer {}

/**
 * <p>Represents the input of a <code>TestFailover</code> operation which tests automatic
 *             failover on a specified node group (called shard in the console) in a replication group
 *             (called cluster in the console).</p>
 *          <p>This API is designed for testing the behavior of your application in case of
 *             ElastiCache failover. It is not designed to be an operational tool for initiating a
 *             failover to overcome a problem you may have with the cluster. Moreover, in certain
 *             conditions such as large-scale operational events, Amazon may block this API. </p>
 *          <p class="title">
 *             <b>Note the following</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A customer can use this operation to test automatic failover on up to 15 shards
 *                     (called node groups in the ElastiCache API and Amazon CLI) in any rolling
 *                     24-hour period.</p>
 *             </li>
 *             <li>
 *                <p>If calling this operation on shards in different clusters (called replication
 *                     groups in the API and CLI), the calls can be made concurrently.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>If calling this operation multiple times on different shards in the same Valkey or Redis OSS (cluster mode enabled) replication group, the first node replacement must
 *                     complete before a subsequent call can be made.</p>
 *             </li>
 *             <li>
 *                <p>To determine whether the node replacement is complete you can check Events
 *                     using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API.
 *                     Look for the following automatic failover related events, listed here in order
 *                     of occurrance:</p>
 *                <ol>
 *                   <li>
 *                      <p>Replication group message: <code>Test Failover API called for node
 *                                 group <node-group-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Failover from primary node
 *                                 <primary-node-id> to replica node <node-id>
 *                                 completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Replication group message: <code>Failover from primary node
 *                                 <primary-node-id> to replica node <node-id>
 *                                 completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Recovering cache nodes
 *                                 <node-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Finished recovery for cache nodes
 *                                 <node-id></code>
 *                      </p>
 *                   </li>
 *                </ol>
 *                <p>For more information see:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/ECEvents.Viewing.html">Viewing
 *                                 ElastiCache Events</a> in the <i>ElastiCache User
 *                                 Guide</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html#auto-failover-test">Testing
 *                 Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, TestFailoverCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, TestFailoverCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // TestFailoverMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   NodeGroupId: "STRING_VALUE", // required
 * };
 * const command = new TestFailoverCommand(input);
 * const response = await client.send(command);
 * // { // TestFailoverResult
 * //   ReplicationGroup: { // ReplicationGroup
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     GlobalReplicationGroupInfo: { // GlobalReplicationGroupInfo
 * //       GlobalReplicationGroupId: "STRING_VALUE",
 * //       GlobalReplicationGroupMemberRole: "STRING_VALUE",
 * //     },
 * //     Status: "STRING_VALUE",
 * //     PendingModifiedValues: { // ReplicationGroupPendingModifiedValues
 * //       PrimaryClusterId: "STRING_VALUE",
 * //       AutomaticFailoverStatus: "enabled" || "disabled",
 * //       Resharding: { // ReshardingStatus
 * //         SlotMigration: { // SlotMigration
 * //           ProgressPercentage: Number("double"),
 * //         },
 * //       },
 * //       AuthTokenStatus: "SETTING" || "ROTATING",
 * //       UserGroups: { // UserGroupsUpdateStatus
 * //         UserGroupIdsToAdd: [ // UserGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         UserGroupIdsToRemove: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
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
 * //       ClusterMode: "enabled" || "disabled" || "compatible",
 * //     },
 * //     MemberClusters: [ // ClusterIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     NodeGroups: [ // NodeGroupList
 * //       { // NodeGroup
 * //         NodeGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         PrimaryEndpoint: { // Endpoint
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         ReaderEndpoint: {
 * //           Address: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //         Slots: "STRING_VALUE",
 * //         NodeGroupMembers: [ // NodeGroupMemberList
 * //           { // NodeGroupMember
 * //             CacheClusterId: "STRING_VALUE",
 * //             CacheNodeId: "STRING_VALUE",
 * //             ReadEndpoint: {
 * //               Address: "STRING_VALUE",
 * //               Port: Number("int"),
 * //             },
 * //             PreferredAvailabilityZone: "STRING_VALUE",
 * //             PreferredOutpostArn: "STRING_VALUE",
 * //             CurrentRole: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     SnapshottingClusterId: "STRING_VALUE",
 * //     AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //     MultiAZ: "enabled" || "disabled",
 * //     ConfigurationEndpoint: "<Endpoint>",
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     ClusterEnabled: true || false,
 * //     CacheNodeType: "STRING_VALUE",
 * //     AuthTokenEnabled: true || false,
 * //     AuthTokenLastModifiedDate: new Date("TIMESTAMP"),
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     MemberClustersOutpostArns: [ // ReplicationGroupOutpostArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     UserGroupIds: [
 * //       "STRING_VALUE",
 * //     ],
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
 * //     ReplicationGroupCreateTime: new Date("TIMESTAMP"),
 * //     DataTiering: "enabled" || "disabled",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     NetworkType: "ipv4" || "ipv6" || "dual_stack",
 * //     IpDiscovery: "ipv4" || "ipv6",
 * //     TransitEncryptionMode: "preferred" || "required",
 * //     ClusterMode: "enabled" || "disabled" || "compatible",
 * //     Engine: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestFailoverCommandInput - {@link TestFailoverCommandInput}
 * @returns {@link TestFailoverCommandOutput}
 * @see {@link TestFailoverCommandInput} for command's `input` shape.
 * @see {@link TestFailoverCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link APICallRateForCustomerExceededFault} (client fault)
 *  <p>The customer has exceeded the allowed rate of API calls.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p>The KMS key supplied is not valid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link NodeGroupNotFoundFault} (client fault)
 *  <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the
 *                 <code>NodeGroupId</code> value correctly.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link TestFailoverNotAvailableFault} (client fault)
 *  <p>The <code>TestFailover</code> action is not available.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class TestFailoverCommand extends $Command
  .classBuilder<
    TestFailoverCommandInput,
    TestFailoverCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "TestFailover", {})
  .n("ElastiCacheClient", "TestFailoverCommand")
  .sc(TestFailover)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestFailoverMessage;
      output: TestFailoverResult;
    };
    sdk: {
      input: TestFailoverCommandInput;
      output: TestFailoverCommandOutput;
    };
  };
}
