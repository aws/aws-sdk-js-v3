import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListDataSourcesRequest, ListDataSourcesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListDataSourcesCommand,
  serializeAws_restJson1ListDataSourcesCommand,
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

export interface ListDataSourcesCommandInput extends ListDataSourcesRequest {}
export interface ListDataSourcesCommandOutput extends ListDataSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists data sources in current Amazon Web Services Region; that belong to this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDataSourcesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDataSourcesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDataSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSourcesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDataSourcesCommand extends $Command<
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDataSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSourcesCommandInput, ListDataSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListDataSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataSourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDataSourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSourcesCommandOutput> {
    return deserializeAws_restJson1ListDataSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
