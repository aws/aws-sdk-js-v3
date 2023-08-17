// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/models_0";
import { de_ListGeoLocationsCommand, se_ListGeoLocationsCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGeoLocationsCommand}.
 */
export interface ListGeoLocationsCommandInput extends ListGeoLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListGeoLocationsCommand}.
 */
export interface ListGeoLocationsCommandOutput extends ListGeoLocationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of supported geographic locations.</p>
 *          <p>Countries are listed first, and continents are listed last. If Amazon Route 53
 * 			supports subdivisions for a country (for example, states or provinces), the subdivisions
 * 			for that country are listed in alphabetical order immediately after the corresponding
 * 			country.</p>
 *          <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <p>For a list of supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data
 * 			type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListGeoLocationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListGeoLocationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListGeoLocationsRequest
 *   StartContinentCode: "STRING_VALUE",
 *   StartCountryCode: "STRING_VALUE",
 *   StartSubdivisionCode: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGeoLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListGeoLocationsResponse
 * //   GeoLocationDetailsList: [ // GeoLocationDetailsList // required
 * //     { // GeoLocationDetails
 * //       ContinentCode: "STRING_VALUE",
 * //       ContinentName: "STRING_VALUE",
 * //       CountryCode: "STRING_VALUE",
 * //       CountryName: "STRING_VALUE",
 * //       SubdivisionCode: "STRING_VALUE",
 * //       SubdivisionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   NextContinentCode: "STRING_VALUE",
 * //   NextCountryCode: "STRING_VALUE",
 * //   NextSubdivisionCode: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListGeoLocationsCommandInput - {@link ListGeoLocationsCommandInput}
 * @returns {@link ListGeoLocationsCommandOutput}
 * @see {@link ListGeoLocationsCommandInput} for command's `input` shape.
 * @see {@link ListGeoLocationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListGeoLocationsCommand extends $Command<
  ListGeoLocationsCommandInput,
  ListGeoLocationsCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: ListGeoLocationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGeoLocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListGeoLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListGeoLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListGeoLocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGeoLocationsCommandOutput> {
    return de_ListGeoLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
