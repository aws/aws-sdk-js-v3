// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RebootDBInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootDBInstanceCommand}.
 */
export interface RebootDBInstanceCommandInput extends RebootDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link RebootDBInstanceCommand}.
 */
export interface RebootDBInstanceCommandOutput extends RebootDBInstanceResult, __MetadataBearer {}

/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons.
 *         For example, if you make certain modifications,
 *         or if you change the DB parameter group associated with the DB instance,
 *         you must reboot the instance for the changes to take effect.</p>
 *          <p>Rebooting a DB instance restarts the database engine service.
 *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
 *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <p>If your DB instance is part of a Multi-AZ DB cluster, you can reboot the DB cluster with the <code>RebootDBCluster</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RebootDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RebootDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // RebootDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   ForceFailover: true || false,
 * };
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * // { // RebootDBInstanceResult
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
 * //         AllocatedStorage: Number("int"),
 * //         IOPS: Number("int"),
 * //         MaxAllocatedStorage: Number("int"),
 * //         StorageThroughput: Number("int"),
 * //         StorageType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageVolumeStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RebootDBInstanceCommandInput - {@link RebootDBInstanceCommandInput}
 * @returns {@link RebootDBInstanceCommandOutput}
 * @see {@link RebootDBInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To reboot a DB instance
 * ```javascript
 * // The following example starts a reboot of the specified DB instance.
 * const input = {
 *   DBInstanceIdentifier: "test-mysql-instance"
 * };
 * const command = new RebootDBInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBInstance: {
 *     DBInstanceClass: "db.t3.micro",
 *     DBInstanceIdentifier: "test-mysql-instance",
 *     DBInstanceStatus: "rebooting",
 *     Endpoint: {
 *       Address: "test-mysql-instance.############.us-west-2.rds.amazonaws.com",
 *       HostedZoneId: "Z1PVIF0EXAMPLE",
 *       Port: 3306
 *     },
 *     Engine: "mysql",
 *     MasterUsername: "admin"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RebootDBInstanceCommand extends $Command
  .classBuilder<
    RebootDBInstanceCommandInput,
    RebootDBInstanceCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "RebootDBInstance", {})
  .n("RDSClient", "RebootDBInstanceCommand")
  .sc(RebootDBInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootDBInstanceMessage;
      output: RebootDBInstanceResult;
    };
    sdk: {
      input: RebootDBInstanceCommandInput;
      output: RebootDBInstanceCommandOutput;
    };
  };
}
