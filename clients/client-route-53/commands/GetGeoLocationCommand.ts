import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetGeoLocationCommand,
  serializeAws_restXmlGetGeoLocationCommand,
} from "../protocols/Aws_restXml";
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

export type GetGeoLocationCommandInput = GetGeoLocationRequest;
export type GetGeoLocationCommandOutput = GetGeoLocationResponse & __MetadataBearer;

/**
 * <p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation
 * 			resource record sets.</p>
 *
 * 		       <p>Use the following syntax to determine whether a continent is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i>
 *             </code>
 *          </p>
 *
 * 		       <p>Use the following syntax to determine whether a country is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>
 *             </code>
 *          </p>
 *
 * 		       <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&subdivisioncode=<i>subdivision code</i>
 *             </code>
 *          </p>
 */
export class GetGeoLocationCommand extends $Command<
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetGeoLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGeoLocationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGeoLocationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGeoLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetGeoLocationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeoLocationCommandOutput> {
    return deserializeAws_restXmlGetGeoLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
