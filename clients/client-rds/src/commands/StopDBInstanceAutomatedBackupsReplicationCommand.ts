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

import {
  StopDBInstanceAutomatedBackupsReplicationMessage,
  StopDBInstanceAutomatedBackupsReplicationResult,
} from "../models/models_1";
import {
  de_StopDBInstanceAutomatedBackupsReplicationCommand,
  se_StopDBInstanceAutomatedBackupsReplicationCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StopDBInstanceAutomatedBackupsReplicationCommandInput
  extends StopDBInstanceAutomatedBackupsReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StopDBInstanceAutomatedBackupsReplicationCommand}.
 */
export interface StopDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StopDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Stops automated backup replication for a DB instance.</p>
 *          <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StopDBInstanceAutomatedBackupsReplicationMessage
 *   SourceDBInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopDBInstanceAutomatedBackupsReplicationResult
 * //   DBInstanceAutomatedBackup: { // DBInstanceAutomatedBackup
 * //     DBInstanceArn: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     RestoreWindow: { // RestoreWindow
 * //       EarliestTime: new Date("TIMESTAMP"),
 * //       LatestTime: new Date("TIMESTAMP"),
 * //     },
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     OptionGroupName: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     StorageType: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //     DBInstanceAutomatedBackupsReplications: [ // DBInstanceAutomatedBackupsReplicationList
 * //       { // DBInstanceAutomatedBackupsReplication
 * //         DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BackupTarget: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     DedicatedLogVolume: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StopDBInstanceAutomatedBackupsReplicationCommandInput - {@link StopDBInstanceAutomatedBackupsReplicationCommandInput}
 * @returns {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput}
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To stop replicating automated backups
 * ```javascript
 * // The following example ends replication of automated backups. Replicated backups are retained according to the set backup retention period.
 * const input = {
 *   "SourceDBInstanceArn": "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db"
 * };
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstanceAutomatedBackup": {
 *     "AllocatedStorage": 20,
 *     "BackupRetentionPeriod": 7,
 *     "DBInstanceArn": "arn:aws:rds:us-east-1:123456789012:db:new-orcl-db",
 *     "DBInstanceAutomatedBackupsArn": "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example",
 *     "DBInstanceIdentifier": "new-orcl-db",
 *     "DbiResourceId": "db-JKIB2GFQ5RV7REPLZA4EXAMPLE",
 *     "Encrypted": false,
 *     "Engine": "oracle-se2",
 *     "EngineVersion": "12.1.0.2.v21",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "InstanceCreateTime": "2020-12-04T15:28:31Z",
 *     "LicenseModel": "bring-your-own-license",
 *     "MasterUsername": "admin",
 *     "OptionGroupName": "default:oracle-se2-12-1",
 *     "Port": 1521,
 *     "Region": "us-east-1",
 *     "RestoreWindow": {
 *       "EarliestTime": "2020-12-04T23:13:21.030Z",
 *       "LatestTime": "2020-12-07T19:59:57Z"
 *     },
 *     "Status": "replicating",
 *     "StorageType": "gp2"
 *   }
 * }
 * *\/
 * // example id: to-stop-replicating-automated-backups-1679701787115
 * ```
 *
 */
export class StopDBInstanceAutomatedBackupsReplicationCommand extends $Command<
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
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
  constructor(readonly input: StopDBInstanceAutomatedBackupsReplicationCommandInput) {
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
  ): Handler<
    StopDBInstanceAutomatedBackupsReplicationCommandInput,
    StopDBInstanceAutomatedBackupsReplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StopDBInstanceAutomatedBackupsReplicationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopDBInstanceAutomatedBackupsReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "StopDBInstanceAutomatedBackupsReplication",
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
  private serialize(
    input: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StopDBInstanceAutomatedBackupsReplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> {
    return de_StopDBInstanceAutomatedBackupsReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
