// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  BatchUpsertTableRowsRequest,
  BatchUpsertTableRowsRequestFilterSensitiveLog,
  BatchUpsertTableRowsResult,
  BatchUpsertTableRowsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpsertTableRowsCommand,
  serializeAws_restJson1BatchUpsertTableRowsCommand,
} from "../protocols/Aws_restJson1";

export interface BatchUpsertTableRowsCommandInput extends BatchUpsertTableRowsRequest {}
export interface BatchUpsertTableRowsCommandOutput extends BatchUpsertTableRowsResult, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpsertTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpsertTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchUpsertTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpsertTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpsertTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 */
export class BatchUpsertTableRowsCommand extends $Command<
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpsertTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchUpsertTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpsertTableRowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchUpsertTableRowsResultFilterSensitiveLog,
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
