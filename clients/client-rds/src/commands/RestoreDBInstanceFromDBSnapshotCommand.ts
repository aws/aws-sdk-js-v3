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

import {
  RestoreDBInstanceFromDBSnapshotMessage,
  RestoreDBInstanceFromDBSnapshotMessageFilterSensitiveLog,
  RestoreDBInstanceFromDBSnapshotResult,
  RestoreDBInstanceFromDBSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
  serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * The input for {@link RestoreDBInstanceFromDBSnapshotCommand}.
 */
export interface RestoreDBInstanceFromDBSnapshotCommandInput extends RestoreDBInstanceFromDBSnapshotMessage {}
/**
 * The output of {@link RestoreDBInstanceFromDBSnapshotCommand}.
 */
export interface RestoreDBInstanceFromDBSnapshotCommandOutput
  extends RestoreDBInstanceFromDBSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most
 *             of the source's original configuration, including the default security group and DB parameter group. By default, the new DB
 *             instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group
 *             associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p>
 *          <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance
 *             before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you
 *             have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as
 *             the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original
 *             DB instance with the DB instance created from the snapshot.</p>
 *          <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
 *       must be the ARN of the shared DB snapshot.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceFromDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 *
 * @example To restore a DB instance from a DB snapshot.
 * ```javascript
 * // The following example restores a DB instance from a DB snapshot.
 * const input = {
 *   "DBInstanceIdentifier": "mysqldb-restored",
 *   "DBSnapshotIdentifier": "rds:mysqldb-2014-04-22-08-15"
 * };
 * const command = new RestoreDBInstanceFromDBSnapshotCommand(input);
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
 *     "DBInstanceArn": "arn:aws:rds:us-west-2:123456789012:db:mysqldb-restored",
 *     "DBInstanceClass": "db.t2.small",
 *     "DBInstanceIdentifier": "mysqldb-restored",
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
 * ```
 *
 */
export class RestoreDBInstanceFromDBSnapshotCommand extends $Command<
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
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

  constructor(readonly input: RestoreDBInstanceFromDBSnapshotCommandInput) {
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
  ): Handler<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBInstanceFromDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceFromDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreDBInstanceFromDBSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
