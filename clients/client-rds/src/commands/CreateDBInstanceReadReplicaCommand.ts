// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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

import { CreateDBInstanceReadReplicaMessage, CreateDBInstanceReadReplicaResult } from "../models/models_0";
import {
  deserializeAws_queryCreateDBInstanceReadReplicaCommand,
  serializeAws_queryCreateDBInstanceReadReplicaCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link CreateDBInstanceReadReplicaCommand}.
 */
export interface CreateDBInstanceReadReplicaCommandInput extends CreateDBInstanceReadReplicaMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBInstanceReadReplicaCommand}.
 */
export interface CreateDBInstanceReadReplicaCommandOutput extends CreateDBInstanceReadReplicaResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new DB instance that acts as a read replica for an existing source DB
 *             instance. You can create a read replica for a DB instance running MySQL, MariaDB,
 *             Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read
 *                 Replicas</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>Amazon Aurora doesn't support this operation. Call the <code>CreateDBInstance</code>
 *             operation to create a DB instance for an Aurora DB cluster.</p>
 *          <p>All read replica DB instances are created with backups disabled. All other DB
 *             instance attributes (including DB security groups and DB parameter groups) are inherited
 *             from the source DB instance, except as specified.</p>
 *          <important>
 *             <p>Your source DB instance must have backup retention enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBInstanceReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBInstanceReadReplicaMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   SourceDBInstanceIdentifier: "STRING_VALUE", // required
 *   DBInstanceClass: "STRING_VALUE",
 *   AvailabilityZone: "STRING_VALUE",
 *   Port: Number("int"),
 *   MultiAZ: true || false,
 *   AutoMinorVersionUpgrade: true || false,
 *   Iops: Number("int"),
 *   OptionGroupName: "STRING_VALUE",
 *   DBParameterGroupName: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   DBSubnetGroupName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   StorageType: "STRING_VALUE",
 *   CopyTagsToSnapshot: true || false,
 *   MonitoringInterval: Number("int"),
 *   MonitoringRoleArn: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
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
 *   UseDefaultProcessorFeatures: true || false,
 *   DeletionProtection: true || false,
 *   Domain: "STRING_VALUE",
 *   DomainIAMRoleName: "STRING_VALUE",
 *   ReplicaMode: "open-read-only" || "mounted",
 *   MaxAllocatedStorage: Number("int"),
 *   CustomIamInstanceProfile: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 *   StorageThroughput: Number("int"),
 *   EnableCustomerOwnedIp: true || false,
 *   AllocatedStorage: Number("int"),
 * };
 * const command = new CreateDBInstanceReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDBInstanceReadReplicaCommandInput - {@link CreateDBInstanceReadReplicaCommandInput}
 * @returns {@link CreateDBInstanceReadReplicaCommandOutput}
 * @see {@link CreateDBInstanceReadReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
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
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotAllowedFault} (client fault)
 *  <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie
 *             in the same region as the source instance.</p>
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
 * @throws {@link InvalidDBSubnetGroupFault} (client fault)
 *  <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing
 *             cross-region read replica of the same source instance.</p>
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
 *  <p>Storage of the <code>StorageType</code> specified can't be associated
 *             with the DB instance.</p>
 *
 *
 * @example To create a DB instance read replica.
 * ```javascript
 * // This example creates a DB instance read replica.
 * const input = {
 *   "AvailabilityZone": "us-east-1a",
 *   "CopyTagsToSnapshot": true,
 *   "DBInstanceClass": "db.t2.micro",
 *   "DBInstanceIdentifier": "mydbreadreplica",
 *   "PubliclyAccessible": true,
 *   "SourceDBInstanceIdentifier": "mymysqlinstance",
 *   "StorageType": "gp2",
 *   "Tags": [
 *     {
 *       "Key": "mydbreadreplicakey",
 *       "Value": "mydbreadreplicavalue"
 *     }
 *   ]
 * };
 * const command = new CreateDBInstanceReadReplicaCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstance": {}
 * }
 * *\/
 * // example id: create-db-instance-read-replica-81b41cd5-2871-4dae-bc59-3e264449d5fe
 * ```
 *
 */
export class CreateDBInstanceReadReplicaCommand extends $Command<
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
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
  constructor(readonly input: CreateDBInstanceReadReplicaCommandInput) {
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
  ): Handler<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBInstanceReadReplicaCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBInstanceReadReplicaCommand";
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
  private serialize(input: CreateDBInstanceReadReplicaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceReadReplicaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBInstanceReadReplicaCommandOutput> {
    return deserializeAws_queryCreateDBInstanceReadReplicaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
