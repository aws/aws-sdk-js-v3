import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { CreateReplicationTaskMessage, CreateReplicationTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateReplicationTaskCommand,
  serializeAws_json1_1CreateReplicationTaskCommand,
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

export type CreateReplicationTaskCommandInput = CreateReplicationTaskMessage;
export type CreateReplicationTaskCommandOutput = CreateReplicationTaskResponse & __MetadataBearer;

/**
 * <p>Creates a replication task using the specified parameters.</p>
 */
export class CreateReplicationTaskCommand extends $Command<
  CreateReplicationTaskCommandInput,
  CreateReplicationTaskCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReplicationTaskCommandInput) {
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
  ): Handler<CreateReplicationTaskCommandInput, CreateReplicationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationTaskMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationTaskCommandOutput> {
    return deserializeAws_json1_1CreateReplicationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
