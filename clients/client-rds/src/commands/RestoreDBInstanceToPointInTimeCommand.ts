// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { RestoreDBInstanceToPointInTimeMessage, RestoreDBInstanceToPointInTimeResult } from "../models/models_1";
import {
  deserializeAws_queryRestoreDBInstanceToPointInTimeCommand,
  serializeAws_queryRestoreDBInstanceToPointInTimeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link RestoreDBInstanceToPointInTimeCommand}.
 */
export interface RestoreDBInstanceToPointInTimeCommandInput extends RestoreDBInstanceToPointInTimeMessage {}
/**
 * @public
 *
 * The output of {@link RestoreDBInstanceToPointInTimeCommand}.
 */
export interface RestoreDBInstanceToPointInTimeCommandOutput
  extends RestoreDBInstanceToPointInTimeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p>
 *          <p>The target database is created with most of the original configuration, but in a
 *             system-selected Availability Zone, with the default security group, the default subnet
 *             group, and the default DB parameter group. By default, the new DB instance is created as
 *             a single-AZ deployment except when the instance is a SQL Server instance that has an
 *             option group that is associated with mirroring; in this case, the instance becomes a
 *             mirrored deployment and not a single-AZ deployment.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceToPointInTimeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceToPointInTimeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RestoreDBInstanceToPointInTimeMessage
 *   SourceDBInstanceIdentifier: "STRING_VALUE",
 *   TargetDBInstanceIdentifier: "STRING_VALUE", // required
 *   RestoreTime: new Date("TIMESTAMP"),
 *   UseLatestRestorableTime: true || false,
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
 *   OptionGroupName: "STRING_VALUE",
 *   CopyTagsToSnapshot: true || false,
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
 *   SourceDbiResourceId: "STRING_VALUE",
 *   MaxAllocatedStorage: Number("int"),
 *   SourceDBInstanceAutomatedBackupsArn: "STRING_VALUE",
 *   EnableCustomerOwnedIp: true || false,
 *   CustomIamInstanceProfile: "STRING_VALUE",
 *   BackupTarget: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 *   StorageThroughput: Number("int"),
 *   AllocatedStorage: Number("int"),
 * };
 * const command = new RestoreDBInstanceToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreDBInstanceToPointInTimeCommandInput - {@link RestoreDBInstanceToPointInTimeCommandInput}
 * @returns {@link RestoreDBInstanceToPointInTimeCommandOutput}
 * @see {@link RestoreDBInstanceToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceToPointInTimeCommandOutput} for command's `response` shape.
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
 * @throws {@link DBInstanceAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB instance with the given identifier.</p>
 *
 * @throws {@link DBInstanceAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB instance was found.</p>
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
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
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
 * @throws {@link PointInTimeRestoreNotEnabledFault} (client fault)
 *  <p>
 *             <code>SourceDBInstanceIdentifier</code>
 *         refers to a DB instance with
 *         <code>BackupRetentionPeriod</code> equal to 0.</p>
 *
 * @throws {@link ProvisionedIopsNotAvailableInAZFault} (client fault)
 *  <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 *
 * @throws {@link StorageTypeNotSupportedFault} (client fault)
 *  <p>Storage of the <code>StorageType</code> specified can't be associated
 *             with the DB instance.</p>
 *
 *
 * @example To restore a DB instance to a point in time.
 * ```javascript
 * // The following example restores a DB instance to a new DB instance at a point in time from the source DB instance.
 * const input = {
 *   "RestoreTime": "2016-09-13T18:45:00Z",
 *   "SourceDBInstanceIdentifier": "mysql-sample",
 *   "TargetDBInstanceIdentifier": "mysql-sample-restored"
 * };
 * const command = new RestoreDBInstanceToPointInTimeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstance": {
 *     "AllocatedStorage": 200,
 *     "AutoMinorVersionUpgrade": true,
 *     "AvailabilityZone": "us-west-2b",
 *     "BackupRetentionPeriod": 7,
 *     "CACertificateIdentifier": "rds-ca-2015",
 *     "CopyTagsToSnapshot": false,
 *     "DBInstanceArn": "arn:aws:rds:us-west-2:123456789012:db:mysql-sample-restored",
 *     "DBInstanceClass": "db.t2.small",
 *     "DBInstanceIdentifier": "mysql-sample-restored",
 *     "DBInstanceStatus": "available",
 *     "DBName": "sample",
 *     "DBParameterGroups": [
 *       {
 *         "DBParameterGroupName": "default.mysql5.6",
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
 *             "Name": "us-west-2a"
 *           },
 *           "SubnetIdentifier": "subnet-77e8db03",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2b"
 *           },
 *           "SubnetIdentifier": "subnet-c39989a1",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-west-2c"
 *           },
 *           "SubnetIdentifier": "subnet-4b267b0d",
 *           "SubnetStatus": "Active"
 *         }
 *       ],
 *       "VpcId": "vpc-c1c5b3a3"
 *     },
 *     "DbInstancePort": 0,
 *     "DbiResourceId": "db-VNZUCCBTEDC4WR7THXNJO72HVQ",
 *     "DomainMemberships": [],
 *     "Engine": "mysql",
 *     "EngineVersion": "5.6.27",
 *     "LicenseModel": "general-public-license",
 *     "MasterUsername": "mymasteruser",
 *     "MonitoringInterval": 0,
 *     "MultiAZ": false,
 *     "OptionGroupMemberships": [
 *       {
 *         "OptionGroupName": "default:mysql-5-6",
 *         "Status": "in-sync"
 *       }
 *     ],
 *     "PendingModifiedValues": {},
 *     "PreferredBackupWindow": "12:58-13:28",
 *     "PreferredMaintenanceWindow": "tue:10:16-tue:10:46",
 *     "PubliclyAccessible": true,
 *     "ReadReplicaDBInstanceIdentifiers": [],
 *     "StorageEncrypted": false,
 *     "StorageType": "gp2",
 *     "VpcSecurityGroups": [
 *       {
 *         "Status": "active",
 *         "VpcSecurityGroupId": "sg-e5e5b0d2"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-restore-a-db-instance-to-a-point-in-time-1473962652154
 * ```
 *
 */
export class RestoreDBInstanceToPointInTimeCommand extends $Command<
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
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
  constructor(readonly input: RestoreDBInstanceToPointInTimeCommandInput) {
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
  ): Handler<RestoreDBInstanceToPointInTimeCommandInput, RestoreDBInstanceToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBInstanceToPointInTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceToPointInTimeCommand";
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
  private serialize(
    input: RestoreDBInstanceToPointInTimeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceToPointInTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
