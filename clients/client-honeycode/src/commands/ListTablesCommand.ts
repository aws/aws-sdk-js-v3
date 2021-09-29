import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { ListTablesRequest, ListTablesResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListTablesCommand,
  serializeAws_restJson1ListTablesCommand,
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

export interface ListTablesCommandInput extends ListTablesRequest {}
export interface ListTablesCommandOutput extends ListTablesResult, __MetadataBearer {}

/**
 * <p>
 *             The ListTables API allows you to retrieve a list of all the tables in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTablesCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTablesCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTablesCommand extends $Command<
  ListTablesCommandInput,
  ListTablesCommandOutput,
  HoneycodeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTablesCommandInput) {
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
  ): Handler<ListTablesCommandInput, ListTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "ListTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTablesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTablesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTablesCommandOutput> {
    return deserializeAws_restJson1ListTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
