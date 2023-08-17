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
} from "@smithy/types";

import { CreateDBInstanceMessage, CreateDBInstanceResult } from "../models/models_0";
import { de_CreateDBInstanceCommand, se_CreateDBInstanceCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBInstanceCommand}.
 */
export interface CreateDBInstanceCommandInput extends CreateDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBInstanceCommand}.
 */
export interface CreateDBInstanceCommandOutput extends CreateDBInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB instance.</p>
 *          <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.
 *            For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance
 *            to the cluster.</p>
 *          <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html">
 *             Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about creating a DB instance in an Aurora DB cluster, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html">
 *             Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBInstanceMessage
 *   DBName: "STRING_VALUE",
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   DBInstanceClass: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   MasterUsername: "STRING_VALUE",
 *   MasterUserPassword: "STRING_VALUE",
 *   DBSecurityGroups: [ // DBSecurityGroupNameList
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZone: "STRING_VALUE",
 *   DBSubnetGroupName: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   DBParameterGroupName: "STRING_VALUE",
 *   BackupRetentionPeriod: Number("int"),
 *   PreferredBackupWindow: "STRING_VALUE",
 *   Port: Number("int"),
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   LicenseModel: "STRING_VALUE",
 *   Iops: Number("int"),
 *   OptionGroupName: "STRING_VALUE",
 *   CharacterSetName: "STRING_VALUE",
 *   NcharCharacterSetName: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DBClusterIdentifier: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 *   TdeCredentialArn: "STRING_VALUE",
 *   TdeCredentialPassword: "STRING_VALUE",
 *   StorageEncrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 *   DomainFqdn: "STRING_VALUE",
 *   DomainOu: "STRING_VALUE",
 *   DomainAuthSecretArn: "STRING_VALUE",
 *   DomainDnsIps: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   CopyTagsToSnapshot: true || false,
 *   MonitoringInterval: Number("int"),
 *   MonitoringRoleArn: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   PromotionTier: Number("int"),
 *   Timezone: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   EnablePerformanceInsights: true || false,
 *   PerformanceInsightsKMSKeyId: "STRING_VALUE",
 *   PerformanceInsightsRetentionPeriod: Number("int"),
 *   EnableCloudwatchLogsExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 *   ProcessorFeatures: [ // ProcessorFeatureList
 *     { // ProcessorFeature
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DeletionProtection: true || false,
 *   MaxAllocatedStorage: Number("int"),
 *   EnableCustomerOwnedIp: true || false,
 *   CustomIamInstanceProfile: "STRING_VALUE",
 *   BackupTarget: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 *   StorageThroughput: Number("int"),
 *   ManageMasterUserPassword: true || false,
 *   MasterUserSecretKmsKeyId: "STRING_VALUE",
 *   CACertificateIdentifier: "STRING_VALUE",
 *   DBSystemId: "STRING_VALUE",
 * };
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBInstanceResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBInstanceCommandInput - {@link CreateDBInstanceCommandInput}
 * @returns {@link CreateDBInstanceCommandOutput}
 * @see {@link CreateDBInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB instance with the given identifier.</p>
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
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link DomainNotFoundFault} (client fault)
 *  <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.</p>
 *
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *  <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
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
 * @example To create a DB instance
 * ```javascript
 * // The following example uses the required options to launch a new DB instance.
 * const input = {
 *   "AllocatedStorage": 20,
 *   "DBInstanceClass": "db.t3.micro",
 *   "DBInstanceIdentifier": "test-mysql-instance",
 *   "Engine": "mysql",
 *   "MasterUserPassword": "secret99",
 *   "MasterUsername": "admin"
 * };
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstance": {
 *     "AllocatedStorage": 20,
 *     "AssociatedRoles": [],
 *     "AutoMinorVersionUpgrade": true,
 *     "BackupRetentionPeriod": 1,
 *     "CACertificateIdentifier": "rds-ca-2019",
 *     "CopyTagsToSnapshot": false,
 *     "DBInstanceArn": "arn:aws:rds:us-west-2:123456789012:db:test-mysql-instance",
 *     "DBInstanceClass": "db.t3.micro",
 *     "DBInstanceIdentifier": "test-mysql-instance",
 *     "DBInstanceStatus": "creating",
 *     "DBParameterGroups": [
 *       {
 *         "DBParameterGroupName": "default.mysql5.7",
 *         "ParameterApplyStatus": "in-sync"
 *       }
 *     ],
 *     "DBSecurityGroups": [],
 *     "DBSubnetGroup": {
 *       "DBSubnetGroupDescription": "default",
 *       "DBSubnetGroupName": "default",
 *       "SubnetGroupStatus": "Complete",
 *       "Subnets": [
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2c"
 *           },
 *           "SubnetIdentifier": "subnet-########",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2d"
 *           },
 *           "SubnetIdentifier": "subnet-########",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2a"
 *           },
 *           "SubnetIdentifier": "subnet-########",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2b"
 *           },
 *           "SubnetIdentifier": "subnet-########",
 *           "SubnetStatus": "Active"
 *         }
 *       ],
 *       "VpcId": "vpc-2ff2ff2f"
 *     },
 *     "DbInstancePort": 0,
 *     "DbiResourceId": "db-5555EXAMPLE44444444EXAMPLE",
 *     "DeletionProtection": false,
 *     "DomainMemberships": [],
 *     "Engine": "mysql",
 *     "EngineVersion": "5.7.22",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "LicenseModel": "general-public-license",
 *     "MasterUsername": "admin",
 *     "MonitoringInterval": 0,
 *     "MultiAZ": false,
 *     "OptionGroupMemberships": [
 *       {
 *         "OptionGroupName": "default:mysql-5-7",
 *         "Status": "in-sync"
 *       }
 *     ],
 *     "PendingModifiedValues": {
 *       "MasterUserPassword": "****"
 *     },
 *     "PerformanceInsightsEnabled": false,
 *     "PreferredBackupWindow": "12:55-13:25",
 *     "PreferredMaintenanceWindow": "sun:08:07-sun:08:37",
 *     "PubliclyAccessible": true,
 *     "ReadReplicaDBInstanceIdentifiers": [],
 *     "StorageEncrypted": false,
 *     "StorageType": "gp2",
 *     "VpcSecurityGroups": [
 *       {
 *         "Status": "active",
 *         "VpcSecurityGroupId": "sg-12345abc"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-create-a-db-instance-1679703299533
 * ```
 *
 */
export class CreateDBInstanceCommand extends $Command<
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
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
  constructor(readonly input: CreateDBInstanceCommandInput) {
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
  ): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBInstanceCommandOutput> {
    return de_CreateDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
