import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchUpsertTableRowsRequest, BatchUpsertTableRowsResult } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpsertTableRowsCommand,
  serializeAws_restJson1BatchUpsertTableRowsCommand,
} from "../protocols/Aws_restJson1";
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

export type BatchUpsertTableRowsCommandInput = BatchUpsertTableRowsRequest;
export type BatchUpsertTableRowsCommandOutput = BatchUpsertTableRowsResult & __MetadataBearer;

/**
 * <p>
 *             The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert
 *             operation takes a filter expression as input and evaluates it to find matching rows on the destination
 *             table. If matching rows are found, it will update the cells in the matching rows to new values specified
 *             in the request. If no matching rows are found, a new row is added at the end of the table and the cells in
 *             that row are set to the new values specified in the request.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the
 *             matching or newly appended rows. If a column is not explicitly specified for a particular row, then that
 *             column will not be updated for that row. To clear out the data in a specific cell, you need to set the value
 *             as an empty string ("").
 *         </p>
 */
export class BatchUpsertTableRowsCommand extends $Command<
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpsertTableRowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpsertTableRowsCommandInput, BatchUpsertTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchUpsertTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpsertTableRowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpsertTableRowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpsertTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpsertTableRowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpsertTableRowsCommandOutput> {
    return deserializeAws_restJson1BatchUpsertTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
