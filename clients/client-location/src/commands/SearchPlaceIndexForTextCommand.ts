import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { SearchPlaceIndexForTextRequest, SearchPlaceIndexForTextResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchPlaceIndexForTextCommand,
  serializeAws_restJson1SearchPlaceIndexForTextCommand,
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

export interface SearchPlaceIndexForTextCommandInput extends SearchPlaceIndexForTextRequest {}
export interface SearchPlaceIndexForTextCommandOutput extends SearchPlaceIndexForTextResponse, __MetadataBearer {}

/**
 * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
 *          search for Places or points of interest. </p>
 *          <p>Includes the option to apply additional parameters to narrow your list of
 *          results.</p>
 *          <note>
 *             <p>You can search for places near a given position using <code>BiasPosition</code>, or
 *             filter results within a bounding box using <code>FilterBBox</code>. Providing both
 *             parameters simultaneously returns an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForTextCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForTextCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForTextCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SearchPlaceIndexForTextCommand extends $Command<
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchPlaceIndexForTextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchPlaceIndexForTextCommandInput, SearchPlaceIndexForTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "SearchPlaceIndexForTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchPlaceIndexForTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchPlaceIndexForTextResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchPlaceIndexForTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchPlaceIndexForTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchPlaceIndexForTextCommandOutput> {
    return deserializeAws_restJson1SearchPlaceIndexForTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
