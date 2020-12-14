import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelReplicationTaskAssessmentRunCommand,
  serializeAws_json1_1CancelReplicationTaskAssessmentRunCommand,
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

export type CancelReplicationTaskAssessmentRunCommandInput = CancelReplicationTaskAssessmentRunMessage;
export type CancelReplicationTaskAssessmentRunCommandOutput = CancelReplicationTaskAssessmentRunResponse &
  __MetadataBearer;

/**
 * <p>Cancels a single premigration assessment run.</p>
 *          <p>This operation prevents any individual assessments from running if they haven't started
 *          running. It also attempts to cancel any individual assessments that are currently
 *          running.</p>
 */
export class CancelReplicationTaskAssessmentRunCommand extends $Command<
  CancelReplicationTaskAssessmentRunCommandInput,
  CancelReplicationTaskAssessmentRunCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CancelReplicationTaskAssessmentRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelReplicationTaskAssessmentRunMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CancelReplicationTaskAssessmentRunResponse.filterSensitiveLog,
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
