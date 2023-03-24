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

import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetGeoLocationCommand,
  serializeAws_restXmlGetGeoLocationCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 *
 * The input for {@link GetGeoLocationCommand}.
 */
export interface GetGeoLocationCommandInput extends GetGeoLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetGeoLocationCommand}.
 */
export interface GetGeoLocationCommandOutput extends GetGeoLocationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about whether a specified geographic location is supported for Amazon
 * 			Route 53 geolocation resource record sets.</p>
 *          <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <p>Use the following syntax to determine whether a continent is supported for
 * 			geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for
 * 					a continent</i>
 *             </code>
 *          </p>
 *          <p>Use the following syntax to determine whether a country is supported for
 * 			geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country
 * 					code</i>
 *             </code>
 *          </p>
 *          <p>Use the following syntax to determine whether a subdivision of a country is supported
 * 			for geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country
 * 					code</i>&subdivisioncode=<i>subdivision
 * 			code</i>
 *             </code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetGeoLocationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetGeoLocationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {
 *   ContinentCode: "STRING_VALUE",
 *   CountryCode: "STRING_VALUE",
 *   SubdivisionCode: "STRING_VALUE",
 * };
 * const command = new GetGeoLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetGeoLocationCommandInput - {@link GetGeoLocationCommandInput}
 * @returns {@link GetGeoLocationCommandOutput}
 * @see {@link GetGeoLocationCommandInput} for command's `input` shape.
 * @see {@link GetGeoLocationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchGeoLocation} (client fault)
 *  <p>Amazon Route 53 doesn't support the specified geographic location. For a list of
 * 			supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data
 * 			type.</p>
 *
 *
 */
export class GetGeoLocationCommand extends $Command<
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
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
  constructor(readonly input: GetGeoLocationCommandInput) {
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
  ): Handler<GetGeoLocationCommandInput, GetGeoLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGeoLocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetGeoLocationCommand";
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
  private serialize(input: GetGeoLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetGeoLocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeoLocationCommandOutput> {
    return deserializeAws_restXmlGetGeoLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
