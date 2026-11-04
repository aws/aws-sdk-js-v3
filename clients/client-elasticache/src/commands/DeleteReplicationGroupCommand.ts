// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReplicationGroupMessage, DeleteReplicationGroupResult } from "../models/models_0";
import { DeleteReplicationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting `RetainPrimaryCluster=true`.
 *
 * When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.
 *
 * > **Note:**
 * >
 * > - `CreateSnapshot` permission is required to create a final snapshot. Without this permission, the API call will fail with an `Access Denied` exception.
 * > - This operation is valid for Redis OSS only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
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
 * //     StorageEncryptionType: "none" || "sse-elasticache" || "sse-kms",
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
 * //     Durability: "default" || "async" || "sync" || "disabled",
 * //     EffectiveDurability: "async" || "sync" || "disabled",
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
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *
 * The specified replication group does not exist.
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
 * @example DeleteReplicationGroup
 * ```javascript
 * // Deletes the Amazon ElastiCache replication group my-redis-rg.
 * const input = {
 *   ReplicationGroupId: "my-redis-rg",
 *   RetainPrimaryCluster: false
 * };
 * const command = new DeleteReplicationGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReplicationGroup: {
 *     AutomaticFailover: "disabled",
 *     Description: "simple redis cluster",
 *     PendingModifiedValues:     { /* empty *\/ },
 *     ReplicationGroupId: "my-redis-rg",
 *     Status: "deleting"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteReplicationGroupCommand extends command<DeleteReplicationGroupCommandInput, DeleteReplicationGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReplicationGroup",
  DeleteReplicationGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationGroupMessage;
      output: DeleteReplicationGroupResult;
    };
    sdk: {
      input: DeleteReplicationGroupCommandInput;
      output: DeleteReplicationGroupCommandOutput;
    };
  };
}
