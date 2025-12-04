// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { CalculateRouteMatrixRequest, CalculateRouteMatrixResponse } from "../models/models_0";
import { CalculateRouteMatrix } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandInput extends CalculateRouteMatrixRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandOutput extends CalculateRouteMatrixResponse, __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the <a href="/location/latest/APIReference/API_CalculateRouteMatrix.html">V2 <code>CalculateRouteMatrix</code> </a> unless you require Grab data.</p> <ul> <li> <p>This version of <code>CalculateRouteMatrix</code> is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The version 2 <code>CalculateRouteMatrix</code> operation gives better results for matrix routing calculations.</p> </li> <li> <p>If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under <code>geo-routes</code> or <code>geo_routes</code>, not under <code>location</code>.</p> </li> <li> <p>Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.</p> </li> <li> <p>Start your version 2 API journey with the Routes V2 <a href="/location/latest/APIReference/API_Operations_Amazon_Location_Service_Routes_V2.html">API Reference</a> or the <a href="/location/latest/developerguide/routes.html">Developer Guide</a>.</p> </li> </ul> </important> <p> <a href="https://docs.aws.amazon.com/location/previous/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/previous/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/previous/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteMatrixCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteMatrixCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CalculateRouteMatrixRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DeparturePositions: [ // PositionList // required
 *     [ // Position
 *       Number("double"),
 *     ],
 *   ],
 *   DestinationPositions: [ // required
 *     [
 *       Number("double"),
 *     ],
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   DepartureTime: new Date("TIMESTAMP"),
 *   DepartNow: true || false,
 *   DistanceUnit: "STRING_VALUE",
 *   CarModeOptions: { // CalculateRouteCarModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *   },
 *   TruckModeOptions: { // CalculateRouteTruckModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *     Dimensions: { // TruckDimensions
 *       Length: Number("double"),
 *       Height: Number("double"),
 *       Width: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *     Weight: { // TruckWeight
 *       Total: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *   },
 *   Key: "STRING_VALUE",
 * };
 * const command = new CalculateRouteMatrixCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteMatrixResponse
 * //   RouteMatrix: [ // RouteMatrix // required
 * //     [ // RouteMatrixRow
 * //       { // RouteMatrixEntry
 * //         Distance: Number("double"),
 * //         DurationSeconds: Number("double"),
 * //         Error: { // RouteMatrixEntryError
 * //           Code: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   ],
 * //   SnappedDeparturePositions: [ // PositionList
 * //     [ // Position
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   SnappedDestinationPositions: [
 * //     [
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   Summary: { // CalculateRouteMatrixSummary
 * //     DataSource: "STRING_VALUE", // required
 * //     RouteCount: Number("int"), // required
 * //     ErrorCount: Number("int"), // required
 * //     DistanceUnit: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteMatrixCommandInput - {@link CalculateRouteMatrixCommandInput}
 * @returns {@link CalculateRouteMatrixCommandOutput}
 * @see {@link CalculateRouteMatrixCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteMatrixCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class CalculateRouteMatrixCommand extends $Command
  .classBuilder<
    CalculateRouteMatrixCommandInput,
    CalculateRouteMatrixCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "CalculateRouteMatrix", {})
  .n("LocationClient", "CalculateRouteMatrixCommand")
  .sc(CalculateRouteMatrix)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRouteMatrixRequest;
      output: CalculateRouteMatrixResponse;
    };
    sdk: {
      input: CalculateRouteMatrixCommandInput;
      output: CalculateRouteMatrixCommandOutput;
    };
  };
}
