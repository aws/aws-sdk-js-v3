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

import { RestoreDBInstanceFromS3Message, RestoreDBInstanceFromS3Result } from "../models/models_1";
import {
  deserializeAws_queryRestoreDBInstanceFromS3Command,
  serializeAws_queryRestoreDBInstanceFromS3Command,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link RestoreDBInstanceFromS3Command}.
 */
export interface RestoreDBInstanceFromS3CommandInput extends RestoreDBInstanceFromS3Message {}
/**
 * @public
 *
 * The output of {@link RestoreDBInstanceFromS3Command}.
 */
export interface RestoreDBInstanceFromS3CommandOutput extends RestoreDBInstanceFromS3Result, __MetadataBearer {}

/**
 * @public
 * <p>Amazon Relational Database Service (Amazon RDS)
 *             supports importing MySQL databases by using backup files.
 *             You can create a backup of your on-premises database,
 *             store it on Amazon Simple Storage Service (Amazon S3),
 *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
 *             in the <i>Amazon RDS User Guide.</i>
 *          </p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromS3Command } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   DBName: "STRING_VALUE",
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   DBInstanceClass: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   MasterUsername: "STRING_VALUE",
 *   MasterUserPassword: "STRING_VALUE",
 *   DBSecurityGroups: [
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [
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
 *   PubliclyAccessible: true || false,
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   StorageType: "STRING_VALUE",
 *   StorageEncrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   CopyTagsToSnapshot: true || false,
 *   MonitoringInterval: Number("int"),
 *   MonitoringRoleArn: "STRING_VALUE",
 *   EnableIAMDatabaseAuthentication: true || false,
 *   SourceEngine: "STRING_VALUE", // required
 *   SourceEngineVersion: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   S3Prefix: "STRING_VALUE",
 *   S3IngestionRoleArn: "STRING_VALUE", // required
 *   EnablePerformanceInsights: true || false,
 *   PerformanceInsightsKMSKeyId: "STRING_VALUE",
 *   PerformanceInsightsRetentionPeriod: Number("int"),
 *   EnableCloudwatchLogsExports: [
 *     "STRING_VALUE",
 *   ],
 *   ProcessorFeatures: [
 *     {
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   UseDefaultProcessorFeatures: true || false,
 *   DeletionProtection: true || false,
 *   MaxAllocatedStorage: Number("int"),
 *   NetworkType: "STRING_VALUE",
 *   StorageThroughput: Number("int"),
 *   ManageMasterUserPassword: true || false,
 *   MasterUserSecretKmsKeyId: "STRING_VALUE",
 * };
 * const command = new RestoreDBInstanceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreDBInstanceFromS3CommandInput - {@link RestoreDBInstanceFromS3CommandInput}
 * @returns {@link RestoreDBInstanceFromS3CommandOutput}
 * @see {@link RestoreDBInstanceFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromS3CommandOutput} for command's `response` shape.
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
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *  <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 *
 * @throws {@link InvalidS3BucketFault} (client fault)
 *  <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
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
 */
export class RestoreDBInstanceFromS3Command extends $Command<
  RestoreDBInstanceFromS3CommandInput,
  RestoreDBInstanceFromS3CommandOutput,
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
  constructor(readonly input: RestoreDBInstanceFromS3CommandInput) {
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
  ): Handler<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBInstanceFromS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceFromS3Command";
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
  private serialize(input: RestoreDBInstanceFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceFromS3Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDBInstanceFromS3CommandOutput> {
    return deserializeAws_queryRestoreDBInstanceFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
