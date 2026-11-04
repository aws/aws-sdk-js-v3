// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { CreateDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBClusterCommand}.
 */
export interface CreateDBClusterCommandInput extends CreateDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterCommand}.
 */
export interface CreateDBClusterCommandOutput extends CreateDBClusterResult, __MetadataBearer {}

/**
 * Creates a new Amazon Neptune DB cluster.
 *
 * You can use the `ReplicationSourceIdentifier` parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.
 *
 * Note that when you create a new cluster using `CreateDBCluster` directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its `DeletionProtection` field is set to `false`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBClusterMessage
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   BackupRetentionPeriod: Number("int"),
 *   CharacterSetName: "STRING_VALUE",
 *   CopyTagsToSnapshot: true || false,
 *   DatabaseName: "STRING_VALUE",
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   DBSubnetGroupName: "STRING_VALUE",
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   Port: Number("int"),
 *   MasterUsername: "STRING_VALUE",
 *   MasterUserPassword: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   ReplicationSourceIdentifier: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   StorageEncrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DeletionProtection: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterResult
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
 * @param CreateDBClusterCommandInput - {@link CreateDBClusterCommandInput}
 * @returns {@link CreateDBClusterCommandOutput}
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *
 * User already has a DB cluster with the given identifier.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * *DBClusterIdentifier* does not refer to an existing DB cluster.
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *
 * *DBClusterParameterGroupName* does not refer to an existing DB Cluster parameter group.
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *
 * User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *
 * *DBInstanceIdentifier* does not refer to an existing DB instance.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *
 * The `GlobalClusterIdentifier` doesn't refer to an existing global database cluster.
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *
 * There is insufficient storage available for the current action. You may be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The DB cluster is not in a valid state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The specified DB instance is not in the *available* state.
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *
 * The DB subnet group cannot be deleted because it is in use.
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *
 * The global cluster is in an invalid state and can't perform the requested operation.
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
export class CreateDBClusterCommand extends command<CreateDBClusterCommandInput, CreateDBClusterCommandOutput>(
  _ep0,
  _mw1,
  "CreateDBCluster",
  CreateDBCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterMessage;
      output: CreateDBClusterResult;
    };
    sdk: {
      input: CreateDBClusterCommandInput;
      output: CreateDBClusterCommandOutput;
    };
  };
}
