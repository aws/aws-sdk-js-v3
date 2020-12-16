import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DeleteReplicationInstanceMessage, DeleteReplicationInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteReplicationInstanceCommand,
  serializeAws_json1_1DeleteReplicationInstanceCommand,
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

export type DeleteReplicationInstanceCommandInput = DeleteReplicationInstanceMessage;
export type DeleteReplicationInstanceCommandOutput = DeleteReplicationInstanceResponse & __MetadataBearer;

/**
 * <p>Deletes the specified replication instance.</p>
 *          <note>
 *             <p>You must delete any migration tasks that are associated with the replication instance
 *             before you can delete it.</p>
 *          </note>
 *          <p></p>
 */
export class DeleteReplicationInstanceCommand extends $Command<
  DeleteReplicationInstanceCommandInput,
  DeleteReplicationInstanceCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReplicationInstanceCommandInput) {
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
  ): Handler<DeleteReplicationInstanceCommandInput, DeleteReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteReplicationInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReplicationInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReplicationInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteReplicationInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteReplicationInstanceCommandOutput> {
    return deserializeAws_json1_1DeleteReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
