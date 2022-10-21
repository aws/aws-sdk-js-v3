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
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunMessageFilterSensitiveLog,
  CancelReplicationTaskAssessmentRunResponse,
  CancelReplicationTaskAssessmentRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand,
  serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand,
} from "../protocols/Aws_json1_1";

export interface CancelReplicationTaskAssessmentRunCommandInput extends CancelReplicationTaskAssessmentRunMessage {}
export interface CancelReplicationTaskAssessmentRunCommandOutput
  extends CancelReplicationTaskAssessmentRunResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a single premigration assessment run.</p>
 *          <p>This operation prevents any individual assessments from running if they haven't started
 *          running. It also attempts to cancel any individual assessments that are currently
 *          running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CancelReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link CancelReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class CancelReplicationTaskAssessmentRunCommand extends $Command<
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
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

  constructor(readonly input: CancelReplicationTaskAssessmentRunCommandInput) {
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
  ): Handler<CancelReplicationTaskAssessmentRunCommandInput, CancelReplicationTaskAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelReplicationTaskAssessmentRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CancelReplicationTaskAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelReplicationTaskAssessmentRunMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CancelReplicationTaskAssessmentRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelReplicationTaskAssessmentRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelReplicationTaskAssessmentRunCommandOutput> {
    return deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
