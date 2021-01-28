import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  StartReplicationTaskAssessmentRunMessage,
  StartReplicationTaskAssessmentRunResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand,
  serializeAws_json1_1StartReplicationTaskAssessmentRunCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StartReplicationTaskAssessmentRunCommandInput = StartReplicationTaskAssessmentRunMessage;
export type StartReplicationTaskAssessmentRunCommandOutput = StartReplicationTaskAssessmentRunResponse &
  __MetadataBearer;

/**
 * <p>Starts a new premigration assessment run for one or more individual assessments
 *          of a migration task.</p>
 *          <p>The assessments that you can specify depend on the source and target database engine and
 *          the migration type defined for the given task. To run this operation, your migration task
 *          must already be created. After you run this operation, you can review the status of each
 *          individual assessment. You can also run the migration task manually after the assessment
 *          run and its individual assessments complete.</p>
 */
export class StartReplicationTaskAssessmentRunCommand extends $Command<
  StartReplicationTaskAssessmentRunCommandInput,
  StartReplicationTaskAssessmentRunCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartReplicationTaskAssessmentRunCommandInput) {
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
  ): Handler<StartReplicationTaskAssessmentRunCommandInput, StartReplicationTaskAssessmentRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartReplicationTaskAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReplicationTaskAssessmentRunMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StartReplicationTaskAssessmentRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartReplicationTaskAssessmentRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartReplicationTaskAssessmentRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartReplicationTaskAssessmentRunCommandOutput> {
    return deserializeAws_json1_1StartReplicationTaskAssessmentRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
