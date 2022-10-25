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
  BatchDeleteTableRowsRequest,
  BatchDeleteTableRowsRequestFilterSensitiveLog,
  BatchDeleteTableRowsResult,
  BatchDeleteTableRowsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteTableRowsCommand,
  serializeAws_restJson1BatchDeleteTableRowsCommand,
} from "../protocols/Aws_restJson1";

export interface BatchDeleteTableRowsCommandInput extends BatchDeleteTableRowsRequest {}
export interface BatchDeleteTableRowsCommandOutput extends BatchDeleteTableRowsResult, __MetadataBearer {}

/**
 * <p>
 *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
 *             You need to specify the ids of the rows that you want to delete from the table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchDeleteTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchDeleteTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchDeleteTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 */
export class BatchDeleteTableRowsCommand extends $Command<
  BatchDeleteTableRowsCommandInput,
  BatchDeleteTableRowsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchDeleteTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteTableRowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteTableRowsResultFilterSensitiveLog,
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
