// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ModifyDBInstanceMessage, ModifyDBInstanceResult } from "../models/models_1";
import { de_ModifyDBInstanceCommand, se_ModifyDBInstanceCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBInstanceCommand}.
 */
export interface ModifyDBInstanceCommandInput extends ModifyDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBInstanceCommand}.
 */
export interface ModifyDBInstanceCommandOutput extends ModifyDBInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies settings for a DB instance.
 *           You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
 *             To learn what modifications you can make to your DB instance,
 *             call <code>DescribeValidDBInstanceModifications</code>
 *             before you call <code>ModifyDBInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   DBInstanceClass: "STRING_VALUE",
 *   DBSubnetGroupName: "STRING_VALUE",
 *   DBSecurityGroups: [ // DBSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   ApplyImmediately: true || false,
 *   MasterUserPassword: "STRING_VALUE",
 *   DBParameterGroupName: "STRING_VALUE",
 *   BackupRetentionPeriod: Number("int"),
 *   PreferredBackupWindow: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 *   AutoMinorVersionUpgrade: true || false,
 *   LicenseModel: "STRING_VALUE",
 *   Iops: Number("int"),
 *   OptionGroupName: "STRING_VALUE",
 *   NewDBInstanceIdentifier: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   TdeCredentialArn: "STRING_VALUE",
 *   TdeCredentialPassword: "STRING_VALUE",
 *   CACertificateIdentifier: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 *   DomainFqdn: "STRING_VALUE",
 *   DomainOu: "STRING_VALUE",
 *   DomainAuthSecretArn: "STRING_VALUE",
 *   DomainDnsIps: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   CopyTagsToSnapshot: true || false,
 *   MonitoringInterval: Number("int"),
 *   DBPortNumber: Number("int"),
 *   PubliclyAccessible: true || false,
 *   MonitoringRoleArn: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   DisableDomain: true || false,
 *   PromotionTier: Number("int"),
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnablePerformanceInsights: true || false,
 *   PerformanceInsightsKMSKeyId: "STRING_VALUE",
 *   PerformanceInsightsRetentionPeriod: Number("int"),
 *   CloudwatchLogsExportConfiguration: { // CloudwatchLogsExportConfiguration
 *     EnableLogTypes: [ // LogTypeList
 *       "STRING_VALUE",
 *     ],
 *     DisableLogTypes: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ProcessorFeatures: [ // ProcessorFeatureList
 *     { // ProcessorFeature
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   UseDefaultProcessorFeatures: true || false,
 *   DeletionProtection: true || false,
 *   MaxAllocatedStorage: Number("int"),
 *   CertificateRotationRestart: true || false,
 *   ReplicaMode: "open-read-only" || "mounted",
 *   EnableCustomerOwnedIp: true || false,
 *   AwsBackupRecoveryPointArn: "STRING_VALUE",
 *   AutomationMode: "full" || "all-paused",
 *   ResumeFullAutomationModeMinutes: Number("int"),
 *   NetworkType: "STRING_VALUE",
 *   StorageThroughput: Number("int"),
 *   ManageMasterUserPassword: true || false,
 *   RotateMasterUserPassword: true || false,
 *   MasterUserSecretKmsKeyId: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   DedicatedLogVolume: true || false,
 * };
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBInstanceResult
 * //   DBInstance: { // DBInstance
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     DBInstanceClass: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     DBInstanceStatus: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
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
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       AutomationMode: "full" || "all-paused",
 * //       ResumeFullAutomationModeTime: new Date("TIMESTAMP"),
 * //       StorageThroughput: Number("int"),
 * //       Engine: "STRING_VALUE",
 * //       DedicatedLogVolume: true || false,
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
 * //     DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //       { // DBInstanceAutomatedBackupsReplication
 * //         DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CustomerOwnedIpEnabled: true || false,
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamEngineNativeAuditFieldsIncluded: true || false,
 * //     AutomationMode: "full" || "all-paused",
 * //     ResumeFullAutomationModeTime: new Date("TIMESTAMP"),
 * //     CustomIamInstanceProfile: "STRING_VALUE",
 * //     BackupTarget: "STRING_VALUE",
 * //     NetworkType: "STRING_VALUE",
 * //     ActivityStreamPolicyStatus: "locked" || "unlocked" || "locking-policy" || "unlocking-policy",
 * //     StorageThroughput: Number("int"),
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     CertificateDetails: { // CertificateDetails
 * //       CAIdentifier: "STRING_VALUE",
 * //       ValidTill: new Date("TIMESTAMP"),
 * //     },
 * //     ReadReplicaSourceDBClusterIdentifier: "STRING_VALUE",
 * //     PercentProgress: "STRING_VALUE",
 * //     DedicatedLogVolume: true || false,
 * //     IsStorageConfigUpgradeAvailable: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBInstanceCommandInput - {@link ModifyDBInstanceCommandInput}
 * @returns {@link ModifyDBInstanceCommandOutput}
 * @see {@link ModifyDBInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *          <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 *
 * @throws {@link BackupPolicyNotFoundFault} (client fault)
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *  <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.</p>
 *
 * @throws {@link DBInstanceAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB instance with the given identifier.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link DBUpgradeDependencyFailureFault} (client fault)
 *  <p>The DB upgrade failed because a resource the DB depends on can't be
 *             modified.</p>
 *
 * @throws {@link DomainNotFoundFault} (client fault)
 *  <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.</p>
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
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the DB security group doesn't allow deletion.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link NetworkTypeNotSupported} (client fault)
 *  <p>The network type is invalid for the DB instance. Valid nework type values are <code>IPV4</code> and <code>DUAL</code>.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link ProvisionedIopsNotAvailableInAZFault} (client fault)
 *  <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *  <p>The specified <code>StorageType</code> can't be associated with the DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify a DB instance
 * ```javascript
 * // The following example associates an option group and a parameter group with a compatible Microsoft SQL Server DB instance. The ApplyImmediately parameter causes the option and parameter groups to be associated immediately, instead of waiting until the next maintenance window.
 * const input = {
 *   "ApplyImmediately": true,
 *   "DBInstanceIdentifier": "database-2",
 *   "DBParameterGroupName": "test-sqlserver-se-2017",
 *   "OptionGroupName": "test-se-2017"
 * };
 * const command = new ModifyDBInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstance": {
 *     "AssociatedRoles": [],
 *     "AutoMinorVersionUpgrade": false,
 *     "AvailabilityZone": "us-west-2d",
 *     "CharacterSetName": "SQL_Latin1_General_CP1_CI_AS",
 *     "DBInstanceClass": "db.r4.large",
 *     "DBInstanceIdentifier": "database-2",
 *     "DBInstanceStatus": "available",
 *     "DBParameterGroups": [
 *       {
 *         "DBParameterGroupName": "test-sqlserver-se-2017",
 *         "ParameterApplyStatus": "applying"
 *       }
 *     ],
 *     "DeletionProtection": false,
 *     "Engine": "sqlserver-se",
 *     "EngineVersion": "14.00.3281.6.v1",
 *     "LicenseModel": "license-included",
 *     "MaxAllocatedStorage": 1000,
 *     "MultiAZ": true,
 *     "OptionGroupMemberships": [
 *       {
 *         "OptionGroupName": "test-se-2017",
 *         "Status": "pending-apply"
 *       }
 *     ],
 *     "PubliclyAccessible": true,
 *     "ReadReplicaDBInstanceIdentifiers": [],
 *     "SecondaryAvailabilityZone": "us-west-2c",
 *     "StorageType": "gp2"
 *   }
 * }
 * *\/
 * // example id: to-modify-a-db-instance-1680377584537
 * ```
 *
 */
export class ModifyDBInstanceCommand extends $Command<
  ModifyDBInstanceCommandInput,
  ModifyDBInstanceCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ModifyDBInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBInstanceCommandInput, ModifyDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "ModifyDBInstance",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBInstanceCommandOutput> {
    return de_ModifyDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
