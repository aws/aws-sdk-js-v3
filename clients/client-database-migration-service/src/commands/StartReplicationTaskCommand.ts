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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { StartReplicationTaskMessage, StartReplicationTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartReplicationTaskCommand,
  serializeAws_json1_1StartReplicationTaskCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartReplicationTaskCommand}.
 */
export interface StartReplicationTaskCommandInput extends StartReplicationTaskMessage {}
/**
 * @public
 *
 * The output of {@link StartReplicationTaskCommand}.
 */
export interface StartReplicationTaskCommandOutput extends StartReplicationTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the replication task.</p>
 *          <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the
 *             <i>Database Migration Service User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartReplicationTaskCommandInput - {@link StartReplicationTaskCommandInput}
 * @returns {@link StartReplicationTaskCommandOutput}
 * @see {@link StartReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 * @example Start replication task
 * ```javascript
 * // Starts the replication task.
 * const input = {
 *   "CdcStartTime": "2016-12-14T13:33:20Z",
 *   "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *   "StartReplicationTaskType": "start-replication"
 * };
 * const command = new StartReplicationTaskCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationTask": {
 *     "MigrationType": "full-load",
 *     "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *     "ReplicationTaskArn": "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
 *     "ReplicationTaskCreationDate": "2016-12-14T18:25:43Z",
 *     "ReplicationTaskIdentifier": "task1",
 *     "ReplicationTaskSettings": "{\"TargetMetadata\":{\"TargetSchema\":\"\",\"SupportLobs\":true,\"FullLobMode\":true,\"LobChunkSize\":64,\"LimitedSizeLobMode\":false,\"LobMaxSize\":0},\"FullLoadSettings\":{\"FullLoadEnabled\":true,\"ApplyChangesEnabled\":false,\"TargetTablePrepMode\":\"DROP_AND_CREATE\",\"CreatePkAfterFullLoad\":false,\"StopTaskCachedChangesApplied\":false,\"StopTaskCachedChangesNotApplied\":false,\"ResumeEnabled\":false,\"ResumeMinTableSize\":100000,\"ResumeOnlyClusteredPKTables\":true,\"MaxFullLoadSubTasks\":8,\"TransactionConsistencyTimeout\":600,\"CommitRate\":10000},\"Logging\":{\"EnableLogging\":false}}",
 *     "SourceEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
 *     "Status": "creating",
 *     "TableMappings": "file://mappingfile.json",
 *     "TargetEndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
 *   }
 * }
 * *\/
 * // example id: start-replication-task-1481762706778
 * ```
 *
 */
export class StartReplicationTaskCommand extends $Command<
  StartReplicationTaskCommandInput,
  StartReplicationTaskCommandOutput,
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
  constructor(readonly input: StartReplicationTaskCommandInput) {
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
  ): Handler<StartReplicationTaskCommandInput, StartReplicationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReplicationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartReplicationTaskCommand";
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
  private serialize(input: StartReplicationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartReplicationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReplicationTaskCommandOutput> {
    return deserializeAws_json1_1StartReplicationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
