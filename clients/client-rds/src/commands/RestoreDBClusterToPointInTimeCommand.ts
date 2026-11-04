// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_1";
import { RestoreDBClusterToPointInTime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBClusterToPointInTimeCommand}.
 */
export interface RestoreDBClusterToPointInTimeCommandOutput extends RestoreDBClusterToPointInTimeResult, __MetadataBearer {}

/**
 * Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before `LatestRestorableTime` for up to `BackupRetentionPeriod` days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group. Unless the `RestoreType` is set to `copy-on-write`, the restore may occur in a different Availability Zone (AZ) from the original DB cluster. The AZ where RDS restores the DB cluster depends on the AZs in the specified subnet group.
 *
 * You can use the `EnableVPCNetworking` and `EnableInternetAccessGateway` parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set `EnableVPCNetworking` to `false` to disable the VPC network interface (ENI) for the cluster. `EnableInternetAccessGateway` enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using `EnableIAMDatabaseAuthentication`. Once the cluster is restored, you need to modify the DB cluster to update `MasterUserAuthenticationType` to `iam-db-auth`.
 *
 * You can use the `AssociatedRoles` parameter to associate one or more Amazon Web Services Identity and Access Management (IAM) roles with an Aurora DB cluster when you restore it to a point in time.
 *
 * > **Note:** For Aurora, this operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the `CreateDBInstance` operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in `DBClusterIdentifier`. You can create DB instances only after the `RestoreDBClusterToPointInTime` operation has completed and the DB cluster is available.
 *
 * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RestoreDBClusterToPointInTimeMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RestoreType: "STRING_VALUE",
 *   SourceDBClusterIdentifier: "STRING_VALUE",
 *   RestoreToTime: new Date("TIMESTAMP"),
 *   UseLatestRestorableTime: true || false,
 *   Port: Number("int"),
 *   DBSubnetGroupName: "STRING_VALUE",
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
 *   BacktrackWindow: Number("long"),
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   Domain: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   DBClusterInstanceClass: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Iops: Number("int"),
 *   NetworkType: "STRING_VALUE",
 *   SourceDbClusterResourceId: "STRING_VALUE",
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *     SecondsUntilAutoPause: Number("int"),
 *   },
 *   ScalingConfiguration: { // ScalingConfiguration
 *     MinCapacity: Number("int"),
 *     MaxCapacity: Number("int"),
 *     AutoPause: true || false,
 *     SecondsUntilAutoPause: Number("int"),
 *     TimeoutAction: "STRING_VALUE",
 *     SecondsBeforeTimeout: Number("int"),
 *   },
 *   EngineMode: "STRING_VALUE",
 *   RdsCustomClusterConfiguration: { // RdsCustomClusterConfiguration
 *     InterconnectSubnetId: "STRING_VALUE",
 *     TransitGatewayMulticastDomainId: "STRING_VALUE",
 *     ReplicaMode: "open-read-only" || "mounted",
 *   },
 *   MonitoringInterval: Number("int"),
 *   MonitoringRoleArn: "STRING_VALUE",
 *   EnablePerformanceInsights: true || false,
 *   PerformanceInsightsKMSKeyId: "STRING_VALUE",
 *   PerformanceInsightsRetentionPeriod: Number("int"),
 *   BackupRetentionPeriod: Number("int"),
 *   PreferredBackupWindow: "STRING_VALUE",
 *   EngineLifecycleSupport: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "STRING_VALUE",
 *       Tags: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   EnableVPCNetworking: true || false,
 *   EnableInternetAccessGateway: true || false,
 *   AssociatedRoles: [ // DBClusterAssociatedRoles
 *     { // DBClusterAssociatedRole
 *       RoleArn: "STRING_VALUE", // required
 *       FeatureName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBClusterToPointInTimeResult
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
 * //     CustomEndpoints: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
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
 * //     UpgradeRolloutOrder: "first" || "second" || "last",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     StatusInfos: [ // DBClusterStatusInfoList
 * //       { // DBClusterStatusInfo
 * //         StatusType: "STRING_VALUE",
 * //         Normal: true || false,
 * //         Status: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
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
 * //     StorageEncryptionType: "none" || "sse-kms" || "sse-rds",
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
 * //     EarliestBacktrackTime: new Date("TIMESTAMP"),
 * //     BacktrackWindow: Number("long"),
 * //     BacktrackConsumedChangeRecords: Number("long"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     Capacity: Number("int"),
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
 * //       MasterUserPassword: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       StorageType: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       RdsCustomClusterConfiguration: { // RdsCustomClusterConfiguration
 * //         InterconnectSubnetId: "STRING_VALUE",
 * //         TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //         ReplicaMode: "open-read-only" || "mounted",
 * //       },
 * //       Iops: Number("int"),
 * //       CertificateDetails: { // CertificateDetails
 * //         CAIdentifier: "STRING_VALUE",
 * //         ValidTill: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     EngineMode: "STRING_VALUE",
 * //     ScalingConfigurationInfo: { // ScalingConfigurationInfo
 * //       MinCapacity: Number("int"),
 * //       MaxCapacity: Number("int"),
 * //       AutoPause: true || false,
 * //       SecondsUntilAutoPause: Number("int"),
 * //       TimeoutAction: "STRING_VALUE",
 * //       SecondsBeforeTimeout: Number("int"),
 * //     },
 * //     RdsCustomClusterConfiguration: {
 * //       InterconnectSubnetId: "STRING_VALUE",
 * //       TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //       ReplicaMode: "open-read-only" || "mounted",
 * //     },
 * //     DBClusterInstanceClass: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     StorageThroughput: Number("int"),
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     PubliclyAccessible: true || false,
 * //     AutoMinorVersionUpgrade: true || false,
 * //     DeletionProtection: true || false,
 * //     HttpEndpointEnabled: true || false,
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     CopyTagsToSnapshot: true || false,
 * //     CrossAccountClone: true || false,
 * //     DomainMemberships: [ // DomainMembershipList
 * //       { // DomainMembership
 * //         Domain: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FQDN: "STRING_VALUE",
 * //         IAMRoleName: "STRING_VALUE",
 * //         OU: "STRING_VALUE",
 * //         AuthSecretArn: "STRING_VALUE",
 * //         DnsIps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //     GlobalWriteForwardingRequested: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //       SecondsUntilAutoPause: Number("int"),
 * //     },
 * //     ServerlessV2PlatformVersion: "STRING_VALUE",
 * //     MonitoringInterval: Number("int"),
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     DatabaseInsightsMode: "standard" || "advanced",
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     PerformanceInsightsRetentionPeriod: Number("int"),
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     LocalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "requested",
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     LimitlessDatabase: { // LimitlessDatabase
 * //       Status: "active" || "not-in-use" || "enabled" || "disabled" || "enabling" || "disabling" || "modifying-max-capacity" || "error",
 * //       MinRequiredACU: Number("double"),
 * //     },
 * //     ClusterScalabilityType: "standard" || "limitless",
 * //     CertificateDetails: {
 * //       CAIdentifier: "STRING_VALUE",
 * //       ValidTill: new Date("TIMESTAMP"),
 * //     },
 * //     EngineLifecycleSupport: "STRING_VALUE",
 * //     VPCNetworkingEnabled: true || false,
 * //     InternetAccessGatewayEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBClusterToPointInTimeCommandInput - {@link RestoreDBClusterToPointInTimeCommandInput}
 * @returns {@link RestoreDBClusterToPointInTimeCommandOutput}
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *
 * The user already has a DB cluster with the given identifier.
 *
 * @throws {@link DBClusterAutomatedBackupNotFoundFault} (client fault)
 *
 * No automated backup for this DB cluster was found.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *
 * `DBClusterParameterGroupName` doesn't refer to an existing DB cluster parameter group.
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *
 * The user attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.
 *
 * @throws {@link DBClusterRoleQuotaExceededFault} (client fault)
 *
 * You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing DB cluster snapshot.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * `DBSubnetGroupName` doesn't refer to an existing DB subnet group.
 *
 * @throws {@link DomainNotFoundFault} (client fault)
 *
 * `Domain` doesn't refer to an existing Active Directory domain.
 *
 * @throws {@link InsufficientDBClusterCapacityFault} (client fault)
 *
 * The DB cluster doesn't have enough capacity for the current operation.
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *
 * The specified DB instance class isn't available in the specified Availability Zone.
 *
 * @throws {@link InsufficientStorageClusterCapacityFault} (client fault)
 *
 * There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *
 * The supplied value isn't a valid DB cluster snapshot state.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *
 * The state of the DB snapshot doesn't allow deletion.
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *
 * Cannot restore from VPC backup to non-VPC DB instance.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *
 * The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * An error occurred accessing an Amazon Web Services KMS key.
 *
 * @throws {@link NetworkTypeNotSupported} (client fault)
 *
 * The network type is invalid for the DB instance. Valid nework type values are `IPV4` and `DUAL`.
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *
 * The specified option group could not be found.
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed amount of storage available across all DB instances.
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *
 * The specified `StorageType` can't be associated with the DB instance.
 *
 * @throws {@link VpcEncryptionControlViolationException} (client fault)
 *
 * The operation violates VPC encryption control settings. Make sure that your DB instance type supports the Nitro encryption-in-transit capability, or modify your VPC's encryption controls to not enforce encryption-in-transit.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To restore a DB cluster to a specified time
 * ```javascript
 * // The following example restores the DB cluster named database-4 to the latest possible time. Using copy-on-write as the restore type restores the new DB cluster as a clone of the source DB cluster.
 * const input = {
 *   DBClusterIdentifier: "sample-cluster-clone",
 *   RestoreType: "copy-on-write",
 *   SourceDBClusterIdentifier: "database-4",
 *   UseLatestRestorableTime: true
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCluster: {
 *     AllocatedStorage: 1,
 *     AssociatedRoles:     [],
 *     AvailabilityZones: [
 *       "us-west-2c",
 *       "us-west-2a",
 *       "us-west-2b"
 *     ],
 *     BackupRetentionPeriod: 7,
 *     CloneGroupId: "8d19331a-099a-45a4-b4aa-11aa22bb33cc44dd",
 *     ClusterCreateTime: "2020-03-10T19:57:38.967Z",
 *     CopyTagsToSnapshot: false,
 *     CrossAccountClone: false,
 *     DBClusterArn: "arn:aws:rds:us-west-2:123456789012:cluster:sample-cluster-clone",
 *     DBClusterIdentifier: "sample-cluster-clone",
 *     DBClusterMembers:     [],
 *     DBClusterParameterGroup: "default.aurora-postgresql10",
 *     DBSubnetGroup: "default",
 *     DatabaseName: "",
 *     DbClusterResourceId: "cluster-BIZ77GDSA2XBSTNPFW1EXAMPLE",
 *     DeletionProtection: false,
 *     Endpoint: "sample-cluster-clone.cluster-############.us-west-2.rds.amazonaws.com",
 *     Engine: "aurora-postgresql",
 *     EngineMode: "provisioned",
 *     EngineVersion: "10.7",
 *     HostedZoneId: "Z1PVIF0EXAMPLE",
 *     HttpEndpointEnabled: false,
 *     IAMDatabaseAuthenticationEnabled: false,
 *     KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/287364e4-33e3-4755-a3b0-a1b2c3d4e5f6",
 *     MasterUsername: "postgres",
 *     MultiAZ: false,
 *     Port: 5432,
 *     PreferredBackupWindow: "09:33-10:03",
 *     PreferredMaintenanceWindow: "sun:12:22-sun:12:52",
 *     ReadReplicaIdentifiers:     [],
 *     ReaderEndpoint: "sample-cluster-clone.cluster-ro-############.us-west-2.rds.amazonaws.com",
 *     Status: "creating",
 *     StorageEncrypted: true,
 *     VpcSecurityGroups: [
 *       {
 *         Status: "active",
 *         VpcSecurityGroupId: "sg-########"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @example To restore an Aurora DB cluster to a point in time without VPC networking
 * ```javascript
 * // The following example restores an Aurora DB cluster to the latest possible time without VPC networking and with internet-based connectivity enabled through an internet access gateway. The EnableVPCNetworking and EnableInternetAccessGateway parameters must always be specified together. IAM database authentication is required when both parameters are specified.
 * const input = {
 *   DBClusterIdentifier: "sample-cluster-restored",
 *   EnableIAMDatabaseAuthentication: true,
 *   EnableInternetAccessGateway: true,
 *   EnableVPCNetworking: false,
 *   RestoreType: "copy-on-write",
 *   SourceDBClusterIdentifier: "sample-cluster",
 *   UseLatestRestorableTime: true
 * };
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCluster: {
 *     AllocatedStorage: 1,
 *     AssociatedRoles:     [],
 *     AvailabilityZones: [
 *       "us-east-1c",
 *       "us-east-1a",
 *       "us-east-1b"
 *     ],
 *     BackupRetentionPeriod: 7,
 *     ClusterCreateTime: "2026-01-15T22:14:02.000Z",
 *     CopyTagsToSnapshot: false,
 *     CrossAccountClone: false,
 *     DBClusterArn: "arn:aws:rds:us-east-1:654654253058:cluster:sample-cluster-restored",
 *     DBClusterIdentifier: "sample-cluster-restored",
 *     DBClusterMembers:     [],
 *     DBClusterParameterGroup: "default.aurora-postgresql17",
 *     DatabaseName: "",
 *     DbClusterResourceId: "cluster-ABCDEFGHIJKLMNOPQRSTUVWXYZ1234",
 *     DeletionProtection: false,
 *     Engine: "aurora-postgresql",
 *     EngineMode: "provisioned",
 *     EngineVersion: "17.7",
 *     HttpEndpointEnabled: false,
 *     IAMDatabaseAuthenticationEnabled: true,
 *     MasterUsername: "postgres",
 *     MultiAZ: false,
 *     Port: 5432,
 *     PreferredBackupWindow: "06:15-06:45",
 *     PreferredMaintenanceWindow: "sat:03:44-sat:04:14",
 *     ReadReplicaIdentifiers:     [],
 *     Status: "creating",
 *     StorageEncrypted: false,
 *     VpcSecurityGroups:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RestoreDBClusterToPointInTimeCommand extends command<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDBClusterToPointInTime",
  RestoreDBClusterToPointInTime$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDBClusterToPointInTimeMessage;
      output: RestoreDBClusterToPointInTimeResult;
    };
    sdk: {
      input: RestoreDBClusterToPointInTimeCommandInput;
      output: RestoreDBClusterToPointInTimeCommandOutput;
    };
  };
}
