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

import { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/models_0";
import {
  de_DescribeDBInstanceAutomatedBackupsCommand,
  se_DescribeDBInstanceAutomatedBackupsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBInstanceAutomatedBackupsCommand}.
 */
export interface DescribeDBInstanceAutomatedBackupsCommandInput extends DescribeDBInstanceAutomatedBackupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBInstanceAutomatedBackupsCommand}.
 */
export interface DescribeDBInstanceAutomatedBackupsCommandOutput
  extends DBInstanceAutomatedBackupMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Displays backups for both current and deleted
 *             instances. For example, use this operation to
 *             find details about automated backups for previously deleted instances. Current instances
 *             with retention periods greater than zero (0) are returned for both the
 *             <code>DescribeDBInstanceAutomatedBackups</code> and
 *             <code>DescribeDBInstances</code> operations.</p>
 *          <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBInstanceAutomatedBackupsMessage
 *   DbiResourceId: "STRING_VALUE",
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * };
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * // { // DBInstanceAutomatedBackupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBInstanceAutomatedBackups: [ // DBInstanceAutomatedBackupList
 * //     { // DBInstanceAutomatedBackup
 * //       DBInstanceArn: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       RestoreWindow: { // RestoreWindow
 * //         EarliestTime: new Date("TIMESTAMP"),
 * //         LatestTime: new Date("TIMESTAMP"),
 * //       },
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       OptionGroupName: "STRING_VALUE",
 * //       TdeCredentialArn: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       StorageType: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       BackupRetentionPeriod: Number("int"),
 * //       DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //         { // DBInstanceAutomatedBackupsReplication
 * //           DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       BackupTarget: "STRING_VALUE",
 * //       StorageThroughput: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBInstanceAutomatedBackupsCommandInput - {@link DescribeDBInstanceAutomatedBackupsCommandInput}
 * @returns {@link DescribeDBInstanceAutomatedBackupsCommandOutput}
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB instance was found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the automated backups for a DB instance
 * ```javascript
 * // The following example displays details about the automated backups for the specified DB instance. The details include replicated automated backups in other AWS Regions.
 * const input = {
 *   "DBInstanceIdentifier": "new-orcl-db"
 * };
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstanceAutomatedBackups": [
 *     {
 *       "AllocatedStorage": 20,
 *       "BackupRetentionPeriod": 14,
 *       "DBInstanceArn": "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db",
 *       "DBInstanceAutomatedBackupsArn": "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example",
 *       "DBInstanceIdentifier": "new-orcl-db",
 *       "DbiResourceId": "db-JKIB2GFQ5RV7REPLZA4EXAMPLE",
 *       "Encrypted": false,
 *       "Engine": "oracle-se2",
 *       "EngineVersion": "12.1.0.2.v21",
 *       "IAMDatabaseAuthenticationEnabled": false,
 *       "InstanceCreateTime": "2020-12-04T15:28:31Z",
 *       "LicenseModel": "bring-your-own-license",
 *       "MasterUsername": "admin",
 *       "OptionGroupName": "default:oracle-se2-12-1",
 *       "Port": 1521,
 *       "Region": "us-east-1",
 *       "RestoreWindow": {
 *         "EarliestTime": "2020-12-07T21:05:20.939Z",
 *         "LatestTime": "2020-12-07T21:05:20.939Z"
 *       },
 *       "Status": "replicating",
 *       "StorageType": "gp2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-automated-backups-for-a-db-instance-1680217198750
 * ```
 *
 */
export class DescribeDBInstanceAutomatedBackupsCommand extends $Command<
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
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
  constructor(readonly input: DescribeDBInstanceAutomatedBackupsCommandInput) {
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
  ): Handler<DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBInstanceAutomatedBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBInstanceAutomatedBackupsCommand";
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
    input: DescribeDBInstanceAutomatedBackupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDBInstanceAutomatedBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> {
    return de_DescribeDBInstanceAutomatedBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
