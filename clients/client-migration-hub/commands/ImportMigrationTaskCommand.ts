import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ImportMigrationTaskRequest, ImportMigrationTaskResult } from "../models/models_0";
import {
  deserializeAws_json1_1ImportMigrationTaskCommand,
  serializeAws_json1_1ImportMigrationTaskCommand,
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

export type ImportMigrationTaskCommandInput = ImportMigrationTaskRequest;
export type ImportMigrationTaskCommandOutput = ImportMigrationTaskResult & __MetadataBearer;

/**
 * <p>Registers a new migration task which represents a server, database, etc., being migrated
 *          to AWS by a migration tool.</p>
 *          <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as
 *          the migration tool must first register the migration task with Migration Hub.</p>
 */
export class ImportMigrationTaskCommand extends $Command<
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportMigrationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportMigrationTaskCommandInput, ImportMigrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ImportMigrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportMigrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportMigrationTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportMigrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportMigrationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportMigrationTaskCommandOutput> {
    return deserializeAws_json1_1ImportMigrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
