import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchUpdateTableRowsRequest, BatchUpdateTableRowsResult } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateTableRowsCommand,
  serializeAws_restJson1BatchUpdateTableRowsCommand,
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

export type BatchUpdateTableRowsCommandInput = BatchUpdateTableRowsRequest;
export type BatchUpdateTableRowsCommandOutput = BatchUpdateTableRowsResult & __MetadataBearer;

/**
 * <p>
 *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the specified
 *             rows.
 *             If a column is not explicitly specified in a particular row, then that column will not be updated
 *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
 *             ("").
 *         </p>
 */
export class BatchUpdateTableRowsCommand extends $Command<
  BatchUpdateTableRowsCommandInput,
  BatchUpdateTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateTableRowsCommandInput) {
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
  ): Handler<BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchUpdateTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateTableRowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateTableRowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateTableRowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateTableRowsCommandOutput> {
    return deserializeAws_restJson1BatchUpdateTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
