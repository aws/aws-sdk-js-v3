import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDatabaseCommand,
  serializeAws_json1_1DeleteDatabaseCommand,
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

export type DeleteDatabaseCommandInput = DeleteDatabaseRequest;
export type DeleteDatabaseCommandOutput = DeleteDatabaseResponse & __MetadataBearer;

/**
 * <p>Removes a specified database from a Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the tables (and all table
 *         versions and partitions that might belong to the tables) and the user-defined functions in
 *         the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely
 *         manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
 *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
 *         belong to the database.</p>
 *          </note>
 */
export class DeleteDatabaseCommand extends $Command<
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDatabaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatabaseCommandOutput> {
    return deserializeAws_json1_1DeleteDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
