// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreDBInstanceFromDBSnapshotMessage, RestoreDBInstanceFromDBSnapshotResult } from "../models/models_1";
import { RestoreDBInstanceFromDBSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreDBInstanceFromDBSnapshotCommand}.
 */
export interface RestoreDBInstanceFromDBSnapshotCommandInput extends RestoreDBInstanceFromDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBInstanceFromDBSnapshotCommand}.
 */
export interface RestoreDBInstanceFromDBSnapshotCommandOutput extends RestoreDBInstanceFromDBSnapshotResult, __MetadataBearer {}

/**
 * Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most of the source's original configuration, including the default security group and DB parameter group. By default, the new DB instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.
 *
 * If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance before you call the `RestoreDBInstanceFromDBSnapshot` operation. RDS doesn't allow two DB instances with the same name. After you have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as the `DBInstanceIdentifier` in the call to the `RestoreDBInstanceFromDBSnapshot` operation. The result is that you replace the original DB instance with the DB instance created from the snapshot.
 *
 * If you are restoring from a shared manual DB snapshot, the `DBSnapshotIdentifier` must be the ARN of the shared DB snapshot.
 *
 * To restore from a DB snapshot with an unsupported engine version, you must first upgrade the engine version of the snapshot. For more information about upgrading a RDS for MySQL DB snapshot engine version, see [Upgrading a MySQL DB snapshot engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-upgrade-snapshot.html). For more information about upgrading a RDS for PostgreSQL DB snapshot engine version, [Upgrading a PostgreSQL DB snapshot engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBSnapshot.PostgreSQL.html).
 *
 * > **Note:** This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use `RestoreDBClusterFromSnapshot`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RestoreDBInstanceFromDBSnapshotMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   DBSnapshotIdentifier: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   Port: Number("int"),
 *   AvailabilityZone: "STRING_VALUE",
 *   DBSubnetGroupName: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   PubliclyAccessible: true || false,
 *   AutoMinorVersionUpgrade: true || false,
 *   LicenseModel: "STRING_VALUE",
 *   DBName: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   Iops: Number("int"),
 *   StorageThroughput: Number("int"),
 *   OptionGroupName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   StorageType: "STRING_VALUE",
 *   TdeCredentialArn: "STRING_VALUE",
 *   TdeCredentialPassword: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   Domain: "STRING_VALUE",
 *   DomainFqdn: "STRING_VALUE",
 *   DomainOu: "STRING_VALUE",
 *   DomainAuthSecretArn: "STRING_VALUE",
 *   DomainDnsIps: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   CopyTagsToSnapshot: true || false,
 *   DomainIAMRoleName: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   ProcessorFeatures: [ // ProcessorFeatureList
 *     { // ProcessorFeature
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   UseDefaultProcessorFeatures: true || false,
 *   DBParameterGroupName: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   EnableCustomerOwnedIp: true || false,
 *   NetworkType: "STRING_VALUE",
 *   BackupTarget: "STRING_VALUE",
 *   CustomIamInstanceProfile: "STRING_VALUE",
 *   AllocatedStorage: Number("int"),
 *   DBClusterSnapshotIdentifier: "STRING_VALUE",
 *   BackupRetentionPeriod: Number("int"),
 *   PreferredBackupWindow: "STRING_VALUE",
 *   DBCapacityReservationIdentifier: "STRING_VALUE",
 *   DedicatedLogVolume: true || false,
 *   CACertificateIdentifier: "STRING_VALUE",
 *   EngineLifecycleSupport: "STRING_VALUE",
 *   AdditionalStorageVolumes: [ // AdditionalStorageVolumesList
 *     { // AdditionalStorageVolume
 *       VolumeName: "STRING_VALUE", // required
 *       AllocatedStorage: Number("int"),
 *       IOPS: Number("int"),
 *       MaxAllocatedStorage: Number("int"),
 *       StorageThroughput: Number("int"),
 *       StorageType: "STRING_VALUE",
 *     },
 *   ],
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
 *   ManageMasterUserPassword: true || false,
 *   MasterUserSecretKmsKeyId: "STRING_VALUE",
 * };
 * const command = new RestoreDBInstanceFromDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreDBInstanceFromDBSnapshotResult
 * //   DBInstance: { // DBInstance
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     DBInstanceClass: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     DBInstanceStatus: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DBName: "STRING_VALUE",
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       HostedZoneId: "STRING_VALUE",
 * //     },
 * //     AllocatedStorage: Number("int"),
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBSecurityGroups: [ // DBSecurityGroupMembershipList
 * //       { // DBSecurityGroupMembership
 * //         DBSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBParameterGroups: [ // DBParameterGroupStatusList
 * //       { // DBParameterGroupStatus
 * //         DBParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AvailabilityZone: "STRING_VALUE",
 * //     DBSubnetGroup: { // DBSubnetGroup
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       DBSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetOutpost: { // Outpost
 * //             Arn: "STRING_VALUE",
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSubnetGroupArn: "STRING_VALUE",
 * //       SupportedNetworkTypes: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     UpgradeRolloutOrder: "first" || "second" || "last",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       DBInstanceClass: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       MasterUserPassword: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       BackupRetentionPeriod: Number("int"),
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       StorageThroughput: Number("int"),
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       CACertificateIdentifier: "STRING_VALUE",
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [ // LogTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ProcessorFeatures: [ // ProcessorFeatureList
 * //         { // ProcessorFeature
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AutomationMode: "full" || "all-paused",
 * //       ResumeFullAutomationModeTime: new Date("TIMESTAMP"),
 * //       MultiTenant: true || false,
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       DedicatedLogVolume: true || false,
 * //       Engine: "STRING_VALUE",
 * //       AdditionalStorageVolumes: [ // AdditionalStorageVolumesList
 * //         { // AdditionalStorageVolume
 * //           VolumeName: "STRING_VALUE", // required
 * //           AllocatedStorage: Number("int"),
 * //           IOPS: Number("int"),
 * //           MaxAllocatedStorage: Number("int"),
 * //           StorageThroughput: Number("int"),
 * //           StorageType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBCapacityReservationIdentifier: "STRING_VALUE",
 * //     },
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     MultiAZ: true || false,
 * //     EngineVersion: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     ReadReplicaSourceDBInstanceIdentifier: "STRING_VALUE",
 * //     ReadReplicaDBInstanceIdentifiers: [ // ReadReplicaDBInstanceIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReadReplicaDBClusterIdentifiers: [ // ReadReplicaDBClusterIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicaMode: "open-read-only" || "mounted",
 * //     LicenseModel: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     StorageThroughput: Number("int"),
 * //     OptionGroupMemberships: [ // OptionGroupMembershipList
 * //       { // OptionGroupMembership
 * //         OptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CharacterSetName: "STRING_VALUE",
 * //     NcharCharacterSetName: "STRING_VALUE",
 * //     SecondaryAvailabilityZone: "STRING_VALUE",
 * //     PubliclyAccessible: true || false,
 * //     StatusInfos: [ // DBInstanceStatusInfoList
 * //       { // DBInstanceStatusInfo
 * //         StatusType: "STRING_VALUE",
 * //         Normal: true || false,
 * //         Status: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageType: "STRING_VALUE",
 * //     StorageEncryptionType: "none" || "sse-kms" || "sse-rds",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     DbInstancePort: Number("int"),
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     CACertificateIdentifier: "STRING_VALUE",
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
 * //     CopyTagsToSnapshot: true || false,
 * //     MonitoringInterval: Number("int"),
 * //     EnhancedMonitoringResourceArn: "STRING_VALUE",
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     PromotionTier: Number("int"),
 * //     DBInstanceArn: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     DatabaseInsightsMode: "standard" || "advanced",
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     PerformanceInsightsRetentionPeriod: Number("int"),
 * //     EnabledCloudwatchLogsExports: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ProcessorFeatures: [
 * //       {
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DeletionProtection: true || false,
 * //     AssociatedRoles: [ // DBInstanceRoles
 * //       { // DBInstanceRole
 * //         RoleArn: "STRING_VALUE",
 * //         FeatureName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ListenerEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       HostedZoneId: "STRING_VALUE",
 * //     },
 * //     MaxAllocatedStorage: Number("int"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AutomationMode: "full" || "all-paused",
 * //     ResumeFullAutomationModeTime: new Date("TIMESTAMP"),
 * //     CustomerOwnedIpEnabled: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamEngineNativeAuditFieldsIncluded: true || false,
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //       { // DBInstanceAutomatedBackupsReplication
 * //         DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BackupTarget: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     CustomIamInstanceProfile: "STRING_VALUE",
 * //     ActivityStreamPolicyStatus: "locked" || "unlocked" || "locking-policy" || "unlocking-policy",
 * //     CertificateDetails: { // CertificateDetails
 * //       CAIdentifier: "STRING_VALUE",
 * //       ValidTill: new Date("TIMESTAMP"),
 * //     },
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     ReadReplicaSourceDBClusterIdentifier: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     MultiTenant: true || false,
 * //     DedicatedLogVolume: true || false,
 * //     IsStorageConfigUpgradeAvailable: true || false,
 * //     EngineLifecycleSupport: "STRING_VALUE",
 * //     AdditionalStorageVolumes: [ // AdditionalStorageVolumesOutputList
 * //       { // AdditionalStorageVolumeOutput
 * //         VolumeName: "STRING_VALUE",
 * //         StorageVolumeStatus: "STRING_VALUE",
 * //         StorageOperationStatus: "STRING_VALUE",
 * //         StorageOperationPercentProgress: Number("int"),
 * //         AllocatedStorage: Number("int"),
 * //         IOPS: Number("int"),
 * //         MaxAllocatedStorage: Number("int"),
 * //         StorageThroughput: Number("int"),
 * //         StorageType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageVolumeStatus: "STRING_VALUE",
 * //     StorageOperationStatus: "STRING_VALUE",
 * //     StorageOperationPercentProgress: Number("int"),
 * //     DBCapacityReservationIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreDBInstanceFromDBSnapshotCommandInput - {@link RestoreDBInstanceFromDBSnapshotCommandInput}
 * @returns {@link RestoreDBInstanceFromDBSnapshotCommandOutput}
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *
 * The specified CIDR IP range or Amazon EC2 security group might not be authorized for the specified DB security group.
 *
 * Or, RDS might not be authorized to perform necessary actions using IAM on your behalf.
 *
 * @throws {@link BackupPolicyNotFoundFault} (client fault)
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *
 * `CertificateIdentifier` doesn't refer to an existing certificate.
 *
 * @throws {@link DBCapacityReservationNotFoundFault} (client fault)
 *
 * `DBCapacityReservationIdentifier` doesn't refer to an existing DB capacity reservation.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *
 * `DBClusterSnapshotIdentifier` doesn't refer to an existing DB cluster snapshot.
 *
 * @throws {@link DBInstanceAlreadyExistsFault} (client fault)
 *
 * The user already has a DB instance with the given identifier.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * `DBParameterGroupName` doesn't refer to an existing DB parameter group.
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *
 * `DBSecurityGroupName` doesn't refer to an existing DB security group.
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
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB instances.
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *
 * The specified DB instance class isn't available in the specified Availability Zone.
 *
 * @throws {@link InvalidDBCapacityReservationStateFault} (client fault)
 *
 * The DB capacity reservation isn't in a valid state.
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
 * @throws {@link ProvisionedIopsNotAvailableInAZFault} (client fault)
 *
 * Provisioned IOPS not available in the specified Availability Zone.
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed amount of storage available across all DB instances.
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *
 * The specified `StorageType` can't be associated with the DB instance.
 *
 * @throws {@link TenantDatabaseQuotaExceededFault} (client fault)
 *
 * You attempted to create more tenant databases than are permitted in your Amazon Web Services account.
 *
 * @throws {@link VpcEncryptionControlViolationException} (client fault)
 *
 * The operation violates VPC encryption control settings. Make sure that your DB instance type supports the Nitro encryption-in-transit capability, or modify your VPC's encryption controls to not enforce encryption-in-transit.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To restore a DB instance from a DB snapshot```javascript
 * // The following example creates a new DB instance named db7-new-instance with the db.t3.small DB instance class from the specified DB snapshot. The source DB instance from which the snapshot was taken uses a deprecated DB instance class, so you can't upgrade it.
 * const input = {
 *   DBInstanceClass: "db.t3.small",
 *   DBInstanceIdentifier: "db7-new-instance",
 *   DBSnapshotIdentifier: "db7-test-snapshot"
 * };
 * const command = new RestoreDBInstanceFromDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBInstance: {
 *     AssociatedRoles:     [],
 *     AutoMinorVersionUpgrade: true,
 *     DBInstanceArn: "arn:aws:rds:us-west-2:123456789012:db:db7-new-instance",
 *     DBInstanceClass: "db.t3.small",
 *     DBInstanceIdentifier: "db7-new-instance",
 *     DBInstanceStatus: "creating",
 *     DeletionProtection: false,
 *     Engine: "mysql",
 *     EngineVersion: "5.7.22",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     LicenseModel: "general-public-license",
 *     MultiAZ: false,
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PerformanceInsightsEnabled: false,
 *     PreferredMaintenanceWindow: "mon:07:37-mon:08:07",
 *     ReadReplicaDBInstanceIdentifiers:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RestoreDBInstanceFromDBSnapshotCommand extends command<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "RestoreDBInstanceFromDBSnapshot",
  RestoreDBInstanceFromDBSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreDBInstanceFromDBSnapshotMessage;
      output: RestoreDBInstanceFromDBSnapshotResult;
    };
    sdk: {
      input: RestoreDBInstanceFromDBSnapshotCommandInput;
      output: RestoreDBInstanceFromDBSnapshotCommandOutput;
    };
  };
}
