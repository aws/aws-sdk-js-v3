// smithy-typescript generated code
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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDataSetsCommand,
  serializeAws_restJson1ListDataSetsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDataSetsCommandInput extends ListDataSetsRequest {}
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are
 *          associated with applications deployed on environments. This is known as importing data
 *          sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDataSetsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDataSetsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class ListDataSetsCommand extends $Command<
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
  M2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSetsCommandInput, ListDataSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "ListDataSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSetsCommandOutput> {
    return deserializeAws_restJson1ListDataSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
