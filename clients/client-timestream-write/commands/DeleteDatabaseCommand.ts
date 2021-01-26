import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { DeleteDatabaseRequest } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteDatabaseCommand,
  serializeAws_json1_0DeleteDatabaseCommand,
} from "../protocols/Aws_json1_0";
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
export type DeleteDatabaseCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
 *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
 *          </p>
 *
 *          <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
 *       </p>
 *
 *          <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 */
export class DeleteDatabaseCommand extends $Command<
  DeleteDatabaseCommandInput,
  DeleteDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
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
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "DeleteDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDatabaseCommandOutput> {
    return deserializeAws_json1_0DeleteDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
