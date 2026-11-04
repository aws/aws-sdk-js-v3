// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_0";
import { RestoreDBClusterFromSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandInput extends RestoreDBClusterFromSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterFromSnapshotCommand}.
 */
export interface RestoreDBClusterFromSnapshotCommandOutput extends RestoreDBClusterFromSnapshotResult, __MetadataBearer {}

/**
 * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
 *
 * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
 *
 * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // RestoreDBClusterFromSnapshotMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   StorageType: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBClusterFromSnapshotResult
 * //   DBCluster: { // DBCluster
 * //     AllocatedStorage: Number("int"),
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     CharacterSetName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //       { // DBClusterOptionGroupStatus
 * //         DBClusterOptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterMembers: [ // DBClusterMemberList
 * //       { // DBClusterMember
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         IsClusterWriter: true || false,
 * //         DBClusterParameterGroupStatus: "STRING_VALUE",
 * //         PromotionTier: Number("int"),
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HostedZoneId: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     AssociatedRoles: [ // DBClusterRoles
 * //       { // DBClusterRole
 * //         RoleArn: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FeatureName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     CopyTagsToSnapshot: true || false,
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     PendingModifiedValues: { // ClusterPendingModifiedValues
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       StorageType: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Iops: Number("int"),
 * //       NetworkType: "STRING_VALUE",
 * //     },
 * //     DeletionProtection: true || false,
 * //     CrossAccountClone: true || false,
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //     },
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     StorageType: "STRING_VALUE",
 * //     NetworkType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBClusterFromSnapshotCommandInput - {@link RestoreDBClusterFromSnapshotCommandInput}
 * @returns {@link RestoreDBClusterFromSnapshotCommandOutput}
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *
 * User already has a DB cluster with the given identifier.
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *
 * *DBClusterParameterGroupName* does not refer to an existing DB Cluster parameter group.
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *
 * User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *
 * *DBClusterSnapshotIdentifier* does not refer to an existing DB cluster snapshot.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *
 * *DBSnapshotIdentifier* does not refer to an existing DB snapshot.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *
 * The DB cluster does not have enough capacity for the current operation.
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *
 * There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value is not a valid DB cluster snapshot state.
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *
 * The state of the DB snapshot does not allow deletion.
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *
 * Cannot restore from vpc backup to non-vpc DB instance.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * DB subnet group does not cover all Availability Zones after it is created because users' change.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * Error accessing KMS key.
 *
 * @throws {@link NetworkTypeNotSupportedFault} (client fault)
 *
 * The specified *NetworkType* is not supported for the DB cluster, DB subnet group, or orderable DB instance option.
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *
 * The designated option group could not be found.
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed amount of storage available across all DB instances.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class RestoreDBClusterFromSnapshotCommand extends command<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDBClusterFromSnapshot",
  RestoreDBClusterFromSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDBClusterFromSnapshotMessage;
      output: RestoreDBClusterFromSnapshotResult;
    };
    sdk: {
      input: RestoreDBClusterFromSnapshotCommandInput;
      output: RestoreDBClusterFromSnapshotCommandOutput;
    };
  };
}
