// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_0";
import { ModifyDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandInput extends ModifyDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterCommand}.
 */
export interface ModifyDBClusterCommandOutput extends ModifyDBClusterResult, __MetadataBearer {}

/**
 * Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   NewDBClusterIdentifier: "STRING_VALUE",
 *   ApplyImmediately: true || false,
 *   BackupRetentionPeriod: Number("int"),
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Port: Number("int"),
 *   MasterUserPassword: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   CloudwatchLogsExportConfiguration: { // CloudwatchLogsExportConfiguration
 *     EnableLogTypes: [ // LogTypeList
 *       "STRING_VALUE",
 *     ],
 *     DisableLogTypes: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 *   DBInstanceParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *   },
 *   StorageType: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new ModifyDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBClusterResult
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
 * @param ModifyDBClusterCommandInput - {@link ModifyDBClusterCommandInput}
 * @returns {@link ModifyDBClusterCommandOutput}
 * @see {@link ModifyDBClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The DB cluster is not in a valid state.
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The specified DB instance is not in the *available* state.
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *
 * The state of the DB security group does not allow deletion.
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *
 * The DB subnet group cannot be deleted because it is in use.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * DB subnet group does not cover all Availability Zones after it is created because users' change.
 *
 * @throws {@link NetworkTypeNotSupportedFault} (client fault)
 *
 * The specified *NetworkType* is not supported for the DB cluster, DB subnet group, or orderable DB instance option.
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *
 * Request would result in user exceeding the allowed amount of storage available across all DB instances.
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *
 * *StorageType* specified cannot be associated with the DB Instance.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class ModifyDBClusterCommand extends command<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBCluster",
  ModifyDBCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBClusterMessage;
      output: ModifyDBClusterResult;
    };
    sdk: {
      input: ModifyDBClusterCommandInput;
      output: ModifyDBClusterCommandOutput;
    };
  };
}
