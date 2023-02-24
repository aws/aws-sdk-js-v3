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
  CalculateRouteMatrixRequest,
  CalculateRouteMatrixRequestFilterSensitiveLog,
  CalculateRouteMatrixResponse,
  CalculateRouteMatrixResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CalculateRouteMatrixCommand,
  serializeAws_restJson1CalculateRouteMatrixCommand,
} from "../protocols/Aws_restJson1";

export interface CalculateRouteMatrixCommandInput extends CalculateRouteMatrixRequest {}
export interface CalculateRouteMatrixCommandOutput extends CalculateRouteMatrixResponse, __MetadataBearer {}

/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route
 *                 matrix</a> given the following required parameters:
 *                 <code>DeparturePositions</code> and <code>DestinationPositions</code>.
 *                 <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and
 *             travel distance from each departure position to each destination position in the
 *             request. For example, given departure positions A and B, and destination positions X and
 *             Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to
 *             X, A to Y, B to X, and B to Y (in that order). The number of results returned (and
 *             routes calculated) will be the number of <code>DeparturePositions</code> times the
 *             number of <code>DestinationPositions</code>.</p>
 *          <note>
 *             <p>Your account is charged for each route calculated, not the number of
 *                 requests.</p>
 *          </note>
 *          <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
 *                 route calculator resource</a>.</p>
 *          <p>By default, a request that doesn't specify a departure time uses the best time of day
 *             to travel with the best traffic conditions when calculating routes.</p>
 *          <p>Additional options include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a
 *                         departure time</a> using either <code>DepartureTime</code> or
 *                         <code>DepartNow</code>. This calculates routes based on predictive traffic
 *                     data at the given time. </p>
 *                <note>
 *                   <p>You can't specify both <code>DepartureTime</code> and
 *                             <code>DepartNow</code> in a single request. Specifying both parameters
 *                         returns a validation error.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel
 *                         mode</a> using TravelMode sets the transportation mode used to calculate
 *                     the routes. This also lets you specify additional route preferences in
 *                         <code>CarModeOptions</code> if traveling by <code>Car</code>, or
 *                         <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteMatrixCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteMatrixCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CalculateRouteMatrixCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CalculateRouteMatrixCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteMatrixCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class CalculateRouteMatrixCommand extends $Command<
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
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

  constructor(readonly input: CalculateRouteMatrixCommandInput) {
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
  ): Handler<CalculateRouteMatrixCommandInput, CalculateRouteMatrixCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CalculateRouteMatrixCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CalculateRouteMatrixCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CalculateRouteMatrixRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CalculateRouteMatrixResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CalculateRouteMatrixCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CalculateRouteMatrixCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CalculateRouteMatrixCommandOutput> {
    return deserializeAws_restJson1CalculateRouteMatrixCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
