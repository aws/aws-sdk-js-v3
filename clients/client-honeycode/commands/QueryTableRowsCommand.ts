import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { QueryTableRowsRequest, QueryTableRowsResult } from "../models/models_0";
import {
  deserializeAws_restJson1QueryTableRowsCommand,
  serializeAws_restJson1QueryTableRowsCommand,
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

export type QueryTableRowsCommandInput = QueryTableRowsRequest;
export type QueryTableRowsCommandOutput = QueryTableRowsResult & __MetadataBearer;

/**
 * <p>
 *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
 *         </p>
 */
export class QueryTableRowsCommand extends $Command<
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: QueryTableRowsCommandInput) {
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
  ): Handler<QueryTableRowsCommandInput, QueryTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "QueryTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryTableRowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: QueryTableRowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1QueryTableRowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryTableRowsCommandOutput> {
    return deserializeAws_restJson1QueryTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
