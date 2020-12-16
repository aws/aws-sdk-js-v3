import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { BatchDeleteTableRowsRequest, BatchDeleteTableRowsResult } from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteTableRowsCommand,
  serializeAws_restJson1BatchDeleteTableRowsCommand,
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

export type BatchDeleteTableRowsCommandInput = BatchDeleteTableRowsRequest;
export type BatchDeleteTableRowsCommandOutput = BatchDeleteTableRowsResult & __MetadataBearer;

/**
 * <p>
 *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
 *             You need to specify the ids of the rows that you want to delete from the table.
 *         </p>
 */
export class BatchDeleteTableRowsCommand extends $Command<
  BatchDeleteTableRowsCommandInput,
  BatchDeleteTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteTableRowsCommandInput) {
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
  ): Handler<BatchDeleteTableRowsCommandInput, BatchDeleteTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchDeleteTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteTableRowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteTableRowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteTableRowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteTableRowsCommandOutput> {
    return deserializeAws_restJson1BatchDeleteTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
