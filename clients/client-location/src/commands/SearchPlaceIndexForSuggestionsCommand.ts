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
  de_SearchPlaceIndexForSuggestionsCommand,
  se_SearchPlaceIndexForSuggestionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SearchPlaceIndexForSuggestionsCommand}.
 */
export interface SearchPlaceIndexForSuggestionsCommandInput extends SearchPlaceIndexForSuggestionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchPlaceIndexForSuggestionsCommand}.
 */
export interface SearchPlaceIndexForSuggestionsCommandOutput
  extends SearchPlaceIndexForSuggestionsResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // SearchPlaceIndexForSuggestionsRequest
 *   IndexName: "STRING_VALUE", // required
 *   Text: "STRING_VALUE", // required
 *   BiasPosition: [ // Position
 *     Number("double"),
 *   ],
 *   FilterBBox: [ // BoundingBox
 *     Number("double"),
 *   ],
 *   FilterCountries: [ // CountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   Language: "STRING_VALUE",
 * };
 * const command = new SearchPlaceIndexForSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchPlaceIndexForSuggestionsCommandInput - {@link SearchPlaceIndexForSuggestionsCommandInput}
 * @returns {@link SearchPlaceIndexForSuggestionsCommandOutput}
 * @see {@link SearchPlaceIndexForSuggestionsCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
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

  /**
   * @public
   */
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

  /**
   * @internal
   */
  private serialize(
    input: SearchPlaceIndexForSuggestionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SearchPlaceIndexForSuggestionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchPlaceIndexForSuggestionsCommandOutput> {
    return de_SearchPlaceIndexForSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
