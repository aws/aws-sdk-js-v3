// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDBInstanceMessage, StartDBInstanceResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDBInstanceCommand}.
 */
export interface StartDBInstanceCommandInput extends StartDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link StartDBInstanceCommand}.
 */
export interface StartDBInstanceCommandOutput extends StartDBInstanceResult, __MetadataBearer {}

/**
 * <p>Starts an Amazon RDS DB instance that was stopped using the Amazon Web Services console, the stop-db-instance CLI command, or the <code>StopDBInstance</code> operation.</p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StartInstance.html">
 *                 Starting an Amazon RDS DB instance That Was Previously Stopped</a> in the
 *             <i>Amazon RDS User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.
 *             For Aurora DB clusters, use <code>StartDBCluster</code> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // StartDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartDBInstanceCommand(input);
 * const response = await client.send(command);
 * // { // StartDBInstanceResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param StartDBInstanceCommandInput - {@link StartDBInstanceCommandInput}
 * @returns {@link StartDBInstanceCommandOutput}
 * @see {@link StartDBInstanceCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *          <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *  <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link VpcEncryptionControlViolationException} (client fault)
 *  <p>The operation violates VPC encryption control settings. Make sure that your DB
 *             instance type supports the Nitro encryption-in-transit capability,
 *             or modify your VPC's encryption controls to not enforce encryption-in-transit.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To start a DB instance
 * ```javascript
 * // The following example starts the specified DB instance.
 * const input = {
 *   DBInstanceIdentifier: "test-instance"
 * };
 * const command = new StartDBInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBInstance: {
 *     DBInstanceStatus: "starting"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartDBInstanceCommand extends $Command
  .classBuilder<
    StartDBInstanceCommandInput,
    StartDBInstanceCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "StartDBInstance", {})
  .n("RDSClient", "StartDBInstanceCommand")
  .sc(StartDBInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDBInstanceMessage;
      output: StartDBInstanceResult;
    };
    sdk: {
      input: StartDBInstanceCommandInput;
      output: StartDBInstanceCommandOutput;
    };
  };
}
