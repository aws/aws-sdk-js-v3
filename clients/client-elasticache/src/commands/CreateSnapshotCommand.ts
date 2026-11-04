// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapshotMessage, CreateSnapshotResult } from "../models/models_0";
import { CreateSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResult, __MetadataBearer {}

/**
 * Creates a copy of an entire cluster or replication group at a specific moment in time.
 *
 * > **Note:** This operation is valid for Valkey or Redis OSS only.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CreateSnapshotMessage
 *   ReplicationGroupId: "STRING_VALUE",
 *   CacheClusterId: "STRING_VALUE",
 *   SnapshotName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotName: "STRING_VALUE",
 * //     ReplicationGroupId: "STRING_VALUE",
 * //     ReplicationGroupDescription: "STRING_VALUE",
 * //     CacheClusterId: "STRING_VALUE",
 * //     SnapshotStatus: "STRING_VALUE",
 * //     SnapshotSource: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     NumCacheNodes: Number("int"),
 * //     PreferredAvailabilityZone: "STRING_VALUE",
 * //     PreferredOutpostArn: "STRING_VALUE",
 * //     CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     TopicArn: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     CacheParameterGroupName: "STRING_VALUE",
 * //     CacheSubnetGroupName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     SnapshotRetentionLimit: Number("int"),
 * //     SnapshotWindow: "STRING_VALUE",
 * //     NumNodeGroups: Number("int"),
 * //     AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //     NodeSnapshots: [ // NodeSnapshotList
 * //       { // NodeSnapshot
 * //         CacheClusterId: "STRING_VALUE",
 * //         NodeGroupId: "STRING_VALUE",
 * //         CacheNodeId: "STRING_VALUE",
 * //         NodeGroupConfiguration: { // NodeGroupConfiguration
 * //           NodeGroupId: "STRING_VALUE",
 * //           Slots: "STRING_VALUE",
 * //           ReplicaCount: Number("int"),
 * //           PrimaryAvailabilityZone: "STRING_VALUE",
 * //           ReplicaAvailabilityZones: [ // AvailabilityZonesList
 * //             "STRING_VALUE",
 * //           ],
 * //           PrimaryOutpostArn: "STRING_VALUE",
 * //           ReplicaOutpostArns: [ // OutpostArnsList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         CacheSize: "STRING_VALUE",
 * //         CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //         SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     DataTiering: "enabled" || "disabled",
 * //     Durability: "default" || "async" || "sync" || "disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.
 *
 * @throws {@link ElastiCacheServiceException}
 *
 * Base exception class for all service exceptions from ElastiCache service.
 *
 * @example CreateSnapshot - NonClustered Redis, 2 read-replicas
 * ```javascript
 * // Creates a snapshot of a non-clustered Redis cluster that has only three nodes, primary and two read-replicas. CacheClusterId must be a specific node in the cluster.
 * const input = {
 *   CacheClusterId: "threenoderedis-001",
 *   SnapshotName: "snapshot-2"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Snapshot: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterCreateTime: "2017-02-03T15:43:36.278Z",
 *     CacheClusterId: "threenoderedis-001",
 *     CacheNodeType: "cache.m3.medium",
 *     CacheParameterGroupName: "default.redis3.2",
 *     CacheSubnetGroupName: "default",
 *     Engine: "redis",
 *     EngineVersion: "3.2.4",
 *     NodeSnapshots: [
 *       {
 *         CacheNodeCreateTime: "2017-02-03T15:43:36.278Z",
 *         CacheNodeId: "0001",
 *         CacheSize: ""
 *       }
 *     ],
 *     NumCacheNodes: 1,
 *     Port: 6379,
 *     PreferredAvailabilityZone: "us-west-2c",
 *     PreferredMaintenanceWindow: "sat:08:00-sat:09:00",
 *     SnapshotName: "snapshot-2",
 *     SnapshotRetentionLimit: 1,
 *     SnapshotSource: "manual",
 *     SnapshotStatus: "creating",
 *     SnapshotWindow: "00:00-01:00",
 *     VpcId: "vpc-73c3cd17"
 *   }
 * }
 * *\/
 * ```
 *
 * @example CreateSnapshot - NonClustered Redis, no read-replicas
 * ```javascript
 * // Creates a snapshot of a non-clustered Redis cluster that has only one node.
 * const input = {
 *   CacheClusterId: "onenoderedis",
 *   SnapshotName: "snapshot-1"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Snapshot: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterCreateTime: "2017-02-03T15:43:36.278Z",
 *     CacheClusterId: "onenoderedis",
 *     CacheNodeType: "cache.m3.medium",
 *     CacheParameterGroupName: "default.redis3.2",
 *     CacheSubnetGroupName: "default",
 *     Engine: "redis",
 *     EngineVersion: "3.2.4",
 *     NodeSnapshots: [
 *       {
 *         CacheNodeCreateTime: "2017-02-03T15:43:36.278Z",
 *         CacheNodeId: "0001",
 *         CacheSize: ""
 *       }
 *     ],
 *     NumCacheNodes: 1,
 *     Port: 6379,
 *     PreferredAvailabilityZone: "us-west-2c",
 *     PreferredMaintenanceWindow: "sat:08:00-sat:09:00",
 *     SnapshotName: "snapshot-1",
 *     SnapshotRetentionLimit: 1,
 *     SnapshotSource: "manual",
 *     SnapshotStatus: "creating",
 *     SnapshotWindow: "00:00-01:00",
 *     VpcId: "vpc-73c3cd17"
 *   }
 * }
 * *\/
 * ```
 *
 * @example CreateSnapshot-clustered Redis
 * ```javascript
 * // Creates a snapshot of a clustered Redis cluster that has 2 shards, each with a primary and 4 read-replicas.
 * const input = {
 *   ReplicationGroupId: "clusteredredis",
 *   SnapshotName: "snapshot-2x5"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Snapshot: {
 *     AutoMinorVersionUpgrade: true,
 *     AutomaticFailover: "enabled",
 *     CacheNodeType: "cache.m3.medium",
 *     CacheParameterGroupName: "default.redis3.2.cluster.on",
 *     CacheSubnetGroupName: "default",
 *     Engine: "redis",
 *     EngineVersion: "3.2.4",
 *     NodeSnapshots: [
 *       {
 *         CacheSize: "",
 *         NodeGroupId: "0001"
 *       },
 *       {
 *         CacheSize: "",
 *         NodeGroupId: "0002"
 *       }
 *     ],
 *     NumNodeGroups: 2,
 *     Port: 6379,
 *     PreferredMaintenanceWindow: "mon:09:30-mon:10:30",
 *     ReplicationGroupDescription: "Redis cluster with 2 shards.",
 *     ReplicationGroupId: "clusteredredis",
 *     SnapshotName: "snapshot-2x5",
 *     SnapshotRetentionLimit: 1,
 *     SnapshotSource: "manual",
 *     SnapshotStatus: "creating",
 *     SnapshotWindow: "12:00-13:00",
 *     VpcId: "vpc-73c3cd17"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSnapshotCommand extends command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapshot",
  CreateSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotMessage;
      output: CreateSnapshotResult;
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
