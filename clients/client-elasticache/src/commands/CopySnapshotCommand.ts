// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopySnapshotMessage, CopySnapshotResult } from "../models/models_0";
import { CopySnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandInput extends CopySnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopySnapshotCommand}.
 */
export interface CopySnapshotCommandOutput extends CopySnapshotResult, __MetadataBearer {}

/**
 * Makes a copy of an existing snapshot.
 *
 * > **Note:** This operation is valid for Valkey or Redis OSS only.
 *
 * > **Important:** Users or groups that have permissions to use the `CopySnapshot` operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the `CopySnapshot` operation. For more information about using IAM to control the use of ElastiCache operations, see [Exporting Snapshots](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html) and [Authentication & Access Control](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/IAM.html).
 *
 * You could receive the following error messages.
 *
 * **Error Messages**
 *
 * - **Error Message:** The S3 bucket %s is outside of the region.
 *
 *   **Solution:** Create an Amazon S3 bucket in the same region as your snapshot. For more information, see [Step 1: Create an Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-create-s3-bucket) in the ElastiCache User Guide.
 * - **Error Message:** The S3 bucket %s does not exist.
 *
 *   **Solution:** Create an Amazon S3 bucket in the same region as your snapshot. For more information, see [Step 1: Create an Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-create-s3-bucket) in the ElastiCache User Guide.
 * - **Error Message:** The S3 bucket %s is not owned by the authenticated user.
 *
 *   **Solution:** Create an Amazon S3 bucket in the same region as your snapshot. For more information, see [Step 1: Create an Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-create-s3-bucket) in the ElastiCache User Guide.
 * - **Error Message:** The authenticated user does not have sufficient permissions to perform the desired activity.
 *
 *   **Solution:** Contact your system administrator to get the needed permissions.
 * - **Error Message:** The S3 bucket %s already contains an object with key %s.
 *
 *   **Solution:** Give the `TargetSnapshotName` a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for `TargetSnapshotName`.
 * - **Error Message:** ElastiCache has not been granted READ permissions %s on the S3 Bucket.
 *
 *   **Solution:** Add List and Read permissions on the bucket. For more information, see [Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-grant-access) in the ElastiCache User Guide.
 * - **Error Message:** ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.
 *
 *   **Solution:** Add Upload/Delete permissions on the bucket. For more information, see [Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-grant-access) in the ElastiCache User Guide.
 * - **Error Message:** ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.
 *
 *   **Solution:** Add View Permissions on the bucket. For more information, see [Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/backups-exporting.html#backups-exporting-grant-access) in the ElastiCache User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopySnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopySnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // CopySnapshotMessage
 *   SourceSnapshotName: "STRING_VALUE", // required
 *   TargetSnapshotName: "STRING_VALUE", // required
 *   TargetBucket: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopySnapshotResult
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
 * @param CopySnapshotCommandInput - {@link CopySnapshotCommandInput}
 * @returns {@link CopySnapshotCommandOutput}
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSnapshotStateFault} (client fault)
 *
 * The current state of the snapshot does not allow the requested operation to occur.
 *
 * @throws {@link SnapshotAlreadyExistsFault} (client fault)
 *
 * You already have a snapshot with the given name.
 *
 * @throws {@link SnapshotNotFoundFault} (client fault)
 *
 * The requested snapshot name does not refer to an existing snapshot.
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
 * @example CopySnapshot
 * ```javascript
 * // Copies a snapshot to a specified name.
 * const input = {
 *   SourceSnapshotName: "my-snapshot",
 *   TargetBucket: "",
 *   TargetSnapshotName: "my-snapshot-copy"
 * };
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Snapshot: {
 *     AutoMinorVersionUpgrade: true,
 *     CacheClusterCreateTime: "2016-12-21T22:24:04.955Z",
 *     CacheClusterId: "my-redis4",
 *     CacheNodeType: "cache.m3.large",
 *     CacheParameterGroupName: "default.redis3.2",
 *     CacheSubnetGroupName: "default",
 *     Engine: "redis",
 *     EngineVersion: "3.2.4",
 *     NodeSnapshots: [
 *       {
 *         CacheNodeCreateTime: "2016-12-21T22:24:04.955Z",
 *         CacheNodeId: "0001",
 *         CacheSize: "3 MB",
 *         SnapshotCreateTime: "2016-12-28T07:00:52Z"
 *       }
 *     ],
 *     NumCacheNodes: 1,
 *     Port: 6379,
 *     PreferredAvailabilityZone: "us-east-1c",
 *     PreferredMaintenanceWindow: "tue:09:30-tue:10:30",
 *     SnapshotName: "my-snapshot-copy",
 *     SnapshotRetentionLimit: 7,
 *     SnapshotSource: "manual",
 *     SnapshotStatus: "creating",
 *     SnapshotWindow: "07:00-08:00",
 *     VpcId: "vpc-3820329f3"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopySnapshotCommand extends command<CopySnapshotCommandInput, CopySnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CopySnapshot",
  CopySnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopySnapshotMessage;
      output: CopySnapshotResult;
    };
    sdk: {
      input: CopySnapshotCommandInput;
      output: CopySnapshotCommandOutput;
    };
  };
}
