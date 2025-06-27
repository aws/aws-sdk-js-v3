// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  CalculateRouteRequest,
  CalculateRouteRequestFilterSensitiveLog,
  CalculateRouteResponse,
  CalculateRouteResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CalculateRouteCommand, se_CalculateRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CalculateRouteCommand}.
 */
export interface CalculateRouteCommandInput extends CalculateRouteRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteCommand}.
 */
export interface CalculateRouteCommandOutput extends CalculateRouteResponse, __MetadataBearer {}

/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters:
 *                 <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that
 *             you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a
 *                 route calculator resource</a>.</p>
 *          <p>By default, a request that doesn't specify a departure time uses the best time of day
 *             to travel with the best traffic conditions when calculating the route.</p>
 *          <p>Additional options include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a
 *                         departure time</a> using either <code>DepartureTime</code> or
 *                         <code>DepartNow</code>. This calculates a route based on predictive traffic
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
 *                <note>
 *                   <p>If you specify <code>walking</code> for the travel mode and your data
 *                     provider is Esri, the start and destination must be within 40km.</p>
 *                </note>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CalculateRouteRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DeparturePosition: [ // Position // required
 *     Number("double"),
 *   ],
 *   DestinationPosition: [ // required
 *     Number("double"),
 *   ],
 *   WaypointPositions: [ // WaypointPositionList
 *     [
 *       Number("double"),
 *     ],
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   DepartureTime: new Date("TIMESTAMP"),
 *   DepartNow: true || false,
 *   DistanceUnit: "STRING_VALUE",
 *   IncludeLegGeometry: true || false,
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
 *   ArrivalTime: new Date("TIMESTAMP"),
 *   OptimizeFor: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new CalculateRouteCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteResponse
 * //   Legs: [ // LegList // required
 * //     { // Leg
 * //       StartPosition: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //       EndPosition: [ // required
 * //         Number("double"),
 * //       ],
 * //       Distance: Number("double"), // required
 * //       DurationSeconds: Number("double"), // required
 * //       Geometry: { // LegGeometry
 * //         LineString: [ // LineString
 * //           [
 * //             Number("double"),
 * //           ],
 * //         ],
 * //       },
 * //       Steps: [ // StepList // required
 * //         { // Step
 * //           StartPosition: [ // required
 * //             Number("double"),
 * //           ],
 * //           EndPosition: [ // required
 * //             Number("double"),
 * //           ],
 * //           Distance: Number("double"), // required
 * //           DurationSeconds: Number("double"), // required
 * //           GeometryOffset: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Summary: { // CalculateRouteSummary
 * //     RouteBBox: [ // BoundingBox // required
 * //       Number("double"),
 * //     ],
 * //     DataSource: "STRING_VALUE", // required
 * //     Distance: Number("double"), // required
 * //     DurationSeconds: Number("double"), // required
 * //     DistanceUnit: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteCommandInput - {@link CalculateRouteCommandInput}
 * @returns {@link CalculateRouteCommandOutput}
 * @see {@link CalculateRouteCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteCommandOutput} for command's `response` shape.
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
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class CalculateRouteCommand extends $Command
  .classBuilder<
    CalculateRouteCommandInput,
    CalculateRouteCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "CalculateRoute", {})
  .n("LocationClient", "CalculateRouteCommand")
  .f(CalculateRouteRequestFilterSensitiveLog, CalculateRouteResponseFilterSensitiveLog)
  .ser(se_CalculateRouteCommand)
  .de(de_CalculateRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRouteRequest;
      output: CalculateRouteResponse;
    };
    sdk: {
      input: CalculateRouteCommandInput;
      output: CalculateRouteCommandOutput;
    };
  };
}
