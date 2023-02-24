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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  SearchPlaceIndexForSuggestionsRequest,
  SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog,
  SearchPlaceIndexForSuggestionsResponse,
  SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand,
  serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand,
} from "../protocols/Aws_restJson1";

export interface SearchPlaceIndexForSuggestionsCommandInput extends SearchPlaceIndexForSuggestionsRequest {}
export interface SearchPlaceIndexForSuggestionsCommandOutput
  extends SearchPlaceIndexForSuggestionsResponse,
    __MetadataBearer {}

/**
 * <p>Generates suggestions for addresses and points of interest based on partial or
 *             misspelled free-form text. This operation is also known as autocomplete, autosuggest, or
 *             fuzzy matching.</p>
 *          <p>Optional parameters let you narrow your search results by bounding box or country, or
 *             bias your search toward a specific position on the globe.</p>
 *          <note>
 *             <p>You can search for suggested place names near a specified position by using
 *                     <code>BiasPosition</code>, or filter results within a bounding box by using
 *                     <code>FilterBBox</code>. These parameters are mutually exclusive; using both
 *                     <code>BiasPosition</code> and <code>FilterBBox</code> in the same command
 *                 returns an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForSuggestionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForSuggestionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForSuggestionsCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class SearchPlaceIndexForSuggestionsCommand extends $Command<
  SearchPlaceIndexForSuggestionsCommandInput,
  SearchPlaceIndexForSuggestionsCommandOutput,
  LocationClientResolvedConfig
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

  constructor(readonly input: SearchPlaceIndexForSuggestionsCommandInput) {
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
  ): Handler<SearchPlaceIndexForSuggestionsCommandInput, SearchPlaceIndexForSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchPlaceIndexForSuggestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "SearchPlaceIndexForSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchPlaceIndexForSuggestionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchPlaceIndexForSuggestionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SearchPlaceIndexForSuggestionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchPlaceIndexForSuggestionsCommandOutput> {
    return deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
