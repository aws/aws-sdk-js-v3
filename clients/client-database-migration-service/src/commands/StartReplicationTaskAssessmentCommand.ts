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
import {
  StartReplicationTaskAssessmentMessage,
  StartReplicationTaskAssessmentMessageFilterSensitiveLog,
  StartReplicationTaskAssessmentResponse,
  StartReplicationTaskAssessmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartReplicationTaskAssessmentCommand,
  serializeAws_json1_1StartReplicationTaskAssessmentCommand,
} from "../protocols/Aws_json1_1";

export interface StartReplicationTaskAssessmentCommandInput extends StartReplicationTaskAssessmentMessage {}
export interface StartReplicationTaskAssessmentCommandOutput
  extends StartReplicationTaskAssessmentResponse,
    __MetadataBearer {}

/**
 * <p> Starts the replication task assessment for unsupported data types in the source
 *          database. </p>
 *          <p>You can only use this operation for a task if the following conditions are true:</p>
 *          <ul>
 *             <li>
 *                <p>The task must be in the <code>stopped</code> state.</p>
 *             </li>
 *             <li>
 *                <p>The task must have successful connections to the source and target.</p>
 *             </li>
 *          </ul>
 *          <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p>
 *          <p>For information about DMS task assessments, see
 *           <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
 *           in the <i>Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new StartReplicationTaskAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplicationTaskAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class StartReplicationTaskAssessmentCommand extends $Command<
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
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

  constructor(readonly input: StartReplicationTaskAssessmentCommandInput) {
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
  ): Handler<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReplicationTaskAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartReplicationTaskAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReplicationTaskAssessmentMessageFilterSensitiveLog,
      outputFilterSensitiveLog: StartReplicationTaskAssessmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartReplicationTaskAssessmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartReplicationTaskAssessmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartReplicationTaskAssessmentCommandOutput> {
    return deserializeAws_json1_1StartReplicationTaskAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
