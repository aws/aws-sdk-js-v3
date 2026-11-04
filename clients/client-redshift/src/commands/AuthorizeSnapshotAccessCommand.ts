// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AuthorizeSnapshotAccessMessage, AuthorizeSnapshotAccessResult } from "../models/models_0";
import { AuthorizeSnapshotAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AuthorizeSnapshotAccessCommand}.
 */
export interface AuthorizeSnapshotAccessCommandInput extends AuthorizeSnapshotAccessMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeSnapshotAccessCommand}.
 */
export interface AuthorizeSnapshotAccessCommandOutput extends AuthorizeSnapshotAccessResult, __MetadataBearer {}

/**
 * Authorizes the specified Amazon Web Services account to restore the specified snapshot.
 *
 * For more information about working with snapshots, go to [Amazon Redshift Snapshots](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // AuthorizeSnapshotAccessMessage
 *   SnapshotIdentifier: "STRING_VALUE",
 *   SnapshotArn: "STRING_VALUE",
 *   SnapshotClusterIdentifier: "STRING_VALUE",
 *   AccountWithRestoreAccess: "STRING_VALUE", // required
 * };
 * const command = new AuthorizeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeSnapshotAccessResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotIdentifier: "STRING_VALUE",
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     ClusterVersion: "STRING_VALUE",
 * //     EngineFullVersion: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     NumberOfNodes: Number("int"),
 * //     DBName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     EncryptedWithHSM: true || false,
 * //     AccountsWithRestoreAccess: [ // AccountsWithRestoreAccessList
 * //       { // AccountWithRestoreAccess
 * //         AccountId: "STRING_VALUE",
 * //         AccountAlias: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerAccount: "STRING_VALUE",
 * //     TotalBackupSizeInMegaBytes: Number("double"),
 * //     ActualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //     BackupProgressInMegaBytes: Number("double"),
 * //     CurrentBackupRateInMegaBytesPerSecond: Number("double"),
 * //     EstimatedSecondsToCompletion: Number("long"),
 * //     ElapsedTimeInSeconds: Number("long"),
 * //     SourceRegion: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RestorableNodeTypes: [ // RestorableNodeTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     EnhancedVpcRouting: true || false,
 * //     MaintenanceTrackName: "STRING_VALUE",
 * //     ManualSnapshotRetentionPeriod: Number("int"),
 * //     ManualSnapshotRemainingDays: Number("int"),
 * //     SnapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //     MasterPasswordSecretArn: "STRING_VALUE",
 * //     MasterPasswordSecretKmsKeyId: "STRING_VALUE",
 * //     SnapshotArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeSnapshotAccessCommandInput - {@link AuthorizeSnapshotAccessCommandInput}
 * @returns {@link AuthorizeSnapshotAccessCommandOutput}
 * @see {@link AuthorizeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthorizationAlreadyExistsFault} (client fault)
 *
 * The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.
 *
 * @throws {@link AuthorizationQuotaExceededFault} (client fault)
 *
 * The authorization quota for the cluster security group has been reached.
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *
 * The snapshot identifier does not refer to an existing cluster snapshot.
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *
 * The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *
 * The specified cluster snapshot is not in the `available` state, or other accounts are authorized to access the snapshot.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * The encryption key has exceeded its grant limit in Amazon Web Services KMS.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class AuthorizeSnapshotAccessCommand extends command<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput>(
  _ep0,
  _mw0,
  "AuthorizeSnapshotAccess",
  AuthorizeSnapshotAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeSnapshotAccessMessage;
      output: AuthorizeSnapshotAccessResult;
    };
    sdk: {
      input: AuthorizeSnapshotAccessCommandInput;
      output: AuthorizeSnapshotAccessCommandOutput;
    };
  };
}
