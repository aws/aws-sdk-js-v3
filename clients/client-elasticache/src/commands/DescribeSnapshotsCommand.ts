// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSnapshotsListMessage, DescribeSnapshotsMessage } from "../models/models_0";
import { DescribeSnapshots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsListMessage, __MetadataBearer {}

/**
 * <p>Returns information about cluster or replication group snapshots. By default,
 *                 <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally
 *             describe a single snapshot, or just the snapshots associated with a particular cache
 *             cluster.</p>
 *          <note>
 *             <p>This operation is valid for Valkey or Redis OSS only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeSnapshotsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeSnapshotsMessage
 *   ReplicationGroupId: "STRING_VALUE",
 *   CacheClusterId: "STRING_VALUE",
 *   SnapshotName: "STRING_VALUE",
 *   SnapshotSource: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   ShowNodeGroupConfig: true || false,
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsListMessage
 * //   Marker: "STRING_VALUE",
 * //   Snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       SnapshotName: "STRING_VALUE",
 * //       ReplicationGroupId: "STRING_VALUE",
 * //       ReplicationGroupDescription: "STRING_VALUE",
 * //       CacheClusterId: "STRING_VALUE",
 * //       SnapshotStatus: "STRING_VALUE",
 * //       SnapshotSource: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       NumCacheNodes: Number("int"),
 * //       PreferredAvailabilityZone: "STRING_VALUE",
 * //       PreferredOutpostArn: "STRING_VALUE",
 * //       CacheClusterCreateTime: new Date("TIMESTAMP"),
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       CacheParameterGroupName: "STRING_VALUE",
 * //       CacheSubnetGroupName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       SnapshotRetentionLimit: Number("int"),
 * //       SnapshotWindow: "STRING_VALUE",
 * //       NumNodeGroups: Number("int"),
 * //       AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //       NodeSnapshots: [ // NodeSnapshotList
 * //         { // NodeSnapshot
 * //           CacheClusterId: "STRING_VALUE",
 * //           NodeGroupId: "STRING_VALUE",
 * //           CacheNodeId: "STRING_VALUE",
 * //           NodeGroupConfiguration: { // NodeGroupConfiguration
 * //             NodeGroupId: "STRING_VALUE",
 * //             Slots: "STRING_VALUE",
 * //             ReplicaCount: Number("int"),
 * //             PrimaryAvailabilityZone: "STRING_VALUE",
 * //             ReplicaAvailabilityZones: [ // AvailabilityZonesList
 * //               "STRING_VALUE",
 * //             ],
 * //             PrimaryOutpostArn: "STRING_VALUE",
 * //             ReplicaOutpostArns: [ // OutpostArnsList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           CacheSize: "STRING_VALUE",
 * //           CacheNodeCreateTime: new Date("TIMESTAMP"),
 * //           SnapshotCreateTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       KmsKeyId: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       DataTiering: "enabled" || "disabled",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *  <p>The requested snapshot name does not refer to an existing snapshot.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeSnapshots
 * ```javascript
 * // Returns information about the snapshot mysnapshot. By default.
 * const input = {
 *   SnapshotName: "snapshot-20161212"
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "",
 *   Snapshots: [
 *     {
 *       AutoMinorVersionUpgrade: true,
 *       CacheClusterCreateTime: "2016-12-21T22:27:12.543Z",
 *       CacheClusterId: "my-redis5",
 *       CacheNodeType: "cache.m3.large",
 *       CacheParameterGroupName: "default.redis3.2",
 *       CacheSubnetGroupName: "default",
 *       Engine: "redis",
 *       EngineVersion: "3.2.4",
 *       NodeSnapshots: [
 *         {
 *           CacheNodeCreateTime: "2016-12-21T22:27:12.543Z",
 *           CacheNodeId: "0001",
 *           CacheSize: "3 MB",
 *           SnapshotCreateTime: "2016-12-21T22:30:26Z"
 *         }
 *       ],
 *       NumCacheNodes: 1,
 *       Port: 6379,
 *       PreferredAvailabilityZone: "us-east-1c",
 *       PreferredMaintenanceWindow: "fri:05:30-fri:06:30",
 *       SnapshotName: "snapshot-20161212",
 *       SnapshotRetentionLimit: 7,
 *       SnapshotSource: "manual",
 *       SnapshotStatus: "available",
 *       SnapshotWindow: "10:00-11:00",
 *       VpcId: "vpc-91280df6"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSnapshotsCommand extends $Command
  .classBuilder<
    DescribeSnapshotsCommandInput,
    DescribeSnapshotsCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeSnapshots", {})
  .n("ElastiCacheClient", "DescribeSnapshotsCommand")
  .sc(DescribeSnapshots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotsMessage;
      output: DescribeSnapshotsListMessage;
    };
    sdk: {
      input: DescribeSnapshotsCommandInput;
      output: DescribeSnapshotsCommandOutput;
    };
  };
}
