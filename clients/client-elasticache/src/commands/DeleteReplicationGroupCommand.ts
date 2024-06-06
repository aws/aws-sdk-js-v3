// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationGroupMessage, DeleteReplicationGroupResult } from "../models/models_0";
import { de_DeleteReplicationGroupCommand, se_DeleteReplicationGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationGroupCommand}.
 */
export interface DeleteReplicationGroupCommandInput extends DeleteReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationGroupCommand}.
 */
export interface DeleteReplicationGroupCommandOutput extends DeleteReplicationGroupResult, __MetadataBearer {}

/**
 * <p>Deletes an existing replication group. By default, this operation deletes the entire
 *             replication group, including the primary/primaries and all of the read replicas. If the
 *             replication group has only one primary, you can optionally delete only the read
 *             replicas, while retaining the primary by setting
 *             <code>RetainPrimaryCluster=true</code>.</p>
 *          <p>When you receive a successful response from this operation, Amazon ElastiCache
 *             immediately begins deleting the selected resources; you cannot cancel or revert this
 *             operation.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteReplicationGroupMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   RetainPrimaryCluster: true || false,
 *   FinalSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicationGroupResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteReplicationGroupCommandInput - {@link DeleteReplicationGroupCommandInput}
 * @returns {@link DeleteReplicationGroupCommandOutput}
 * @see {@link DeleteReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *  <p>You already have a snapshot with the given name.</p>
 *
 * @throws {@link SnapshotFeatureNotSupportedFault} (client fault)
 *  <p>You attempted one of the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Creating a snapshot of a Redis cluster running on a
 *                         <code>cache.t1.micro</code> cache node.</p>
 *             </li>
 *             <li>
 *                <p>Creating a snapshot of a cluster that is running Memcached rather than
 *                     Redis.</p>
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
 * @public
 * @example DeleteReplicationGroup
 * ```javascript
 * // Deletes the Amazon ElastiCache replication group my-redis-rg.
 * const input = {
 *   "ReplicationGroupId": "my-redis-rg",
 *   "RetainPrimaryCluster": false
 * };
 * const command = new DeleteReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationGroup": {
 *     "AutomaticFailover": "disabled",
 *     "Description": "simple redis cluster",
 *     "PendingModifiedValues": {},
 *     "ReplicationGroupId": "my-redis-rg",
 *     "Status": "deleting"
 *   }
 * }
 * *\/
 * // example id: deletereplicationgroup-1475011641804
 * ```
 *
 */
export class DeleteReplicationGroupCommand extends $Command
  .classBuilder<
    DeleteReplicationGroupCommandInput,
    DeleteReplicationGroupCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElastiCacheV9", "DeleteReplicationGroup", {})
  .n("ElastiCacheClient", "DeleteReplicationGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicationGroupCommand)
  .de(de_DeleteReplicationGroupCommand)
  .build() {}
