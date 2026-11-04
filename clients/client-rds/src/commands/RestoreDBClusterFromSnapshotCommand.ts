// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/models_1";
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
 * The target DB cluster is created from the source snapshot with a default configuration. If you don't specify a security group, the new DB cluster is associated with the default security group.
 *
 * You can use the `EnableVPCNetworking` and `EnableInternetAccessGateway` parameters together to restore an Aurora PostgreSQL cluster without VPC networking and with internet-based connectivity. These two parameters must always be specified together. Set `EnableVPCNetworking` to `false` to disable the VPC network interface (ENI) for the cluster. `EnableInternetAccessGateway` enables internet-based connectivity through an internet access gateway. IAM database authentication is required and must be enabled using `EnableIAMDatabaseAuthentication`. Once the cluster is restored, you need to modify the DB cluster to update `MasterUserAuthenticationType` to `iam-db-auth`.
 *
 * You can use the `AssociatedRoles` parameter to associate one or more Amazon Web Services Identity and Access Management (IAM) roles with an Aurora DB cluster when you restore it from a snapshot.
 *
 * > **Note:** This operation only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the `CreateDBInstance` operation to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in `DBClusterIdentifier`. You can create DB instances only after the `RestoreDBClusterFromSnapshot` operation has completed and the DB cluster is available.
 *
 * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterFromSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterFromSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 *   BacktrackWindow: Number("long"),
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   EngineMode: "STRING_VALUE",
 *   ScalingConfiguration: { // ScalingConfiguration
 *     MinCapacity: Number("int"),
 *     MaxCapacity: Number("int"),
 *     AutoPause: true || false,
 *     SecondsUntilAutoPause: Number("int"),
 *     TimeoutAction: "STRING_VALUE",
 *     SecondsBeforeTimeout: Number("int"),
 *   },
 *   DBClusterParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   CopyTagsToSnapshot: true || false,
 *   Domain: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   DBClusterInstanceClass: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   Iops: Number("int"),
 *   PubliclyAccessible: true || false,
 *   NetworkType: "STRING_VALUE",
 *   ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfiguration
 *     MinCapacity: Number("double"),
 *     MaxCapacity: Number("double"),
 *     SecondsUntilAutoPause: Number("int"),
 *   },
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
 * @param RestoreDBClusterFromSnapshotCommandInput - {@link RestoreDBClusterFromSnapshotCommandInput}
 * @returns {@link RestoreDBClusterFromSnapshotCommandOutput}
 * @see {@link RestoreDBClusterFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAlreadyExistsFault} (client fault)
 *
 * The user already has a DB cluster with the given identifier.
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
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *
 * `DBSnapshotIdentifier` doesn't refer to an existing DB snapshot.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *
 * Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.
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
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *
 * The DB instance isn't in a valid state.
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
 * @example To restore a DB cluster from a snapshot
 * ```javascript
 * // The following example restores an Aurora PostgreSQL DB cluster compatible with PostgreSQL version 10.7 from a DB cluster snapshot named test-instance-snapshot.
 * const input = {
 *   DBClusterIdentifier: "newdbcluster",
 *   Engine: "aurora-postgresql",
 *   EngineVersion: "10.7",
 *   SnapshotIdentifier: "test-instance-snapshot"
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
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
 *     ClusterCreateTime: "2020-06-05T15:06:58.634Z",
 *     CopyTagsToSnapshot: false,
 *     CrossAccountClone: false,
 *     DBClusterArn: "arn:aws:rds:us-west-2:123456789012:cluster:newdbcluster",
 *     DBClusterIdentifier: "newdbcluster",
 *     DBClusterMembers:     [],
 *     DBClusterParameterGroup: "default.aurora-postgresql10",
 *     DBSubnetGroup: "default",
 *     DatabaseName: "",
 *     DbClusterResourceId: "cluster-5DSB5IFQDDUVAWOUWM1EXAMPLE",
 *     DeletionProtection: false,
 *     DomainMemberships:     [],
 *     Endpoint: "newdbcluster.cluster-############.us-west-2.rds.amazonaws.com",
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
 *     ReaderEndpoint: "newdbcluster.cluster-ro-############.us-west-2.rds.amazonaws.com",
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
 * @example To restore a DB cluster from a snapshot without VPC networking
 * ```javascript
 * // The following example restores an Aurora DB cluster from a DB cluster snapshot named sample-cluster-snapshot without VPC networking and with internet-based connectivity enabled through an internet access gateway. The EnableVPCNetworking and EnableInternetAccessGateway parameters must always be specified together. IAM database authentication is required when both parameters are specified.
 * const input = {
 *   DBClusterIdentifier: "restored-cluster",
 *   EnableIAMDatabaseAuthentication: true,
 *   EnableInternetAccessGateway: true,
 *   EnableVPCNetworking: false,
 *   Engine: "aurora-postgresql",
 *   SnapshotIdentifier: "sample-cluster-snapshot"
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
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
 *     ClusterCreateTime: "2020-06-05T15:06:58.634Z",
 *     CopyTagsToSnapshot: false,
 *     CrossAccountClone: false,
 *     DBClusterArn: "arn:aws:rds:us-west-2:123456789012:cluster:restored-cluster",
 *     DBClusterIdentifier: "restored-cluster",
 *     DBClusterMembers:     [],
 *     DBClusterParameterGroup: "default.aurora-postgresql17",
 *     DatabaseName: "",
 *     DbClusterResourceId: "cluster-5DSB5IFQDDUVAWOUWM1EXAMPLE",
 *     DeletionProtection: false,
 *     DomainMemberships:     [],
 *     Engine: "aurora-postgresql",
 *     EngineMode: "provisioned",
 *     EngineVersion: "17.7",
 *     HttpEndpointEnabled: false,
 *     IAMDatabaseAuthenticationEnabled: true,
 *     MasterUsername: "postgres",
 *     MultiAZ: false,
 *     Port: 5432,
 *     PreferredBackupWindow: "09:33-10:03",
 *     PreferredMaintenanceWindow: "sun:12:22-sun:12:52",
 *     ReadReplicaIdentifiers:     [],
 *     Status: "creating",
 *     StorageEncrypted: false,
 *     VpcSecurityGroups:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @example To restore a DB cluster from a snapshot with an associated IAM role
 * ```javascript
 * // The following example restores an Aurora PostgreSQL DB cluster from a snapshot and associates an IAM role for Amazon S3 import in a single call.
 * const input = {
 *   AssociatedRoles: [
 *     {
 *       FeatureName: "s3Import",
 *       RoleArn: "arn:aws:iam::123456789012:role/RDSLoadFromS3"
 *     }
 *   ],
 *   DBClusterIdentifier: "restored-cluster",
 *   Engine: "aurora-postgresql",
 *   SnapshotIdentifier: "test-instance-snapshot"
 * };
 * const command = new RestoreDBClusterFromSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCluster: {
 *     AssociatedRoles: [
 *       {
 *         FeatureName: "s3Import",
 *         RoleArn: "arn:aws:iam::123456789012:role/RDSLoadFromS3",
 *         Status: "ACTIVE"
 *       }
 *     ],
 *     ClusterCreateTime: "2024-06-05T15:06:58.634Z",
 *     CopyTagsToSnapshot: false,
 *     CrossAccountClone: false,
 *     DBClusterArn: "arn:aws:rds:us-west-2:123456789012:cluster:restored-cluster",
 *     DBClusterIdentifier: "restored-cluster",
 *     DBClusterMembers:     [],
 *     DBClusterParameterGroup: "default.aurora-postgresql17",
 *     DatabaseName: "",
 *     DbClusterResourceId: "cluster-5DSB5IFQDDUVAWOUWM1EXAMPLE",
 *     DeletionProtection: false,
 *     DomainMemberships:     [],
 *     Engine: "aurora-postgresql",
 *     EngineMode: "provisioned",
 *     EngineVersion: "17.7",
 *     HttpEndpointEnabled: false,
 *     IAMDatabaseAuthenticationEnabled: true,
 *     MasterUsername: "postgres",
 *     MultiAZ: false,
 *     Port: 5432,
 *     PreferredBackupWindow: "09:33-10:03",
 *     PreferredMaintenanceWindow: "sun:12:22-sun:12:52",
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
