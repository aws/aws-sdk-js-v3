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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyReplicationTaskMessage, ModifyReplicationTaskResponse } from "../models/models_1";
import { de_ModifyReplicationTaskCommand, se_ModifyReplicationTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationTaskCommand}.
 */
export interface ModifyReplicationTaskCommandInput extends ModifyReplicationTaskMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationTaskCommand}.
 */
export interface ModifyReplicationTaskCommandOutput extends ModifyReplicationTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified replication task.</p>
 *          <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p>
 *          <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the
 *             <i>Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationTaskMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   ReplicationTaskIdentifier: "STRING_VALUE",
 *   MigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 *   TableMappings: "STRING_VALUE",
 *   ReplicationTaskSettings: "STRING_VALUE",
 *   CdcStartTime: new Date("TIMESTAMP"),
 *   CdcStartPosition: "STRING_VALUE",
 *   CdcStopPosition: "STRING_VALUE",
 *   TaskData: "STRING_VALUE",
 * };
 * const command = new ModifyReplicationTaskCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationTaskResponse
 * //   ReplicationTask: { // ReplicationTask
 * //     ReplicationTaskIdentifier: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     MigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     TableMappings: "STRING_VALUE",
 * //     ReplicationTaskSettings: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     LastFailureMessage: "STRING_VALUE",
 * //     StopReason: "STRING_VALUE",
 * //     ReplicationTaskCreationDate: new Date("TIMESTAMP"),
 * //     ReplicationTaskStartDate: new Date("TIMESTAMP"),
 * //     CdcStartPosition: "STRING_VALUE",
 * //     CdcStopPosition: "STRING_VALUE",
 * //     RecoveryCheckpoint: "STRING_VALUE",
 * //     ReplicationTaskArn: "STRING_VALUE",
 * //     ReplicationTaskStats: { // ReplicationTaskStats
 * //       FullLoadProgressPercent: Number("int"),
 * //       ElapsedTimeMillis: Number("long"),
 * //       TablesLoaded: Number("int"),
 * //       TablesLoading: Number("int"),
 * //       TablesQueued: Number("int"),
 * //       TablesErrored: Number("int"),
 * //       FreshStartDate: new Date("TIMESTAMP"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       StopDate: new Date("TIMESTAMP"),
 * //       FullLoadStartDate: new Date("TIMESTAMP"),
 * //       FullLoadFinishDate: new Date("TIMESTAMP"),
 * //     },
 * //     TaskData: "STRING_VALUE",
 * //     TargetReplicationInstanceArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationTaskCommandInput - {@link ModifyReplicationTaskCommandInput}
 * @returns {@link ModifyReplicationTaskCommandOutput}
 * @see {@link ModifyReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class ModifyReplicationTaskCommand extends $Command<
  ModifyReplicationTaskCommandInput,
  ModifyReplicationTaskCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: ModifyReplicationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyReplicationTaskCommandInput, ModifyReplicationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyReplicationTaskCommand";
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
  private serialize(input: ModifyReplicationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyReplicationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReplicationTaskCommandOutput> {
    return de_ModifyReplicationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
