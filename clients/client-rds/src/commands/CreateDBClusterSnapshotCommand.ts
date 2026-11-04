// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/models_0";
import { CreateDBClusterSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandInput extends CreateDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandOutput extends CreateDBClusterSnapshotResult, __MetadataBearer {}

/**
 * Creates a snapshot of a DB cluster.
 *
 * For more information on Amazon Aurora, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterSnapshotResult
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
 * @param CreateDBClusterSnapshotCommandInput - {@link CreateDBClusterSnapshotCommandInput}
 * @returns {@link CreateDBClusterSnapshotCommandOutput}
 * @see {@link CreateDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *
 * The user already has a DB cluster snapshot with the given identifier.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value isn't a valid DB cluster snapshot state.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB snapshots.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To create a DB cluster snapshot
 * ```javascript
 * // The following example creates a DB cluster snapshot.
 * const input = {
 *   DBClusterIdentifier: "mydbclustersnapshot",
 *   DBClusterSnapshotIdentifier: "mydbcluster"
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterSnapshot: {
 *     AllocatedStorage: 1,
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
 *     PercentProgress: 0,
 *     Port: 0,
 *     SnapshotCreateTime: "2019-06-18T21:21:00.469Z",
 *     SnapshotType: "manual",
 *     Status: "creating",
 *     StorageEncrypted: true,
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBClusterSnapshotCommand extends command<CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBClusterSnapshot",
  CreateDBClusterSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterSnapshotMessage;
      output: CreateDBClusterSnapshotResult;
    };
    sdk: {
      input: CreateDBClusterSnapshotCommandInput;
      output: CreateDBClusterSnapshotCommandOutput;
    };
  };
}
