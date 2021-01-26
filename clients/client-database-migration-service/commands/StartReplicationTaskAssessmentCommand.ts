import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartReplicationTaskAssessmentCommand,
  serializeAws_json1_1StartReplicationTaskAssessmentCommand,
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

export type StartReplicationTaskAssessmentCommandInput = StartReplicationTaskAssessmentMessage;
export type StartReplicationTaskAssessmentCommandOutput = StartReplicationTaskAssessmentResponse & __MetadataBearer;

/**
 * <p> Starts the replication task assessment for unsupported data types in the source
 *          database. </p>
 */
export class StartReplicationTaskAssessmentCommand extends $Command<
  StartReplicationTaskAssessmentCommandInput,
  StartReplicationTaskAssessmentCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "StartReplicationTaskAssessmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReplicationTaskAssessmentMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StartReplicationTaskAssessmentResponse.filterSensitiveLog,
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
