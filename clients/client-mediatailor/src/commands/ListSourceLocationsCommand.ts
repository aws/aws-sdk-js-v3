import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListSourceLocationsRequest, ListSourceLocationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSourceLocationsCommand,
  serializeAws_restJson1ListSourceLocationsCommand,
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

export interface ListSourceLocationsCommandInput extends ListSourceLocationsRequest {}
export interface ListSourceLocationsCommandOutput extends ListSourceLocationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of source locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListSourceLocationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListSourceLocationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListSourceLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSourceLocationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceLocationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSourceLocationsCommand extends $Command<
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSourceLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListSourceLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSourceLocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSourceLocationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSourceLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSourceLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSourceLocationsCommandOutput> {
    return deserializeAws_restJson1ListSourceLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
