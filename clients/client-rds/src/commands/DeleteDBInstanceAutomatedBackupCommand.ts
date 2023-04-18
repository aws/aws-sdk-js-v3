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

import { DeleteDBInstanceAutomatedBackupMessage, DeleteDBInstanceAutomatedBackupResult } from "../models/models_0";
import {
  de_DeleteDBInstanceAutomatedBackupCommand,
  se_DeleteDBInstanceAutomatedBackupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteDBInstanceAutomatedBackupCommand}.
 */
export interface DeleteDBInstanceAutomatedBackupCommandInput extends DeleteDBInstanceAutomatedBackupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBInstanceAutomatedBackupCommand}.
 */
export interface DeleteDBInstanceAutomatedBackupCommandOutput
  extends DeleteDBInstanceAutomatedBackupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBInstanceAutomatedBackupMessage
 *   DbiResourceId: "STRING_VALUE",
 *   DBInstanceAutomatedBackupsArn: "STRING_VALUE",
 * };
 * const command = new DeleteDBInstanceAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBInstanceAutomatedBackupCommandInput - {@link DeleteDBInstanceAutomatedBackupCommandInput}
 * @returns {@link DeleteDBInstanceAutomatedBackupCommandOutput}
 * @see {@link DeleteDBInstanceAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB instance was found.</p>
 *
 * @throws {@link InvalidDBInstanceAutomatedBackupStateFault} (client fault)
 *  <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active instance.</p>
 *
 *
 * @example To delete a replicated automated backup from a Region
 * ```javascript
 * // The following example deletes the automated backup with the specified Amazon Resource Name (ARN).
 * const input = {
 *   "DBInstanceAutomatedBackupsArn": "arn:aws:rds:us-west-2:123456789012:auto-backup:ab-jkib2gfq5rv7replzadausbrktni2bn4example"
 * };
 * const command = new DeleteDBInstanceAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBInstanceAutomatedBackup": {
 *     "AllocatedStorage": 20,
 *     "AvailabilityZone": "us-east-1b",
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
 *     "RestoreWindow": {},
 *     "Status": "deleting",
 *     "StorageType": "gp2",
 *     "VpcId": "vpc-########"
 *   }
 * }
 * *\/
 * // example id: to-delete-a-replicated-automated-backup-from-a-region-1679963187406
 * ```
 *
 */
export class DeleteDBInstanceAutomatedBackupCommand extends $Command<
  DeleteDBInstanceAutomatedBackupCommandInput,
  DeleteDBInstanceAutomatedBackupCommandOutput,
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
  constructor(readonly input: DeleteDBInstanceAutomatedBackupCommandInput) {
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
  ): Handler<DeleteDBInstanceAutomatedBackupCommandInput, DeleteDBInstanceAutomatedBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBInstanceAutomatedBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBInstanceAutomatedBackupCommand";
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
    input: DeleteDBInstanceAutomatedBackupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteDBInstanceAutomatedBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> {
    return de_DeleteDBInstanceAutomatedBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
