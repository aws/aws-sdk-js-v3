import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchCreateTableRowsRequest, BatchCreateTableRowsResult } from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateTableRowsCommand,
  serializeAws_restJson1BatchCreateTableRowsCommand,
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

export type BatchCreateTableRowsCommandInput = BatchCreateTableRowsRequest;
export type BatchCreateTableRowsCommandOutput = BatchCreateTableRowsResult & __MetadataBearer;

/**
 * <p>
 *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
 *             The API allows you to specify the values to set in some or all of the columns in the new rows.
 *         </p>
 *         <p>
 *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
 *             will be applied to the new row. If there is no column level formula but the last row of the table has a
 *             formula, then that formula will be copied down to the new row. If there is no column level formula and
 *             no formula in the last row of the table, then that column will be left blank for the new rows.
 *         </p>
 */
export class BatchCreateTableRowsCommand extends $Command<
  BatchCreateTableRowsCommandInput,
  BatchCreateTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchCreateTableRowsCommandInput) {
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
  ): Handler<BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchCreateTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateTableRowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateTableRowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchCreateTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchCreateTableRowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateTableRowsCommandOutput> {
    return deserializeAws_restJson1BatchCreateTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
