// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDBClusterSnapshotMessage, DeleteDBClusterSnapshotResult } from "../models/models_0";
import { DeleteDBClusterSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandInput extends DeleteDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterSnapshotCommand}.
 */
export interface DeleteDBClusterSnapshotCommandOutput extends DeleteDBClusterSnapshotResult, __MetadataBearer {}

/**
 * Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.
 *
 * > **Note:** The DB cluster snapshot must be in the `available` state to be deleted.
 *
 * For more information on Amazon Aurora, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     EngineMode: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     StorageEncryptionType: "none" || "sse-kms" || "sse-rds",
 * //     BackupRetentionPeriod: Number("int"),
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageType: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBSystemId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterSnapshotCommandInput - {@link DeleteDBClusterSnapshotCommandInput}
 * @returns {@link DeleteDBClusterSnapshotCommandOutput}
 * @see {@link DeleteDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing DB cluster snapshot.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value isn't a valid DB cluster snapshot state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To delete a DB cluster snapshot
 * ```javascript
 * //
 * const input = {
 *   DBClusterSnapshotIdentifier: "mydbclustersnapshot"
 * };
 * const command = new DeleteDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterSnapshot: {
 *     AllocatedStorage: 0,
 *     AvailabilityZones: [
 *       "us-east-1a",
 *       "us-east-1b",
 *       "us-east-1e"
 *     ],
 *     ClusterCreateTime: "2019-04-15T14:18:42.785Z",
 *     DBClusterIdentifier: "mydbcluster",
 *     DBClusterSnapshotArn: "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:mydbclustersnapshot",
 *     DBClusterSnapshotIdentifier: "mydbclustersnapshot",
 *     Engine: "aurora-mysql",
 *     EngineVersion: "5.7.mysql_aurora.2.04.2",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     LicenseModel: "aurora-mysql",
 *     MasterUsername: "myadmin",
 *     PercentProgress: 100,
 *     Port: 0,
 *     SnapshotCreateTime: "2019-06-18T21:21:00.469Z",
 *     SnapshotType: "manual",
 *     Status: "available",
 *     StorageEncrypted: true,
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBClusterSnapshotCommand extends command<DeleteDBClusterSnapshotCommandInput, DeleteDBClusterSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDBClusterSnapshot",
  DeleteDBClusterSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterSnapshotMessage;
      output: DeleteDBClusterSnapshotResult;
    };
    sdk: {
      input: DeleteDBClusterSnapshotCommandInput;
      output: DeleteDBClusterSnapshotCommandOutput;
    };
  };
}
