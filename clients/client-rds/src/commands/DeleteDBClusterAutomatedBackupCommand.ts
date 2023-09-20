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

import { DeleteDBClusterAutomatedBackupMessage, DeleteDBClusterAutomatedBackupResult } from "../models/models_0";
import {
  de_DeleteDBClusterAutomatedBackupCommand,
  se_DeleteDBClusterAutomatedBackupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterAutomatedBackupCommand}.
 */
export interface DeleteDBClusterAutomatedBackupCommandInput extends DeleteDBClusterAutomatedBackupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterAutomatedBackupCommand}.
 */
export interface DeleteDBClusterAutomatedBackupCommandOutput
  extends DeleteDBClusterAutomatedBackupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes automated backups using the <code>DbClusterResourceId</code> value of the source DB cluster or the Amazon
 *             Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterAutomatedBackupMessage
 *   DbClusterResourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBClusterAutomatedBackupResult
 * //   DBClusterAutomatedBackup: { // DBClusterAutomatedBackup
 * //     Engine: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     DBClusterAutomatedBackupsArn: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     RestoreWindow: { // RestoreWindow
 * //       EarliestTime: new Date("TIMESTAMP"),
 * //       LatestTime: new Date("TIMESTAMP"),
 * //     },
 * //     MasterUsername: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     StorageEncrypted: true || false,
 * //     AllocatedStorage: Number("int"),
 * //     EngineVersion: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     BackupRetentionPeriod: Number("int"),
 * //     EngineMode: "STRING_VALUE",
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     Port: Number("int"),
 * //     KmsKeyId: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterAutomatedBackupCommandInput - {@link DeleteDBClusterAutomatedBackupCommandInput}
 * @returns {@link DeleteDBClusterAutomatedBackupCommandOutput}
 * @see {@link DeleteDBClusterAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterAutomatedBackupNotFoundFault} (client fault)
 *  <p>No automated backup for this DB cluster was found.</p>
 *
 * @throws {@link InvalidDBClusterAutomatedBackupStateFault} (client fault)
 *  <p>The automated backup is in an invalid state.
 *             For example, this automated backup is associated with an active cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class DeleteDBClusterAutomatedBackupCommand extends $Command<
  DeleteDBClusterAutomatedBackupCommandInput,
  DeleteDBClusterAutomatedBackupCommandOutput,
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
  constructor(readonly input: DeleteDBClusterAutomatedBackupCommandInput) {
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
  ): Handler<DeleteDBClusterAutomatedBackupCommandInput, DeleteDBClusterAutomatedBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterAutomatedBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBClusterAutomatedBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DeleteDBClusterAutomatedBackup",
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
    input: DeleteDBClusterAutomatedBackupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteDBClusterAutomatedBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDBClusterAutomatedBackupCommandOutput> {
    return de_DeleteDBClusterAutomatedBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
